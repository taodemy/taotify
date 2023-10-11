import { AudioContext } from "@/contexts/AudioContext";
import { MusicContext } from "@/contexts/MusicContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import { useContext, useEffect, useRef, useState } from "react";

const useIsPlayingTriggerPlayPause = () => {
  const { isPlaying } = useContext(MusicContext);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const { audioSource, audioContext } = useContext(WebAudioContext);
  const { audioStartTime } = useContext(AudioContext);
  const animationFrameRef = useRef<number | null>(null);

  const updateProgressBar = () => {
    const newCurrentTime = audioContext!.currentTime - audioStartTime;
    setCurrentTime(newCurrentTime);
    animationFrameRef.current = requestAnimationFrame(updateProgressBar);
  };

  useEffect(() => {
    if (audioContext && audioSource && audioContext.state === "suspended" && isPlaying) {
      updateProgressBar();
      audioContext.resume();
      return;
    }
    if (audioContext && audioSource && audioContext.state === "running" && !isPlaying) {
      cancelAnimationFrame(animationFrameRef.current!);
      audioContext.suspend();
      return;
    }
  }, [isPlaying]);
};

export { useIsPlayingTriggerPlayPause };
