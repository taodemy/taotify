import { WebAudioContext } from "@/contexts/WebAudioContext";
import React, { useContext, useEffect, useState, useRef } from "react";

interface SComponentProps {
  isPlaying: boolean;
  data: number[];
  audioImg?: string;
}

export default function AudioVisualizer(Props: SComponentProps) {
  const { analyserNode, audioData } = useContext(WebAudioContext);
  const POINT_NUM = 64;
  const OFFSET = 10;
  const RECT_WIDTH = 4;
  const RECT_COLOR = "#e9dcf7";

  return <div></div>;
}
