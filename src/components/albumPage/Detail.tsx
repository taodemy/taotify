import React, { useContext } from "react";
import IconButton from "../buttons/IconButton";
import { IoTimeOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";
import { ImPause, ImPlay2 } from "react-icons/im";
import { MusicContext } from "@/contexts/MusicContext";
import { MusicList } from "types";
import formatTime from "@/utils/formatTime";

type AlbumDetailType = {
  musicList: MusicList;
};
const AlbumDetail = ({ musicList }: AlbumDetailType) => {
  const { isPlaying, playingQueue, setPlayingIndex, setPlayingQueue, playingIndex, setIsPlaying } =
    useContext(MusicContext);

  const handleSongPlay = (index: number) => {
    if ((musicList && index !== playingIndex) || playingQueue?.id !== musicList.id) {
      setPlayingQueue(musicList);
      setPlayingIndex(index);
      setIsPlaying(true);
      return;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className="mb-6 mt-8 flex items-center gap-4">
        <span className="text-3xl">{musicList.songs[0].album.name}</span>
        <span className="text-sm text-light-200">{musicList.songs.length} songs</span>
      </div>
      <table className="w-full text-left text-sm">
        <tbody>
          {Array.isArray(musicList?.songs) &&
            musicList?.songs.map((music, index) => {
              const time = music.time ? Math.floor(music.time / 1000) : 0;
              const duration = formatTime(time);
              return (
                <tr className="border-t border-dark-100" key={music.id}>
                  <td>
                    <div className="m-2 ml-0 flex items-center">
                      <div className="mr-8 hidden sm:inline-block">{index + 1}</div>
                      <div className="relative h-14 w-14 cursor-pointer">
                        <img
                          className="rounded-full object-cover"
                          alt="singer avatar"
                          src={music.album?.blurPicUrl}
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
                    <div>{music.name}</div>
                    <div className="lg:hidden">{music.album?.artist?.name}</div>
                  </td>
                  <td className="hidden lg:table-cell">{music.album?.artist?.name}</td>
                  <td>
                    <div className="hidden items-center sm:flex">
                      <FiHeadphones className=" inline-block h-5 w-5" />
                      <span className="ml-2">{music.time}</span>
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
