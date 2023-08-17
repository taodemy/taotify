import { FiMusic } from "react-icons/fi";
import Button from "@/components/buttons";
import { AiFillCheckCircle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { MusicContext } from "@/contexts/MusicContext";
import { MusicList } from "types";

type BannerType = {
  musicList: MusicList;
  id: number;
};

function Banner({ musicList, id }: BannerType) {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const { isPlaying, playingQueue, setPlayingIndex, setPlayingQueue, playingIndex, setIsPlaying } =
    useContext(MusicContext);

  const handleAlbumPlay = () => {
    if ((musicList && playingQueue?.type !== musicList.type) || playingQueue?.id !== musicList.id) {
      setPlayingQueue(musicList);
      setPlayingIndex(0);
      setIsPlaying(true);
      return;
    }
    setIsPlaying(!isPlaying);
  };
  const handleSubscription = () => {
    setIsSubscribed(!isSubscribed);
  };
  return (
    <div className="relative mb-9 flex h-48 w-full flex-col justify-end text-light">
      <div className="absolute -top-28 -z-10 h-72 w-full">
        <img
          className="h-full w-full scale-105 object-cover"
          src={musicList?.songs[0]?.album?.artist?.img1v1Url}
          alt="album"
        />
        <div className="absolute top-0 h-full w-full scale-105 bg-gradient-to-b from-dark via-transparent to-dark"></div>
      </div>
      <div className="mb-4 flex flex-col gap-2">
        <p className="text-lg uppercase">artists</p>
        <div className="flex items-center text-primary">
          <span className="mr-3 text-4xl text-light">
            {musicList?.songs[0]?.album?.artist?.name}
          </span>
          <div className={`relative ${isSubscribed ? "visible" : "hidden"}`}>
            <span className="absolute left-1/3 top-1/3 -z-10 h-1/3 w-1/3 bg-light"></span>
            <AiFillCheckCircle className="inline-block" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <FiMusic className="h-5 w-5" />
            <span className="ml-4 text-sm">{musicList.songs[0].album.mark}</span>
            <p className="ml-4 text-sm">Total Subscriptions</p>
          </div>
          <div className="flex justify-end gap-6">
            {isPlaying && musicList.id === playingQueue?.id ? (
              <Button onClick={handleAlbumPlay} label="Stop" />
            ) : (
              <Button onClick={handleAlbumPlay} label="Paly" />
            )}
            {isSubscribed ? (
              <Button onClick={handleSubscription} label="Following" />
            ) : (
              <Button onClick={handleSubscription} label="Follow" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
