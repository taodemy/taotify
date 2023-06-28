import { MusicContext } from "@/contexts/MusicContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import { useContext, useEffect } from "react";
import { getAudioSource } from "@/utils/getAudioSource";

const useAudioSource = () => {
  const { playingIndex, playingQueue } = useContext(MusicContext);
  const { setAudioSource, audioContext } = useContext(WebAudioContext);
  const loadSong = async () => {
    if (playingQueue && playingQueue.songs[playingIndex]) {
      const url = playingQueue.songs[playingIndex].mp3Url;
      const res = await getAudioSource({
        mp3Url: url,
        audioContext: audioContext,
      });
      if (res.status) {
        setAudioSource(res.audioSource);
      }
    }
  };
  useEffect(() => {
    loadSong();
  });
};

export default useAudioSource;
