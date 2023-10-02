import { AudioContext } from "@/contexts/AudioContext";
import { MusicContext } from "@/contexts/MusicContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import { getAudioSource } from "@/utils/getAudioSource";
import { useEffect, useContext } from "react";

const usePlayingQueueAndPlayingIndexLoadSong = () => {
  const { playingIndex, playingQueue } = useContext(MusicContext);
  const { audioSource, analyserNode, setAudioSource, audioContext } = useContext(WebAudioContext);
  const loadSong = async () => {
    try {
      if (analyserNode && audioSource) {
        audioSource.stop();
        audioSource.disconnect(analyserNode);
        audioSource.disconnect();
      }
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

const usePlayingQueueAndPlayingIndexResetStartTime = (startTime: number) => {
  const { playingIndex, playingQueue } = useContext(MusicContext);
  const { setCurrentAudioTime, setAudioStartTime, audioStartTime } = useContext(AudioContext);
  const { audioContext } = useContext(WebAudioContext);
  useEffect(() => {
    setAudioStartTime(audioContext!.currentTime);
  }, [playingQueue, playingIndex]);
};

export { usePlayingQueueAndPlayingIndexLoadSong, usePlayingQueueAndPlayingIndexResetStartTime };
