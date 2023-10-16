import React, { useContext, useEffect } from "react";
import formatTime from "../../utils/formatTime";
import { AudioContext } from "@/contexts/AudioContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import { useAudioBufferInitalizeAudioSource } from "@/hooks/musicPlayer/useAudioBuffer";
import { MusicContext } from "@/contexts/MusicContext";

const ProgressBar = () => {
  const { audioDuration, audioStartTime, setAudioStartTime } = useContext(AudioContext);
  const { audioContext, audioSource, audioBuffer, analyserNode, setAudioSource } =
    useContext(WebAudioContext);
  const { isPlaying } = useContext(MusicContext);
  let currentAudioTime: number = 0;
  if (audioContext) currentAudioTime = audioContext.currentTime - audioStartTime;
  const handleProgressChange = (time: number) => {
    if (audioContext && audioSource && analyserNode) {
      console.log("handleProgressChange: disconnect first");
      audioSource.stop();
      audioSource.disconnect();
      console.log(`handleProgressChange: set new audio source. Start at: ${time}`);
      const newAudioSource = audioContext.createBufferSource();
      newAudioSource.buffer = audioBuffer;
      audioContext && setAudioStartTime(audioContext.currentTime - time);
      setAudioSource(newAudioSource);
      newAudioSource.start(0, time);
      newAudioSource.connect(analyserNode);
      isPlaying && audioContext.resume();
      !isPlaying && audioContext.suspend();
    }
  };
  useAudioBufferInitalizeAudioSource();

  return (
    <div
      className="relative flex h-[14px] w-full items-center justify-center gap-4 text-light"
      role="progressbar"
    >
      <p role="currentTime" className="text-xs md:text-sm">
        {formatTime(Math.floor(currentAudioTime))}
      </p>
      <input
        className="h-1 w-full md:h-3"
        type="range"
        min={0}
        max={audioDuration}
        value={currentAudioTime}
        onChange={(e) => {
          handleProgressChange(parseInt(e.target.value));
        }}
      />

      <p role="endTime" className="text-xs md:text-sm">
        {formatTime(audioDuration)}
      </p>
    </div>
  );
};

export default ProgressBar;
