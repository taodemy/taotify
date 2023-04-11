import React, { useEffect, useRef, useState } from "react";
import MusicControls from "@/components/MusicControls";
import getNewSongs from "@/utils/getNewSongs";
import getMusicSource from "@/utils/getMusicSource";

export interface SongProps {
  id: number;
  musicUrl: string;
  name: string;
  picUrl: string;
  album: [];
  artist: [];
}

export default function MusicPlayer() {
  const [musicData, setMusicData] = useState<SongProps[]>();
  const [currentMusic, setCurrentMusic] = useState({
    id: 0,
    name: "",
    artist: "",
    album: [],
    picUrl: "",
    musicUrl: "",
  });
  const [trackIndex, setTrackIndex] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      let songs = await getNewSongs();
      console.log(songs);
      const urls = await Promise.all(
        songs.map(async (song: SongProps) => await getMusicSource(song.id, "exhigh"))
      );
      console.log(songs);

      for (let i = 0; i < songs.length; i++) {
        songs[i].musicUrl = urls[i];
      }
      setMusicData(songs);
      setCurrentMusic(songs[0]);
    };
    fetchData();
  }, []);

  console.log("current song: " + currentMusic.name);
  return (
    <div className=" w-[100vw] h-[100px] bg-secondary-100 fixed bottom-0 left-0 border-2">
      Music Player
      {currentMusic ? "exist" : "undefine"}
      <div>
        <audio src={currentMusic.musicUrl} ref={audioRef} />
        <MusicControls
          audioRef={audioRef}
          musicData={musicData}
          trackIndex={trackIndex}
          setTrackIndex={setTrackIndex}
          setCurrentMusic={setCurrentMusic}
        />
      </div>
    </div>
  );
}
