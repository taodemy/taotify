import React, { useContext, useEffect } from "react";
import formatTime from "../../utils/formatTime";
import { AudioContext } from "@/contexts/AudioContext";
import { useAudioSourceSetAudioDuration, useAudioSourceSetAudioStartTime } from "@/hooks/musicPlayer/useAudioSource";
import { usePlayingQueueAndPlayingIndexResetStartTime } from "@/hooks/musicPlayer/usePlayingQueueAndPlayingIndex";
import { WebAudioContext } from "@/contexts/WebAudioContext";

const ProgressBar = () => {
  const { audioDuration, currentAudioTime, audioStartTime } = useContext(AudioContext);
	const {audioContext} = useContext(WebAudioContext);
  const handleProgressChange = (time: number) => {};
  useAudioSourceSetAudioDuration();
	useAudioSourceSetAudioStartTime();

  return (
    <div
      className="relative flex h-[14px] w-full items-center justify-center gap-4 text-light"
      role="progressbar"
    >
      <p role="currentTime" className="text-xs md:text-sm">
        {formatTime(Math.floor(audioContext!.currentTime - audioStartTime))}
      </p>
			{currentAudioTime}
      <input
        className="h-1 w-full md:h-3"
        type="range"
        min={0}
        max={audioDuration}
        value={audioContext!.currentTime - audioStartTime}
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
