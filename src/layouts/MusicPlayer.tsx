import React, { useEffect, useRef, useState } from "react";
import MusicControls from "@/components/MusicControls";
import getNewSongs from "@/utils/getNewSongs";
import getMusicSource from "@/utils/getMusicSource";

export default function MusicPlayer() {
  const [musicData, setMusicData] = useState<Song[]>([]);
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
      try {
        let songs = await getNewSongs();
        const urls = await Promise.all(
          songs.map(async (song: Song) => await getMusicSource(song.id, "exhigh"))
        );
        for (let i = 0; i < songs.length; i++) {
          songs[i].musicUrl = urls[i];
        }
        setMusicData(songs);
        setCurrentMusic(songs[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log("current song: " + currentMusic.name);
  return (
    <div className=" w-[100vw] h-[100px] bg-secondary-100 fixed bottom-0 left-0 border-2">
      Music Player
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
