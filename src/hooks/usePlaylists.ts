import { IMusicContext } from "@/types/context";
import { LOCAL_STORAGE_KEY_NAME, DEFAULT_PLAYLIST_NAME } from "@/constant/playlists";
import { useLocalStorage } from "usehooks-ts";

export interface IPlaylists {
  [playlistName: string]: IMusicContext[];
}

const usePlaylists = () => {
  const [playlistsData, setPlaylistsData] = useLocalStorage<IPlaylists>(LOCAL_STORAGE_KEY_NAME, {});

  const getPlaylistData = (playlistName: string) => {
    const parsedPlaylists = playlistsData;
    return parsedPlaylists ? playlistsData[playlistName] : [];
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
    const parsedPlaylists = playlistsData;
    return parsedPlaylists ? Object.keys(parsedPlaylists)[0] : "";
  };

  const createEmptyDefaultPlaylistIfNotExisted = () => {
    const defaultPlaylistName = getDefaultPlaylistName();
    if (!defaultPlaylistName) {
      const defaultPlaylists = {
        [DEFAULT_PLAYLIST_NAME]: [],
      };
      setPlaylistsData(defaultPlaylists);
    }
  };

  const getAllPlaylistsName = () => {
    const parsedPlaylists = playlistsData;
    return parsedPlaylists ? Object.keys(parsedPlaylists) : [""];
  };

  const checkIsSongExistsInPlaylist = (playlistContext: IMusicContext, array: IMusicContext[]) => {
    return array.some((item) => item.song.id === playlistContext.song.id);
  };

  const extractSongIdsFromPlaylist = (playlistData: IMusicContext[]) => {
    return playlistData ? playlistData.map((item: IMusicContext) => item.song.id.toString()) : [];
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
    playlistsData,
    setPlaylistsData,
  };
};

export default usePlaylists;
