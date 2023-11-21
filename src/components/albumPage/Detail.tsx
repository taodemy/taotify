import React, { useContext, useEffect } from "react";
import IconButton from "../buttons/IconButton";
import { IoTimeOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";
import { ImPause, ImPlay2 } from "react-icons/im";
import { MusicContext } from "@/contexts/MusicContext";
import { MusicList } from "@/types/context";
import formatTime from "@/utils/formatTime";

type AlbumDetailType = {
  musicList: MusicList;
};
const AlbumDetail = ({ musicList }: AlbumDetailType) => {
  const {
    isPlaying,
    playingQueue,
    setPlayingIndex,
    setPlayingQueue,
    playingIndex,
    setIsPlaying,
    setImgUrl,
  } = useContext(MusicContext);
  const { musicContext } = musicList;
  const handleSongPlay = (index: number) => {
    if (playingQueue?.type !== musicList.type || playingQueue?.id !== musicList.id) {
      setImgUrl(musicList.musicContext[0].album.image);
      setIsPlaying(false);
      setPlayingQueue(musicList);
      setPlayingIndex(0);
    } else {
      setPlayingIndex(index);
      setIsPlaying((prev) => !prev);
    }
  };

  return (
    <>
      <div className="mb-6 mt-8 flex items-center gap-4">
        <span className="text-3xl">{musicContext[0].album.name}</span>
        <span className="text-sm text-light-200">{musicContext.length} songs</span>
      </div>
      <table className="w-full text-left text-sm">
        <tbody>
          {Array.isArray(musicContext) &&
            musicContext.map((context, index) => {
              const time = context.song.time ? Math.floor(context.song.time / 1000) : 0;
              const duration = formatTime(time);
              return (
                <tr className="border-t border-dark-100" key={context.song.id}>
                  <td>
                    <div className="m-2 ml-0 flex items-center">
                      <div className="mr-8 hidden sm:inline-block">{index + 1}</div>
                      <div className="relative h-14 w-14 cursor-pointer">
                        <img
                          className="rounded-full object-cover"
                          alt="singer avatar"
                          src={context.album?.image}
                        />
                        <div
                          className="group absolute top-0 flex h-full w-full items-center justify-center"
                          onClick={() => {
                            handleSongPlay(index);
                          }}
                        >
                          {isPlaying &&
                          playingIndex === index &&
                          musicList.id === playingQueue?.id ? (
                            <ImPause className="h-full w-6" role="pauseAlbum" />
                          ) : (
                            <ImPlay2
                              className="invisible h-full w-6 group-hover:visible"
                              role="playAlbum"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4">
                    <div>{context.song.name}</div>
                    <div className="lg:hidden">{context.artist?.name}</div>
                  </td>
                  <td className="hidden lg:table-cell">{context.artist?.name}</td>
                  <td>
                    <div className="hidden items-center sm:flex">
                      <FiHeadphones className=" inline-block h-5 w-5" />
                      <span className="ml-2">{context.song.time}</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center">
                      <IoTimeOutline className="inline-block h-5 w-5" />
                      <span className="ml-2">{duration}</span>
                    </div>
                  </td>
                  <td className="hidden sm:table-cell">
                    <IconButton iconTypes="like" />
                  </td>
                  <td>
                    <IconButton iconTypes="dot" />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default AlbumDetail;
