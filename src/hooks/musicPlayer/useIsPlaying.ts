import { MusicContext } from "@/contexts/MusicContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import { useContext, useEffect } from "react";

const useIsPlaying = () => {
  const { isPlaying, imgUrl } = useContext(MusicContext);
  const { audioSource, analyserNode, setAudioSource, audioContext } = useContext(WebAudioContext);

  useEffect(() => {
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
