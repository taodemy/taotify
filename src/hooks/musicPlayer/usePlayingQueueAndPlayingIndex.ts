import { useContext, useEffect } from "react";
import { AudioContext } from "@/contexts/AudioContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";

const usePlayingQueueAndPlayingIndexToloadAudioDuration = () => {
  const { setAudioDuration, setAudioStartTime } = useContext(AudioContext);
  const { audioSource, audioContext } = useContext(WebAudioContext);
  useEffect(() => {
    if (audioSource && audioSource.buffer?.duration) {
      setAudioDuration(Math.floor(audioSource.buffer.duration));
    }
    if (audioContext) {
      setAudioStartTime(audioContext.currentTime);
    }
  }, [audioSource]);
};
export { usePlayingQueueAndPlayingIndexToloadAudioDuration };
