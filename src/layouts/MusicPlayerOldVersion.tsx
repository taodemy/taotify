import ProgressBar from "@/components/player/ProgressBar";
import { MusicContext } from "@/contexts/MusicContext";
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import CoverImage from "@/components/CoverImage";
import AudioControls from "@/components/player/AudioControls";
import useAudioSource from "@/hooks/musicPlayer/useAudioSource";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import usePlayingQueueAndPlayingIndex from "@/hooks/usePlayingQueueAndPlayingIndex";

const MusicPlayer = () => {
  const { playingQueue, playingIndex, setPlayingIndex, isPlaying, setIsPlaying } =
    useContext(MusicContext);
  const { audioContext, audioSource } = useContext(WebAudioContext);
  const [currentTime, setCurrentTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [loopMode, setLoopMode] = useState<"none" | "single" | "all">("none");
  const [audioUrl, setAudioUrl] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const musicData = playingQueue?.songs || "";
  useAudioSource();
  usePlayingQueueAndPlayingIndex();

  const handlePlayEnd = () => {
    if (!playingQueue) return;

    if (loopMode === "single") {
      audioRef.current?.load();
      return;
    }

    if (playingIndex === playingQueue.songs.length - 1 && loopMode === "all") setPlayingIndex(0);
    if (playingIndex === playingQueue.songs.length - 1 && loopMode === "none") setIsPlaying(false);
    if (playingIndex < playingQueue.songs.length - 1) setPlayingIndex((prev) => prev + 1);
  };

  const handleDurationChange = () => {
    setCurrentTime(0);
    setEndTime(Math.floor(audioRef.current?.duration || 0));
  };

  const handleProgressChange = (time: number) => {
    if (!audioRef.current) return;
    setCurrentTime(time);
    audioRef.current.currentTime = time;
  };

  const toggleLoopMode = () => {
    if (loopMode === "none") setLoopMode("single");
    if (loopMode === "single") setLoopMode("all");
    if (loopMode === "all") setLoopMode("none");
  };

  const onPrevClick = () => {
    if (playingIndex !== -1) {
      playingIndex === 0
        ? setPlayingIndex(musicData.length - 1)
        : setPlayingIndex((prev: number) => prev - 1);
    }
  };

  const onNextClick = () => {
    if (playingIndex !== -1) {
      playingIndex >= musicData.length - 1
        ? setPlayingIndex(0)
        : setPlayingIndex((prev: number) => prev + 1);
    }
  };

  useEffect(() => {
    const newAudioUrl = playingQueue?.songs[playingIndex].mp3Url || "";
    setAudioUrl(newAudioUrl);
  }, [playingQueue, playingIndex]);

  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      setCurrentTime(Math.ceil(audioRef.current?.currentTime || 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying, audioUrl]);

  useEffect(() => {
    if (playingIndex !== -1) {
      isPlaying ? audioRef.current?.play() : audioRef.current?.pause();
    }
  }, [isPlaying, audioRef]);

  const onPlayPauseClick = () => {
    if (audioContext && audioSource && audioContext.state === "suspended") {
      audioContext.resume();
      setIsPlaying(true);
      return;
    }
    if (audioContext && audioSource && audioContext.state === "running") {
      audioContext.suspend();
      setIsPlaying(false);
      return;
    }
  };

  return (
    <section className="fixed bottom-[72px] h-[78px] w-full transition-all duration-200 ease-in-out md:bottom-0 md:h-[120px] md:w-[calc(100vw-64px)] lg:w-[calc(100vw-320px)]">
      <div className="relative h-full drop-shadow-bgImgShadow">
        <Image src="/bg_player.png" alt="Player background image" fill />
      </div>

      <div className="absolute left-0 top-0 flex h-full w-full gap-2 bg-dark-400 bg-opacity-80 px-2 backdrop-blur-2xl md:gap-4 md:px-4 md:py-2">
        {/* <audio
          ref={audioRef}
          src={audioUrl}
          role="audio"
          autoPlay
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onDurationChange={handleDurationChange}
          onEnded={handlePlayEnd}
        /> */}
        <div className="flex flex-col items-center justify-center gap-1 lg:justify-start">
          <CoverImage src="/sample_cover.png" />
          <div className="hidden items-center justify-center gap-1 px-2 text-light md:flex md:flex-col lg:hidden">
            <p className="text-base">This is love</p>
            <p className="text-sm">Jaxson Westervelt</p>
          </div>
        </div>

        <div className="hidden items-start justify-center gap-[10px] px-2 text-light lg:flex lg:flex-col ">
          <p className="text-base">This is love</p>
          <p className="text-sm">By Jaxson Westervelt</p>
        </div>

        <div className="flex flex-grow flex-col items-center gap-1 py-1 md:justify-center md:gap-2 md:p-[10px]">
          <div className="flex items-center justify-center gap-1 px-2 text-light md:hidden">
            <p className="text-sm">This is love</p>
            <p className="text-sm"> - </p>
            <p className="text-xs">Jaxson Westervelt</p>
          </div>
          <AudioControls audioRef={audioRef} loopMode={loopMode} setLoopMode={setLoopMode} />
          {/* <AudioControls
            loopMode={loopMode}
            toggleLoopMode={toggleLoopMode}
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
            onPlayPauseClick={onPlayPauseClick}
          /> */}
          <ProgressBar
            currentTime={currentTime}
            endTime={endTime}
            handleProgressChange={handleProgressChange}
          />
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
