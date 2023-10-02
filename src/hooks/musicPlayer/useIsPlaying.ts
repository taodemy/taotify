import { AudioContext } from "@/contexts/AudioContext";
import { MusicContext } from "@/contexts/MusicContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import { useContext, useEffect, useRef } from "react";

const useIsPlayingTriggerPlayPause = () => {
  const { isPlaying } = useContext(MusicContext);
  const { audioSource, audioContext } = useContext(WebAudioContext);
  const { setCurrentAudioTime, audioStartTime, currentAudioTime } = useContext(AudioContext);
  const animationFrameRef = useRef<number | null>(null);

  const updateProgressBar = () => {
    const currentTime = audioContext!.currentTime - audioStartTime;
    setCurrentAudioTime(currentTime);
    animationFrameRef.current = requestAnimationFrame(updateProgressBar);
  };

  useEffect(() => {
    if (audioContext && audioSource && audioContext.state === "suspended" && isPlaying) {
      console.log("start playing");
      cancelAnimationFrame(animationFrameRef.current!);
      updateProgressBar();
      audioContext.resume();
      return;
    }
    if (audioContext && audioSource && audioContext.state === "running" && !isPlaying) {
      cancelAnimationFrame(animationFrameRef.current!);
      audioContext.suspend();
      return;
    }
  }, [isPlaying, audioSource]);

  useEffect(() => {
    console.log("change isPlaying state");
  }, [isPlaying]);
};

export { useIsPlayingTriggerPlayPause };
