import ProgressBar from "@/components/ProgressBar";
import { MusicContext } from "@/contexts/MusicContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import CoverImage from "@/components/CoverImage";
import AudioControls from "@/components/AudioControls";

const MusicPlayer = () => {
  const { playingQueue, playingIndex, setPlayingIndex, isPlaying, setIsPlaying } =
    useContext(MusicContext);
  const [currentTime, setCurrentTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [loopMode, setLoopMode] = useState<"none" | "single" | "all">("none");
  const [audioUrl, setAudioUrl] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const songs = playingQueue?.songs || [];
  const song = playingQueue?.songs[playingIndex];

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
        ? setPlayingIndex(songs.length - 1)
        : setPlayingIndex((prev: number) => prev - 1);
    }
  };

  const onNextClick = () => {
    if (playingIndex !== -1) {
      playingIndex >= songs.length - 1
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
    setIsPlaying((prev) => !prev);
  };

  return (
    <section className="flex flex-row items-center py-1 px-2 md:py-2 md:px-4">
      <audio
        ref={audioRef}
        src={audioUrl}
        role="audio"
        autoPlay
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onDurationChange={handleDurationChange}
        onEnded={handlePlayEnd}
      />

      <div className="mr-2 flex w-1/6 flex-col items-center lg:w-1/4 lg:flex-row">
        <CoverImage src={song?.album.picUrl || ""} />
        <div className="hidden grow px-2 text-center text-light md:mt-1 md:block lg:ml-2">
          <p className="text-base md:mb-1 lg:mb-2.5">{song?.name || "--.--"}</p>
          <p className="text-sm">
            {song?.artists.map((artist) => artist.name).join(", ") || "--.--"}
          </p>
        </div>
      </div>

      <div className="flex w-5/6 flex-col items-center lg:w-3/4">
        <div className="mb-1 flex items-center text-light md:hidden">
          <p className="text-sm">{song?.name || "--.--"}</p>
          <p className="text-sm"> - </p>
          <p className="text-xs">
            {song?.artists.map((artist) => artist.name).join(", ") || "--.--"}
          </p>
        </div>
        <div className="w-full md:p-2.5">
          <AudioControls
            loopMode={loopMode}
            toggleLoopMode={toggleLoopMode}
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
            onPlayPauseClick={onPlayPauseClick}
          />
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
