import PlayControls from "@/components/PlayControls";
import ProgressBar from "@/components/ProgressBar";
import { MusicContext } from "@/contexts/MusicContext";
import React, { useContext, useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const { playingQueue, playingIndex, setPlayingIndex } = useContext(MusicContext);
  const [currentTime, setCurrentTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [loopMode, setLoopMode] = useState("none");
  const [audioUrl, setAudioUrl] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayEnd = () => {
    if (!playingQueue) return;

    if (loopMode === "single") {
      audioRef.current?.load();
      return;
    }

    if (playingIndex < playingQueue.songs.length - 1) {
      setPlayingIndex((prev) => prev + 1);
    } else {
      if (loopMode === "all") setPlayingIndex(0);
    }
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
    if (!audioUrl) return;

    const intervalId = setInterval(() => {
      setCurrentTime(Math.ceil(audioRef.current?.currentTime || 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [audioUrl]);

  return (
    <div className="flex w-[100vw] h-[100px] bg-secondary-100 fixed bottom-0 left-0 border-2">
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
        onDurationChange={handleDurationChange}
        onEnded={handlePlayEnd}
      ></audio>
    </div>
  );
}
