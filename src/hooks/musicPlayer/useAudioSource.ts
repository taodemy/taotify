import { WebAudioContext } from "@/contexts/WebAudioContext";
import { useContext, useEffect } from "react";
import { AudioContext } from "@/contexts/AudioContext";
import { ARRAY_LENGTH } from "@/constant/visualizer";

const useAudioSourceConnectAudioContext = () => {
  const { audioContext, analyserNode, gainNode, audioSource, setAudioData } =
    useContext(WebAudioContext);

  useEffect(() => {
    if (audioContext && analyserNode && gainNode && audioSource) {
      try {
        audioSource.connect(analyserNode);
        audioSource.start(audioContext.currentTime);
        setAudioData(new Array(ARRAY_LENGTH).fill(0));
      } catch (err) {
        return;
      }
    }
  }, [audioSource]);
};

const useAudioSourceSetAudioStartTime = () => {
  const { setAudioStartTime } = useContext(AudioContext);
  const { audioContext, audioSource } = useContext(WebAudioContext);
  useEffect(() => {
    if (audioContext) {
      setAudioStartTime(audioContext.currentTime);
    }
  }, [audioSource]);
};

const useAudioSourceSetAudioDuration = () => {
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

export {
  useAudioSourceConnectAudioContext,
  useAudioSourceSetAudioDuration,
  useAudioSourceSetAudioStartTime,
};
