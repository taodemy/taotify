import ProgressBar from "@/components/player/ProgressBar";
import { MusicContext } from "@/contexts/MusicContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import CoverImage from "@/components/CoverImage";
import AudioControls from "@/components/player/AudioControls";

const MusicPlayer = () => {
  const { playingQueue, playingIndex, setPlayingIndex, isPlaying, setIsPlaying } =
    useContext(MusicContext);
  const [currentTime, setCurrentTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [loopMode, setLoopMode] = useState<"none" | "single" | "all">("none");
  const [audioUrl, setAudioUrl] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audio = audioRef.current;

  const handlePlayEnd = () => {
    if (!playingQueue) return;

    if (loopMode === "single") {
      audio?.load();
      return;
    }

    if (playingIndex === playingQueue.songs.length - 1 && loopMode === "all") setPlayingIndex(0);
    if (playingIndex === playingQueue.songs.length - 1 && loopMode === "none") setIsPlaying(false);
    if (playingIndex < playingQueue.songs.length - 1) setPlayingIndex((prev) => prev + 1);
  };

  const handleDurationChange = () => {
    setCurrentTime(0);
    setEndTime(Math.floor(audio?.duration || 0));
  };

  const handleProgressChange = (time: number) => {
    if (!audio) return;
    setCurrentTime(time);
    audio.currentTime = time;
  };

  useEffect(() => {
    const newAudioUrl = playingQueue?.songs[playingIndex].mp3Url || "";
    setAudioUrl(newAudioUrl);
  }, [playingQueue, playingIndex]);

  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      setCurrentTime(Math.ceil(audio?.currentTime || 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying, audioUrl]);

  const playAudio = () => {
    if (audio) {
      try {
        if (audio.readyState === 4) {
          audio.play();
          return;
        }
        //if readyState is not 4(ready), we will add an event listener to check music's status, when the status is "can play", we will play it.
        audio.addEventListener("canplay", () => {
          audio.play();
        });
      } catch (error) {
        console.log(error || JSON.stringify(error));
      }
    }
  };
  useEffect(() => {
    if (playingIndex !== -1) {
      isPlaying ? playAudio() : audio?.pause();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, audio]);

  return (
    <section
      className={`fixed -bottom-6 h-[78px] w-full transition-all duration-1000 md:left-[64px] md:-bottom-20 md:h-[120px] md:w-[calc(100vw-64px)] lg:left-[320px] lg:w-[calc(100vw-320px)] ${
        playingQueue && "-translate-y-20"
      }`}
    >
      <div className="relative h-full drop-shadow-bgImgShadow">
        <img src={playingQueue?.songs[0].album.picUrl} alt="Player background image" />
      </div>

      <div className="absolute left-0 top-0 flex h-full w-full gap-2 bg-dark-400 bg-opacity-80 px-2 backdrop-blur-2xl md:gap-4 md:px-4 md:py-2">
        <audio
          ref={audioRef}
          src={audioUrl}
          role="audio"
          autoPlay
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onDurationChange={handleDurationChange}
          onEnded={handlePlayEnd}
        />
        <div className="flex flex-col items-center justify-center gap-1 lg:justify-start">
          {playingQueue && <CoverImage src={playingQueue?.songs[0].album.picUrl} />}
          <div className="hidden items-center justify-center gap-1 px-2 text-light md:flex md:flex-col lg:hidden">
            <p className="text-base">{playingQueue?.songs[playingIndex].name}</p>
            <p className="text-sm">{playingQueue?.songs[playingIndex].artists[0].name}</p>
          </div>
        </div>

        <div className="hidden items-start justify-center gap-[10px] px-2 text-light lg:flex lg:flex-col ">
          <p className="text-base">{playingQueue?.songs[playingIndex].name}</p>
          <p className="text-sm">By {playingQueue?.songs[playingIndex].artists[0].name}</p>
        </div>

        <div className="flex flex-grow flex-col items-center md:justify-center md:gap-2 md:p-[10px]">
          <div className="flex items-center justify-center gap-1 px-2 pt-1 text-light md:hidden">
            <p className="text-sm">{playingQueue?.songs[playingIndex].name}</p>
            <p className="text-sm"> - </p>
            <p className="text-xs">{playingQueue?.songs[playingIndex].artists[0].name}</p>
          </div>
          <AudioControls audioRef={audioRef} loopMode={loopMode} setLoopMode={setLoopMode} />
          <ProgressBar
            currentTime={currentTime}
            endTime={endTime}
            handleProgressChange={handleProgressChange}
          />
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
