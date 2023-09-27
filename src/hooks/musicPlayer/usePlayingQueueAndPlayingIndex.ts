import { useContext, useEffect } from "react";
import { AudioContext } from "@/contexts/AudioContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import { MusicContext } from "@/contexts/MusicContext";

const usePlayingQueueAndPlayingIndexToloadAudioDuration = () => {
  const { setAudioDuration } = useContext(AudioContext);
  const { audioSource } = useContext(WebAudioContext);
  const { playingIndex, playingQueue } = useContext(MusicContext);
  useEffect(() => {
    if (audioSource && audioSource.buffer?.duration) {
      setAudioDuration(Math.floor(audioSource.buffer.duration));
    }
  }, [playingIndex, playingQueue]);
};
export { usePlayingQueueAndPlayingIndexToloadAudioDuration };
