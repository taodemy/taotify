import { AudioContext } from "@/contexts/AudioContext";
import { MusicContext } from "@/contexts/MusicContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import { useContext, useEffect, useRef } from "react";

const useIsPlayingTriggerPlayPause = () => {
  const { isPlaying } = useContext(MusicContext);
  const { audioSource, audioContext } = useContext(WebAudioContext);
  const { currentAudioTime, setCurrentAudioTime, audioStartTime } = useContext(AudioContext);
  const animationFrameRef = useRef<number | null>(null);

  const updateProgressBar = () => {
    const currentTime = currentAudioTime;
    console.log(audioStartTime);
    console.log(currentAudioTime);
    const newCurrentAduioTime = currentTime + audioContext!.currentTime - audioStartTime;
    setCurrentAudioTime(newCurrentAduioTime);
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
