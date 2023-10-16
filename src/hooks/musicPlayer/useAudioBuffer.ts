import { ARRAY_LENGTH } from "@/constant/visualizer";
import { AudioContext } from "@/contexts/AudioContext";
import { MusicContext } from "@/contexts/MusicContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import { useContext, useEffect } from "react";

const useAudioBufferInitalizeAudioSource = () => {
  const { setAudioDuration, setAudioStartTime } = useContext(AudioContext);
  const { audioContext, setAudioSource, audioBuffer, analyserNode, setAudioData } =
    useContext(WebAudioContext);
  const { setIsPlaying } = useContext(MusicContext);

  useEffect(() => {
    if (audioContext && audioBuffer && analyserNode) {
      const newAudioSource = audioContext.createBufferSource();
      newAudioSource.buffer = audioBuffer;
      setAudioSource(newAudioSource);
      setAudioDuration(Math.floor(newAudioSource.buffer.duration));
      setAudioStartTime(audioContext.currentTime);
      setIsPlaying(true);
      try {
        newAudioSource.connect(analyserNode);
        newAudioSource.buffer && newAudioSource.start();
        audioContext.suspend();
        setAudioData(new Array(ARRAY_LENGTH).fill(0));
      } catch (err) {}
    }
  }, [audioBuffer]);
};

export { useAudioBufferInitalizeAudioSource };
