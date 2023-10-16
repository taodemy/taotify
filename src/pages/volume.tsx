import VolumeController from "@/components/volumeController";
import { AudioContextProvider } from "@/contexts/AudioContext";
const VolumeControllerDemo = () => {
  return (
    <AudioContextProvider>
      <VolumeController></VolumeController>
    </AudioContextProvider>
  );
};
export default VolumeControllerDemo;
