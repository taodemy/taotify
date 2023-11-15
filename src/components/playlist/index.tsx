import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { HiLockClosed } from "react-icons/hi";
import { IMusicContext } from "@/types/context";
import { useGlobalContext } from "@/contexts/GlobalContext";

const removePlaylistContext = (playlistContext: IMusicContext, array: IMusicContext[]) => {
  return array.filter((item) => item.song.id !== playlistContext.song.id);
};

const isPlaylistContextExists = (playlistContext: IMusicContext, array: IMusicContext[]) => {
  return array.some((item) => item.song.id === playlistContext.song.id);
};

interface PlayListManagementProps {
  isSongArchived: boolean;
  setIsSongArchived: (isSongArchived: boolean) => void;
  playlistContext: IMusicContext;
}

const PlayListManagement: React.FC<PlayListManagementProps> = ({
  isSongArchived,
  setIsSongArchived,
  playlistContext,
}) => {
  const [isTriggeredCreate, setIsTriggerCreate] = useState(false);
  const { setLikedSongsIdList } = useGlobalContext();
  return (
    <div className="relative">
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2">
        <div className="max-w-[235px] rounded-3xl bg-white px-[35px] text-dark">
          <div className="flex items-center pt-12">
            <p className="font-roboto text-xl font-black">Save music to...</p>
            <RxCross1
              className="ml-auto h-5 w-5 text-dark"
              onClick={() => setIsSongArchived(!isSongArchived)}
            />
          </div>
          <div className="flex flex-col items-center gap-6 pt-10 pb-10">
            <div className="flex w-full items-center">
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  onClick={() => {
                    const songsBeforeAdded = localStorage.getItem("playlists");
                    if (songsBeforeAdded) {
                      const parsedSongsBeforeAdded = JSON.parse(songsBeforeAdded);
                      const parsedSongsAfterAdded = parsedSongsBeforeAdded?.Favourites || [];

                      if (!isPlaylistContextExists(playlistContext, parsedSongsAfterAdded)) {
                        const songsAfterAdded = [...parsedSongsAfterAdded, { ...playlistContext }];
                        const likedSongsIdList = songsAfterAdded.flatMap((item: IMusicContext) =>
                          item.song.id.toString()
                        );
                        console.log(likedSongsIdList);
                        setLikedSongsIdList(likedSongsIdList);
                        localStorage.setItem(
                          "playlists",
                          JSON.stringify({ Favourites: songsAfterAdded })
                        );
                      } else {
                        const songsAfterRemoved = removePlaylistContext(
                          playlistContext,
                          parsedSongsAfterAdded
                        );
                        const likedSongsIdList = songsAfterRemoved.flatMap((item: IMusicContext) =>
                          item.song.id.toString()
                        );
                        console.log(likedSongsIdList);
                        setLikedSongsIdList(likedSongsIdList);
                        localStorage.setItem(
                          "playlists",
                          JSON.stringify({ Favourites: songsAfterRemoved })
                        );
                      }
                    }
                  }}
                />

                <p className="font-roboto text-base font-semibold">Favourites</p>
              </div>
              <HiLockClosed className="ml-auto h-5 w-5" />
            </div>
          </div>
          {isTriggeredCreate ? (
            <div className="flex flex-col">
              <p>Name</p>
              <input type="text" className="border-b border-dark" />
              <p className="ml-auto text-sm font-medium">0/150</p>
              <button className="ml-auto pt-[35px] pb-[25px] text-primary">Create</button>
            </div>
          ) : (
            <div
              className="flex items-center pb-[35px]"
              onClick={() => {
                setIsTriggerCreate(true);
              }}
            >
              <FiPlus className="h-4 w-4 text-dark" />
              <p className="ml-auto font-roboto text-base">
                Create a new <span className="text-primary">playlist</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayListManagement;
