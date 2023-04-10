import { MusicContext } from "@/contexts/MusicContext";
import React, { useContext } from "react";

export default function MusicPlayer() {
  const { musicList, musicIndex, setMusicIndex } = useContext(MusicContext);
  //get new audio url after music list update context
  const audioUrl =
    //when there is music in list and user choose which one to play
    //then go get the url
    musicList.length === 0 || musicIndex === -1 ? "" : musicList[musicIndex].audioUrl;

  //when music end, update context with next index
  const handleEnd = () => {
    if (musicIndex < musicList.length - 1) setMusicIndex((prev) => prev + 1);
  };

  return (
    <div className=" w-[100vw] h-[100px] bg-secondary-100 fixed bottom-0 left-0 border-2">
      <audio src={audioUrl} controls autoPlay onEnded={handleEnd}></audio>
    </div>
  );
}
