import { MusicContext } from "@/contexts/MusicContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import { useContext, useEffect } from "react";
import { getAudioSource } from "@/utils/getAudioSource";

const useAudioSource = () => {
  const { playingIndex, playingQueue } = useContext(MusicContext);
  const { audioSource, analyserNode, setAudioSource, audioContext } = useContext(WebAudioContext);
  const loadSong = async () => {
    try {
      if (analyserNode && audioSource) audioSource.disconnect(analyserNode);
    } catch (err) {
      return;
    }
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
    console.log(audioContext?.state);
    console.log(audioSource);
    loadSong();
  }, [playingIndex]);
};

export default useAudioSource;
