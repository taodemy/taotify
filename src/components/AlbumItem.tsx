import { MusicContext } from "@/contexts/MusicContext";
import React, { useContext, useEffect } from "react";
import { MusicList } from "@/types/context";
import { ImPause, ImPlay2 } from "react-icons/im";
import Link from "next/link";
import { SearchedAlbumInContext } from "@/types/SearchTypes";

type AlbumItemProps = {
  musicList: MusicList;
  isCanAlbumPlayed?: boolean;
};

export default function AlbumItem({ musicList, isCanAlbumPlayed = true }: AlbumItemProps) {
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
  const handleAlbumEnter = () => {
    setSelectedAlbum(musicList);
  };

  const searchedArtistName = (musicList.musicContext[0].album as SearchedAlbumInContext).artistName;
  return (
    <div className="relative cursor-pointer text-center text-light">
      {musicList && (
        <>
          <Link href={`/album/${musicList?.id}`} className="relative" onClick={handleAlbumEnter}>
            <figure>
              <img
                className="rounded-full"
                src={musicList.musicContext[0].album.image}
                alt={musicList.musicContext[0]?.album?.name}
              />
              <figcaption className="mt-1 truncate text-base">
                {musicList.musicContext[0]?.album?.name}
              </figcaption>
              <p className="truncate text-sm text-light-200">
                {isCanAlbumPlayed ? musicList.musicContext[0]?.artist.name : searchedArtistName}
              </p>
            </figure>
          </Link>
          {isCanAlbumPlayed ? (
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
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}
