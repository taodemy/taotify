import VolumeController from "@/components/volumeController/VolumeController";
import { VolumeContextProvider } from "@/contexts/VolumeContext";
const VolumeControllerDemo = () => {
  return (
    <VolumeContextProvider>
      <VolumeController></VolumeController>
    </VolumeContextProvider>
  );
};
export default VolumeControllerDemo;
