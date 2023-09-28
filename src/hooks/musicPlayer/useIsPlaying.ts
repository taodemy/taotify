import { MusicContext } from "@/contexts/MusicContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import { useContext, useEffect } from "react";

const useIsPlaying = () => {
  const { isPlaying } = useContext(MusicContext);
  const { audioSource, audioContext } = useContext(WebAudioContext);

  useEffect(() => {
    console.log(audioContext?.currentTime);
    if (audioContext && audioSource && audioContext.state === "suspended" && isPlaying) {
      audioContext.resume();
      return;
    }
    if (audioContext && audioSource && audioContext.state === "running" && !isPlaying) {
      audioContext.suspend();
      return;
    }
  }, [isPlaying]);
};

export default useIsPlaying;
