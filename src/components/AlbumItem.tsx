import { MusicContext } from "@/contexts/MusicContext";
import React, { useContext } from "react";
import { MusicList } from "types";
import { ImPause, ImPlay2 } from "react-icons/im";

type AlbumItemProps = {
  musicList: MusicList;
};

export default function AlbumItem({ musicList }: AlbumItemProps) {
  const { isPlaying, playingQueue, setPlayingIndex, setPlayingQueue, setIsPlaying } =
    useContext(MusicContext);

  const handleAlbumPlay = () => {
    if (playingQueue?.type !== musicList.type || playingQueue?.id !== musicList.id) {
      setPlayingQueue(musicList);
      setPlayingIndex(0);
      setIsPlaying(true);
    } else {
      setIsPlaying((prev) => !prev);
    }
  };

  return musicList.songs.length > 0 ? (
    <div className="mt-8 text-center text-light">
      <div className="relative">
        <img
          className="peer rounded-full"
          src={musicList.songs[0].album.picUrl}
          alt={musicList.songs[0].album.name}
        />
        {isPlaying && playingQueue?.type === musicList.type && playingQueue.id === musicList.id ? (
          <ImPause
            className="absolute top-1/3 h-1/3 w-full"
            role="pauseAlbum"
            onClick={handleAlbumPlay}
          />
        ) : (
          <ImPlay2
            className="invisible absolute top-1/3 h-1/3 w-full hover:visible peer-hover:visible"
            onClick={handleAlbumPlay}
            role="playAlbum"
          />
        )}
      </div>
      <p className="mt-2 truncate text-base">{musicList.songs[0].album.name}</p>
      <p className="truncate text-sm text-light-200">
        {musicList.songs[0].artists.map((artist) => artist.name).join(", ")}
      </p>
    </div>
  ) : (
    <div role="emptyAlbum"></div>
  );
}
