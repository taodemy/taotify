import React, { useState, useEffect } from "react";
import { HiLockClosed } from "react-icons/hi";
import { IMusicContext } from "@/types/context";
import { useGlobalContext } from "@/contexts/GlobalContext";

interface IPlaylistProps {
  playlistName: string;
  playlistContext: IMusicContext;
}

const removePlaylistContext = (playlistContext: IMusicContext, array: IMusicContext[]) => {
  return array.filter((item) => item.song.id !== playlistContext.song.id);
};

const isPlaylistContextExists = (playlistContext: IMusicContext, array: IMusicContext[]) => {
  return array.some((item) => item.song.id === playlistContext.song.id);
};

const updateSongsToLocalStorage = (
  playlistName: string,
  parsedSongsBeforeEdited: IMusicContext[],
  songsAfterEdited: IMusicContext[]
) => {
  const likedSongsIdList = songsAfterEdited.map((item: IMusicContext) => item.song.id.toString());
  localStorage.setItem(
    "playlists",
    JSON.stringify({
      ...parsedSongsBeforeEdited,
      [playlistName]: songsAfterEdited,
    })
  );
  return likedSongsIdList;
};

const PlaylistItem: React.FC<IPlaylistProps> = ({ playlistName, playlistContext }) => {
  const { setLikedSongsIdList } = useGlobalContext();
  const [isChecked, setIsChecked] = useState(false);

  const handleUpdateLikedSongs = () => {
    const songsBeforeEdited = localStorage.getItem("playlists");
    const parsedSongsBeforeEdited = JSON.parse(songsBeforeEdited ? songsBeforeEdited : "");
    const playlistToBeEdited = parsedSongsBeforeEdited?.[playlistName] || [];
    setIsChecked(!isPlaylistContextExists(playlistContext, playlistToBeEdited));
    const updatedSongs = isPlaylistContextExists(playlistContext, playlistToBeEdited)
      ? removePlaylistContext(playlistContext, playlistToBeEdited)
      : [...playlistToBeEdited, { ...playlistContext }];

    const likedSongsIdList = updateSongsToLocalStorage(
      playlistName,
      parsedSongsBeforeEdited,
      updatedSongs
    );
    setLikedSongsIdList(likedSongsIdList);
  };

  useEffect(() => {
    const songsBeforeEdited = localStorage.getItem("playlists");
    const parsedSongsBeforeEdited = JSON.parse(songsBeforeEdited ? songsBeforeEdited : "");
    const playlistToBeEdited = parsedSongsBeforeEdited?.[playlistName] || [];
    setIsChecked(isPlaylistContextExists(playlistContext, playlistToBeEdited));
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
