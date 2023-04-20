import ProgressBar from "@/components/ui/ProgressBar";
import { MusicContext } from "@/contexts/MusicContext";
import Image from "next/image";
import React, { useContext } from "react";
import CoverImage from "@/components/ui/CoverImage";
import AudioControls from "@/components/AudioControls";

export default function MusicPlayer() {
  const { playingQueue, playingIndex, setPlayingIndex } = useContext(MusicContext);

  const audioUrl = playingQueue?.songs[playingIndex].mp3Url || "";

  const handleEnd = () => {
    if (playingQueue?.songs && playingIndex < playingQueue.songs.length - 1)
      setPlayingIndex((prev) => prev + 1);
  };

  return (
    <section className="fixed bottom-[72px] h-[78px] w-full md:bottom-0 md:h-[120px] md:w-[calc(100vw-64px)] lg:w-[calc(100vw-320px)]">
      <div className="relative h-full drop-shadow-xsm">
        <Image
          src="/bg_player.png"
          alt="Player background image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="absolute left-0 top-0 flex h-full w-full gap-2 bg-dark-400 bg-opacity-80 px-2 backdrop-blur-2xl md:px-4 md:py-2">
        <audio src={audioUrl} role="audio" autoPlay onEnded={handleEnd} />
        <div className="flex flex-col items-center justify-center gap-1 lg:justify-start">
          <CoverImage src="/sample_cover.png" />
          <div className="hidden items-center justify-center gap-1 px-2 text-light md:flex md:flex-col lg:hidden">
            <p className="text-base">This is love</p>
            <p className="text-sm">By Jaxson Westervelt</p>
          </div>
        </div>

        <div className="hidden items-start justify-center gap-[10px] px-2 text-light lg:flex lg:flex-col ">
          <p className="text-base">This is love</p>
          <p className="text-sm">By Jaxson Westervelt</p>
        </div>

        <div className="flex flex-grow flex-col items-center gap-1 self-stretch py-1 md:items-start md:gap-2 md:p-[10px]">
          <div className="flex items-center justify-center gap-1 px-2 text-light md:hidden">
            <p className="text-sm">This is love</p>
            <p className="text-sm"> - </p>
            <p className="text-xs">By Jaxson Westervelt</p>
          </div>
          <AudioControls />
          <ProgressBar processTime="00:00" currentTime="04:00" />
        </div>
      </div>
    </section>
  );
}
