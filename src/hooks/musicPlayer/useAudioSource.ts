import { WebAudioContext } from "@/contexts/WebAudioContext";
import { useContext, useEffect } from "react";
import { AudioContext } from "@/contexts/AudioContext";
import { ARRAY_LENGTH } from "@/constant/visualizer";

const useAudioSourceInitalizeContext = () => {
  const { audioContext, analyserNode, gainNode, audioSource, setAudioData } =
    useContext(WebAudioContext);
  const { setAudioStartTime, setAudioDuration } = useContext(AudioContext);

  useEffect(() => {
    console.log("connect to analyserNode");
    if (audioContext && analyserNode && gainNode && audioSource) {
      try {
        audioSource.connect(analyserNode);
        audioSource.start();
        audioContext.suspend();
        setAudioData(new Array(ARRAY_LENGTH).fill(0));
      } catch (err) {
        return;
      }
    }
    console.log("set audio duration to hooks");
    if (audioSource && audioSource.buffer?.duration) {
      setAudioDuration(Math.floor(audioSource.buffer.duration));
    }
    console.log("reset audio start time by audioSource");
    if (audioContext) {
      setAudioStartTime(audioContext.currentTime);
    }
  }, [audioSource]);
};

const useAudioSourceSetAudioStartTime = () => {
  const { setAudioStartTime } = useContext(AudioContext);
  const { audioContext, audioSource } = useContext(WebAudioContext);
  useEffect(() => {
    console.log("reset audio start time by audioSource");
    if (audioContext) {
      setAudioStartTime(audioContext.currentTime);
    }
  }, [audioSource]);
};

const useAudioSourceSetAudioDuration = () => {
  const { setAudioDuration, setAudioStartTime } = useContext(AudioContext);
  const { audioSource, audioContext } = useContext(WebAudioContext);
  useEffect(() => {
    console.log("set audio duration to hooks");
    if (audioSource && audioSource.buffer?.duration) {
      setAudioDuration(Math.floor(audioSource.buffer.duration));
    }
  }, [audioSource]);
};

export {
  useAudioSourceInitalizeContext,
  useAudioSourceSetAudioDuration,
  useAudioSourceSetAudioStartTime,
};
