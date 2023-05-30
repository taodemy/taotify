import { WebAudioContext } from "@/contexts/WebAudioContext";
import React, { useContext, useEffect, useState, useRef } from "react";
export default function AudioVisualizer() {
  const [audioData, setAudioData] = useState<number[]>([]);
  const { analyserNode, audioSource } = useContext(WebAudioContext);
  const [visualArr, setVisualArr] = useState<Uint8Array>(new Uint8Array());
  const rafRef = useRef<number>();

  let lastTime: number;
  const step = (timestamp: number) => {
    if (!lastTime) lastTime = timestamp;
    const progress = timestamp - lastTime;
    if (progress === 0 || progress > 0) {
      analyserNode && analyserNode.getByteFrequencyData(visualArr);
      setAudioData(Array.from(visualArr));
      lastTime = timestamp;
    }
    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    if (analyserNode) {
      const newVisualArr = new Uint8Array(analyserNode.frequencyBinCount);
      setVisualArr(newVisualArr);
    }
  }, [audioSource]);

  return <div></div>;
}
