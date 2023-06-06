import AudioVisualizer from "@/components/visualizer";
import VolumeController from "@/components/volumeController";
import { MusicContext } from "@/contexts/MusicContext";
import { VolumeContextProvider } from "@/contexts/VolumeContext";
import { WebAudioContext } from "@/contexts/WebAudioContext";
import { useContext, useEffect } from "react";
const VolumeControllerDemo = () => {
  const { audioData } = useContext(WebAudioContext);
  const { isPlaying } = useContext(MusicContext);
  return (
    <VolumeContextProvider>
      <AudioVisualizer isPlaying={isPlaying} data={audioData}></AudioVisualizer>
      <VolumeController></VolumeController>
    </VolumeContextProvider>
  );
};
export default VolumeControllerDemo;
