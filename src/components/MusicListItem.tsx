import { MusicContext } from "../contexts/MusicContext";
import React, { useContext } from "react";
import { BiPlayCircle, BiPauseCircle } from "react-icons/bi";
import { MusicListProps } from "./MusicList";

export default function MusicListItem({ musicList }: MusicListProps) {
  const { playingQueue, setPlayingQueue, playingIndex, setPlayingIndex, isPlaying, setIsPlaying } =
    useContext(MusicContext);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleMusicPlay = () => {
    setPlayingQueue(musicList);
    setPlayingIndex(0);
  };

  console.log(isPlaying);

  const iconClass =
    "absolute top-0 bottom-0 left-0 right-0 m-auto h-8 w-8 text-white group-hover:block";

  const showIcon = isPlaying ? "block" : "hidden";

  return (
    <div className="flex cursor-pointer flex-col items-center justify-center">
      <div
        className="group relative h-24 w-24 hover:grayscale-[50%]  hover:duration-300 hover:ease-in-out"
        onClick={handleMusicPlay}
        data-testid="playlist-image"
      >
        {/* image src need to be change after fetch the album image and name */}
        <img
          className="rounded-full"
          src={musicList.songs[0].album.picUrl}
          alt={musicList.songs[0].name}
          role="img"
        />
        {/* conditions should to be fixed */}
        {isPlaying && musicList.songs[playingIndex].id === playingQueue?.songs[playingIndex].id ? (
          <BiPauseCircle
            className={`${iconClass} ${showIcon}`}
            onClick={togglePlayPause}
            role="albumPauseIcon"
          />
        ) : (
          <BiPlayCircle
            className={`${iconClass} ${showIcon}`}
            onClick={togglePlayPause}
            role="albumPlayIcon"
          />
        )}
      </div>
      <p className="mt-1 text-base text-white" role="button">
        {musicList.songs[0].name}
      </p>
      {musicList.songs[0].artists.map((artist, index) => (
        <p className="text-sm text-light-200" key={index}>
          {artist.name}
        </p>
      ))}
    </div>
  );
}
