import useLocalStorage from "./useLocalStorage";
import { IMusicContext } from "@/types/context";

const usePlaylists = () => {
  const storedKeyName = "playlists";
  const { getDataFromLocalStorage } = useLocalStorage();

  function getPlaylistData(playlistName: string) {
    const parsedPlaylists = getDataFromLocalStorage(storedKeyName);
    return parsedPlaylists ? parsedPlaylists[playlistName] : [];
  }

  const removeSongFromPlaylist = (playlistContext: IMusicContext, array: IMusicContext[]) => {
    return array.filter((item) => item.song.id !== playlistContext.song.id);
  };

  const addSongToPlaylist = (
    playlistContext: IMusicContext,
    playlistToBeEdited: IMusicContext[]
  ) => {
    return [...playlistToBeEdited, { ...playlistContext }];
  };

  function getDefaultPlaylistName() {
    const parsedPlaylists = getDataFromLocalStorage(storedKeyName);
    return parsedPlaylists ? Object.keys(parsedPlaylists)[0] : "";
  }

  function getAllPlaylistsName() {
    const parsedPlaylists = getDataFromLocalStorage(storedKeyName);
    return parsedPlaylists ? Object.keys(parsedPlaylists) : [""];
  }

  const checkIsSongExistsInPlaylist = (playlistContext: IMusicContext, array: IMusicContext[]) => {
    return array.some((item) => item.song.id === playlistContext.song.id);
  };

  function extractSongIdsFromPlaylist(playlistData: IMusicContext[]) {
    return playlistData.map((item: IMusicContext) => item.song.id.toString());
  }

  function checkSongIsLikedInPlaylists(likedSongsIdList: string[], songDetail: IMusicContext) {
    return likedSongsIdList.includes(songDetail.song.id.toString());
  }

  function getAlbumSongsLikedList(likedSongsIdList: string[], songsInAlbum: IMusicContext[]) {
    return songsInAlbum.map((songDetail) =>
      checkSongIsLikedInPlaylists(likedSongsIdList, songDetail)
    );
  }

  return {
    getPlaylistData,
    removeSongFromPlaylist,
    addSongToPlaylist,
    checkIsSongExistsInPlaylist,
    extractSongIdsFromPlaylist,
    getDefaultPlaylistName,
    getAllPlaylistsName,
    checkSongIsLikedInPlaylists,
    getAlbumSongsLikedList,
  };
};

export default usePlaylists;
