import { MusicContext } from "@/contexts/MusicContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import { useContext, useEffect } from "react";
import { getAudioSource } from "@/utils/getAudioSource";
import { AudioContext } from "@/contexts/AudioContext";

const useAudioSource = () => {
  const { playingIndex, playingQueue } = useContext(MusicContext);
  const { setAudioDuration } = useContext(AudioContext);
  const { audioSource, analyserNode, setAudioSource, audioContext } = useContext(WebAudioContext);
  const loadSong = async () => {
    try {
      if (analyserNode && audioSource) audioSource.disconnect(analyserNode);
    } catch (err) {
      return;
    }
    if (playingQueue && playingQueue.musicContext[playingIndex].song) {
      const url = playingQueue.musicContext[playingIndex].song.mp3Url;
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
  }, [playingQueue, playingIndex]);
};

export default useAudioSource;
