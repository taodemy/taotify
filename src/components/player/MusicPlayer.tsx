import ProgressBar from "@/components/player/ProgressBar";
import { MusicContext } from "@/contexts/MusicContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import CoverImage from "@/components/CoverImage";
import AudioControls from "@/components/player/AudioControls";
import useAudioSource from "@/hooks/musicPlayer/useAudioSource";
import useIsPlaying from "@/hooks/musicPlayer/useIsPlaying";

const MusicPlayer = () => {
  const { playingQueue, playingIndex, setPlayingIndex, isPlaying, setIsPlaying } =
    useContext(MusicContext);
  const [currentTime, setCurrentTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [loopMode, setLoopMode] = useState<"none" | "single" | "all">("none");
  const [audioUrl, setAudioUrl] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audio = audioRef.current;
  const musicContext = playingQueue?.musicContext;

  useAudioSource();
  useIsPlaying();

  const handlePlayEnd = () => {
    if (!musicContext) return;

    if (loopMode === "single") {
      audio?.load();
      return;
    }

    if (playingIndex === musicContext.length - 1 && loopMode === "all") setPlayingIndex(0);
    if (playingIndex === musicContext.length - 1 && loopMode === "none") setIsPlaying(false);
    if (playingIndex < musicContext.length - 1) setPlayingIndex((prev) => prev + 1);
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
    const newAudioUrl = playingQueue?.musicContext[playingIndex].song.mp3Url || "";
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
      className={`fixed -bottom-10 h-[78px] w-full transition-all duration-1000 md:-bottom-24 md:left-[64px] md:h-[120px] md:w-[calc(100vw-64px)] lg:left-[320px] lg:w-[calc(100vw-320px)] ${
        playingQueue && "-translate-y-24"
      }`}
    >
      {musicContext && (
        <div className="relative h-full drop-shadow-bgImgShadow">
          <img src={musicContext[0].album.image} alt="Player background image" />
        </div>
      )}

      <div className="absolute left-0 top-0 flex h-full w-full gap-2 bg-dark-400 bg-opacity-80 px-2 backdrop-blur-2xl md:gap-4 md:px-4 md:py-2">
        {/* <audio
          ref={audioRef}
          src={audioUrl}
          role="audio"
          autoPlay
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onDurationChange={handleDurationChange}
          onEnded={handlePlayEnd}
        /> */}
        <div className="flex flex-col items-center justify-center gap-1 lg:justify-start">
          {musicContext && <CoverImage src={musicContext[0].album.image} />}
          <div className="hidden items-center justify-center gap-1 px-2 text-light md:flex md:flex-col lg:hidden">
            <p className="text-base">{playingQueue?.musicContext[playingIndex].song.name}</p>
            <p className="text-sm">{playingQueue?.musicContext[playingIndex].artist.name}</p>
          </div>
        </div>

        <div className="hidden items-start justify-center gap-[10px] px-2 text-light lg:flex lg:flex-col ">
          <p className="text-base">{playingQueue?.musicContext[playingIndex].song.name}</p>
          <p className="text-sm">By {playingQueue?.musicContext[playingIndex].artist.name}</p>
        </div>

        <div className="flex flex-grow flex-col items-center md:justify-center md:gap-2 md:p-[10px]">
          <div className="flex items-center justify-center gap-1 px-2 pt-1 text-light md:hidden">
            <p className="text-sm">{playingQueue?.musicContext[playingIndex].song.name}</p>
            <p className="text-sm"> - </p>
            <p className="text-xs">{playingQueue?.musicContext[playingIndex].artist.name}</p>
          </div>
          <AudioControls audioRef={audioRef} loopMode={loopMode} setLoopMode={setLoopMode} />
          <ProgressBar />
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
