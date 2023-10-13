import { MusicContext } from "@/contexts/MusicContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import { getAudioBuffer } from "@/utils/getAudioBuffer";
import { replaceHttp2Https } from "@/utils/replaceHttp2Https";
import { useEffect, useContext } from "react";

const usePlayingQueueAndPlayingIndexLoadSong = () => {
  const { playingIndex, playingQueue } = useContext(MusicContext);
  const { audioSource, analyserNode, setAudioBuffer, audioContext } = useContext(WebAudioContext);
  const loadSong = async () => {
    try {
      if (analyserNode && audioSource) {
        audioSource.buffer && audioSource.stop();
        audioSource.disconnect(analyserNode);
        audioSource.disconnect();
      }
    } catch (err) {}
    if (playingQueue && playingQueue.musicContext[playingIndex].song) {
      let url = playingQueue.musicContext[playingIndex].song.mp3Url;
      url = replaceHttp2Https(url);
      const res = await getAudioBuffer({
        mp3Url: url,
        audioContext: audioContext,
      });
      if (res.status) {
        res.audioBuffer && setAudioBuffer(res.audioBuffer);
      }
    }
  };

  useEffect(() => {
    loadSong();
  }, [playingQueue, playingIndex]);
};

export { usePlayingQueueAndPlayingIndexLoadSong };
