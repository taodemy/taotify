import { WebAudioContext } from "@/contexts/WebAudioContext";
import React, { useContext, useEffect, useState, useRef } from "react";
export default function AudioVisualizer() {
  const { analyserNode, audioData } = useContext(WebAudioContext);

  return <div></div>;
}
