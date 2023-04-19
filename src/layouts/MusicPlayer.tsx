import { MusicInfo } from "@/components/MusicInfo";
import ProgressBar from "@/components/ui/ProgressBar";
import { MusicContext } from "@/contexts/MusicContext";
import Image from "next/image";
import React, { useContext, useRef } from "react";
import CoverImage from "@/components/ui/CoverImage";
import AudioControls from "@/components/AudioControls";

export default function MusicPlayer() {
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const { playingQueue, playingIndex, setPlayingIndex } = useContext(MusicContext);

  const audioUrl = playingQueue?.songs[playingIndex].mp3Url || "";

  const handleEnd = () => {
    if (playingQueue?.songs && playingIndex < playingQueue.songs.length - 1)
      setPlayingIndex((prev) => prev + 1);
  };

  return (
    <section className="fixed bottom-0 h-[120px] w-[calc(100vw-320px)]">
      <div className="relative h-full drop-shadow-xsm">
        <Image
          src="/bg_player.png"
          alt="Player background image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="absolute left-0 top-0 flex h-full w-full gap-2 bg-dark-400 bg-opacity-80 px-4 py-2 backdrop-blur-2xl">
        <CoverImage src="/sample_cover.png" />

        <MusicInfo title="This is love" singer="By Jaxson Westervelt" />

        <div className="flex flex-grow flex-col items-start gap-2 self-stretch p-[10px]">
          <AudioControls />
          <ProgressBar processTime="00:00" currentTime="04:00" />
        </div>
      </div>
    </section>
  );
}
