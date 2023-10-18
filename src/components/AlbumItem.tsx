import { MusicContext } from "@/contexts/MusicContext";
import React, { useContext, useEffect } from "react";
import { MusicList } from "@/types/context";
import { ImPause, ImPlay2 } from "react-icons/im";
import Link from "next/link";

type AlbumItemProps = {
  musicList: MusicList;
};

export default function AlbumItem({ musicList }: AlbumItemProps) {
  const {
    isPlaying,
    playingQueue,
    setPlayingIndex,
    setPlayingQueue,
    setIsPlaying,
    setImgUrl,
    setSelectedAlbum,
  } = useContext(MusicContext);
  const handleAlbumPlay = () => {
    if (playingQueue?.type !== musicList.type || playingQueue?.id !== musicList.id) {
      setImgUrl(musicList.musicContext[0].album.image);
      setIsPlaying(false);
      setPlayingQueue(musicList);
      setPlayingIndex(0);
      setSelectedAlbum(musicList);
    } else {
      setIsPlaying((prev) => !prev);
    }
  };
  const handleAlbumClick = () => {
    setSelectedAlbum(musicList);
  };

  return (
    <div className="relative cursor-pointer text-center text-light">
      {musicList && (
        <>
          <Link href={`/album/${musicList?.id}`} className="relative" onClick={handleAlbumClick}>
            <figure>
              <img
                className="rounded-full"
                src={musicList.musicContext[0].album.image}
                alt={musicList.musicContext[0]?.album?.name}
              />
              <figcaption className="truncate text-base">
                {musicList.musicContext[0]?.album?.name}
              </figcaption>
              <p className="truncate text-sm text-light-200">
                {musicList.musicContext[0]?.artist.name}
              </p>
            </figure>
          </Link>
          <div className="group absolute left-1/3 top-1/4 flex h-1/3 w-1/3 items-center justify-center">
            {isPlaying &&
            playingQueue?.type === musicList.type &&
            playingQueue.id === musicList.id ? (
              <button className="h-full w-full" role="pauseAlbum" onClick={handleAlbumPlay}>
                <ImPause className="h-full w-full" />
              </button>
            ) : (
              <button
                className="invisible h-full w-full group-hover:visible"
                onClick={handleAlbumPlay}
                role="playAlbum"
              >
                <ImPlay2 className="h-full w-full" />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
