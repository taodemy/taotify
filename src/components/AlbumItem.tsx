import { MusicContext } from "@/contexts/MusicContext";
import React, { useContext } from "react";
import { MusicList } from "types";
import { ImPause, ImPlay2 } from "react-icons/im";
import { useRouter } from "next/router";

type AlbumItemProps = {
  musicList: MusicList;
};

export default function AlbumItem({ musicList }: AlbumItemProps) {
  const { isPlaying, playingQueue, setPlayingIndex, setPlayingQueue, setIsPlaying } =
    useContext(MusicContext);
  const router = useRouter();
  const handleAlbumPlay = () => {
    if (playingQueue?.type !== musicList.type || playingQueue?.id !== musicList.id) {
      setPlayingQueue(musicList);
      setPlayingIndex(0);
      setIsPlaying(true);
    } else {
      setIsPlaying((prev) => !prev);
    }
  };
  const handleClick = (id: number) => {
    console.log(id, "click");
    router.push(`/album/${id}`);
  };

  return musicList.songs.length > 0 ? (
    <div className="relative cursor-pointer text-center text-light">
      <div
        onClick={() => {
          handleClick(musicList?.id);
        }}
        className="relative"
      >
        <img
          className="rounded-full"
          src={musicList.songs[0]?.album?.picUrl}
          alt={musicList.songs[0]?.album?.name}
        />
        <p className="truncate text-base">{musicList.songs[0]?.album?.name}</p>
        <p className="truncate text-sm text-light-200">
          {musicList.songs[0]?.artists?.map((artist) => artist.name)}
        </p>
      </div>
      <div className="group absolute top-1/4 left-1/3 flex h-1/3 w-1/3 items-center justify-center">
        {isPlaying && playingQueue?.type === musicList.type && playingQueue.id === musicList.id ? (
          <ImPause className="h-full w-1/3" role="pauseAlbum" onClick={handleAlbumPlay} />
        ) : (
          <ImPlay2
            className="invisible h-full w-full group-hover:visible"
            onClick={handleAlbumPlay}
            role="playAlbum"
          />
        )}
      </div>
    </div>
  ) : (
    <div></div>
  );
}
