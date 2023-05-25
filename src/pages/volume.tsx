import VolumeController from "@/components/volumeController";
import { VolumeContextProvider } from "@/contexts/VolumeContext";
const VolumeControllerDemo = () => {
  return (
    <VolumeContextProvider>
      <VolumeController></VolumeController>
    </VolumeContextProvider>
  );
};
export default VolumeControllerDemo;
