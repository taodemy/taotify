import AudioVisualizer from "@/components/visualizer";
import VolumeController from "@/components/volumeController";
import { VolumeContextProvider } from "@/contexts/VolumeContext";
const VolumeControllerDemo = () => {
  return (
    <VolumeContextProvider>
      <AudioVisualizer></AudioVisualizer>
      <VolumeController></VolumeController>
    </VolumeContextProvider>
  );
};
export default VolumeControllerDemo;
