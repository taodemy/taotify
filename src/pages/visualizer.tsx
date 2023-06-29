import AudioVisualizer from "@/components/visualizer";
import VolumeController from "@/components/volumeController";
import { VolumeContextProvider } from "@/contexts/VolumeContext";
import { useEffect, useState } from "react";
const VolumeControllerDemo = () => {
  const [isClientSide, setIsClientSide] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") setIsClientSide(true);
  }, []);

  return <>{isClientSide ? <AudioVisualizer /> : null}</>;
};
export default VolumeControllerDemo;
