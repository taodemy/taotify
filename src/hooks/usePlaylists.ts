import useLocalStorage from "./useLocalStorage";
import { IMusicContext } from "@/types/context";
import { LOCAL_STORAGE_KEY_NAME, DEFAULT_PLAYLIST_NAME } from "@/constant/playlists";

const usePlaylists = () => {
  const { getDataFromLocalStorage, setDataToLocalStorage } = useLocalStorage();

  const getPlaylistData = (playlistName: string) => {
    const parsedPlaylists = getDataFromLocalStorage(LOCAL_STORAGE_KEY_NAME);
    return parsedPlaylists ? parsedPlaylists[playlistName] : [];
  };

  const removeSongFromPlaylist = (playlistContext: IMusicContext, array: IMusicContext[]) => {
    return array.filter((item) => item.song.id !== playlistContext.song.id);
  };

  const addSongToPlaylist = (
    playlistContext: IMusicContext,
    playlistToBeEdited: IMusicContext[]
  ) => {
    return [...playlistToBeEdited, { ...playlistContext }];
  };

  const getDefaultPlaylistName = () => {
    const parsedPlaylists = getDataFromLocalStorage(LOCAL_STORAGE_KEY_NAME);
    return parsedPlaylists ? Object.keys(parsedPlaylists)[0] : "";
  };

  const createEmptyDefaultPlaylistIfNotExisted = () => {
    const defaultPlaylistName = getDefaultPlaylistName();
    if (!defaultPlaylistName) {
      const defaultPlaylists = {
        [DEFAULT_PLAYLIST_NAME]: [],
      };
      setDataToLocalStorage(LOCAL_STORAGE_KEY_NAME, defaultPlaylists);
    }
  };

  const getAllPlaylistsName = () => {
    const parsedPlaylists = getDataFromLocalStorage(LOCAL_STORAGE_KEY_NAME);
    return parsedPlaylists ? Object.keys(parsedPlaylists) : [""];
  };

  const checkIsSongExistsInPlaylist = (playlistContext: IMusicContext, array: IMusicContext[]) => {
    return array.some((item) => item.song.id === playlistContext.song.id);
  };

  const extractSongIdsFromPlaylist = (playlistData: IMusicContext[]) => {
    return playlistData.map((item: IMusicContext) => item.song.id.toString());
  };

  const checkSongIsLikedInPlaylists = (likedSongsIdList: string[], songDetail: IMusicContext) => {
    return likedSongsIdList.includes(songDetail.song.id.toString());
  };

  const getAlbumSongsLikedList = (likedSongsIdList: string[], songsInAlbum: IMusicContext[]) => {
    return songsInAlbum.map((songDetail) =>
      checkSongIsLikedInPlaylists(likedSongsIdList, songDetail)
    );
  };

  return {
    getPlaylistData,
    removeSongFromPlaylist,
    addSongToPlaylist,
    checkIsSongExistsInPlaylist,
    extractSongIdsFromPlaylist,
    getDefaultPlaylistName,
    createEmptyDefaultPlaylistIfNotExisted,
    getAllPlaylistsName,
    checkSongIsLikedInPlaylists,
    getAlbumSongsLikedList,
  };
};

export default usePlaylists;
