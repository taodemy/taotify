import React, { useState, useEffect } from "react";
import { HiLockClosed } from "react-icons/hi";
import { IMusicContext } from "@/types/context";
import { useGlobalContext } from "@/contexts/GlobalContext";
import useLocalStorage from "@/hooks/useLocalStorage";
import usePlaylists from "@/hooks/usePlaylists";

interface IPlaylistProps {
  playlistName: string;
  playlistContext: IMusicContext;
}

const PlaylistItem: React.FC<IPlaylistProps> = ({ playlistName, playlistContext }) => {
  const { setLikedSongsIdList } = useGlobalContext();
  const { setDataToLocalStorage } = useLocalStorage();
  const {
    getPlaylistData,
    removeSongFromPlaylist,
    addSongToPlaylist,
    checkIsSongExistsInPlaylist,
    extractSongIdsFromPlaylist,
  } = usePlaylists();
  const [isChecked, setIsChecked] = useState(false);

  const handleUpdateLikedSongs = () => {
    const playlistToBeEdited = getPlaylistData(playlistName);
    const isSongExistsInPlaylist = checkIsSongExistsInPlaylist(playlistContext, playlistToBeEdited);
    setIsChecked(!isSongExistsInPlaylist);
    const updatedSongs = isSongExistsInPlaylist
      ? removeSongFromPlaylist(playlistContext, playlistToBeEdited)
      : addSongToPlaylist(playlistContext, playlistToBeEdited);
    setDataToLocalStorage("playlists", {
      [playlistName]: updatedSongs,
    });
    const likedSongsIdList = extractSongIdsFromPlaylist(updatedSongs);
    setLikedSongsIdList(likedSongsIdList);
  };

  useEffect(() => {
    const playlistToBeEdited = getPlaylistData(playlistName);
    const isSongExistsInPlaylist = checkIsSongExistsInPlaylist(playlistContext, playlistToBeEdited);
    setIsChecked(isSongExistsInPlaylist);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 pt-10 pb-10">
      <div className="flex w-full items-center">
        <div className="flex items-center gap-4">
          <input
            checked={isChecked}
            type="checkbox"
            className="h-5 w-5"
            onChange={() => {
              handleUpdateLikedSongs();
            }}
          />
          <p className="font-roboto text-base font-semibold">{playlistName}</p>
        </div>
        <HiLockClosed className="ml-auto h-5 w-5" />
      </div>
    </div>
  );
};

export default PlaylistItem;
