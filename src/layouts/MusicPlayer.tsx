import PlayControls from "@/components/PlayControls";
import ProgressBar from "@/components/ProgressBar";
import { MusicContext } from "@/contexts/MusicContext";
import React, { useContext, useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const { playingQueue, playingIndex, setPlayingIndex } = useContext(MusicContext);
  const [currentTime, setCurrentTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [loopMode, setLoopMode] = useState<"none" | "single" | "all">("none");
  const [audioUrl, setAudioUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

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

  return (
    <div className="flex fixed bottom-0 h-[120px] w-[calc(100vw-320px)] border px-4">
      <PlayControls loopMode={loopMode} toggleLoopMode={toggleLoopMode} />
      <ProgressBar
        currentTime={currentTime}
        endTime={endTime}
        handleProgressChange={handleProgressChange}
      />
      <audio
        ref={audioRef}
        src={audioUrl}
        role="audio"
        controls
        autoPlay
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onDurationChange={handleDurationChange}
        onEnded={handlePlayEnd}
      ></audio>
    </div>
  );
}
