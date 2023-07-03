import { WebAudioContext } from "@/contexts/WebAudioContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Circle, Canvas, Rect, Image as GImage, DisplayObject, CanvasEvent } from "@antv/g";
import { Renderer as CanvasRenderer } from "@antv/g-canvas";
import { MusicContext } from "@/contexts/MusicContext";

export default function AudioVisualizer() {
  const { audioData, analyserNode, visualArr, setAudioData, setVisualArr } =
    useContext(WebAudioContext);
  const { isPlaying } = useContext(MusicContext);
  const rafRef = useRef<number>();
  let lastTime: number;
  const POINT_NUM = 64;
  const OFFSET = 10;
  const RECT_WIDTH = 4;
  const RECT_COLOR = "#e9dcf7";
  const FILL_COLOR = "#262626";
  const X = 150;
  const Y = 150;
  const R = 80;
  const canvasRef = useRef<Canvas>();
  const sArr = useRef<DisplayObject[]>([]);
  const imgRef = useRef<GImage>();
  const getArray = (arr: number[]) => {
    const filterArr = arr.reduce((prev: number[], curr: number, index: number) => {
      if (index > 10 && index < 75) {
        prev.push(curr);
      }
      return prev;
    }, []);
    return filterArr;
  };

  const step = (timestamp: number) => {
    if (!lastTime) lastTime = timestamp;
    const progress = timestamp - lastTime;
    if (progress === 0 || progress > 0) {
      try {
        analyserNode?.getByteFrequencyData(visualArr!);
        setAudioData(Array.from(visualArr!));
        lastTime = timestamp;
      } catch (err) {
        console.log(err);
      }
    }
    rafRef.current = requestAnimationFrame(step);
  };

  const initCanvas = () => {
    const renderer = new CanvasRenderer();
    const newCanvas = new Canvas({
      container: "SLine",
      width: 2 * X,
      height: 2 * Y,
      renderer: renderer,
    });
    const circle = new Circle({
      style: {
        cx: X,
        cy: Y,
        r: R,
        fill: FILL_COLOR,
        lineWidth: 5,
        shadowColor: RECT_COLOR,
      },
    });
    imgRef.current = new GImage({
      style: {
        x: X - R,
        y: Y - R,
        width: 2 * R,
        height: 2 * R,
        img: "/sample_cover.png",
        clipPath: new Circle({
          style: {
            cx: X,
            cy: Y,
            r: R,
          },
        }),
      },
    });
    newCanvas.addEventListener(CanvasEvent.READY, () => {
      newCanvas.appendChild(circle);
      newCanvas.appendChild(imgRef.current!);
      const animation = imgRef.current!.animate(
        [
          {
            transform: "rotate(-360deg)",
            transformOrigin: "center",
          },
          {
            transform: "rotate(0)",
            transformOrigin: "center",
          },
        ],
        {
          duration: 10000,
          iterations: Infinity,
        }
      );
      setTimeout(() => {
        animation?.pause();
      });
      sArr.current = Array.from({ length: POINT_NUM }, (item, index: number) => {
        const deg = index * (360 / POINT_NUM) - 150;
        const l = Math.cos((deg * Math.PI) / 180);
        const t = Math.sin((deg * Math.PI) / 180);
        const r = R + OFFSET;
        return (canvasRef.current as Canvas).appendChild(
          new Rect({
            style: {
              width: RECT_WIDTH,
              height: RECT_WIDTH,
              radius: RECT_WIDTH / 2,
              x: X + l * r - RECT_WIDTH / 2,
              y: Y + t * r - RECT_WIDTH / 2,
              fill: RECT_COLOR,
            },
          }).rotate(deg - 90)
        );
      });
    });
    canvasRef.current = newCanvas;
  };

  const initVisualArr = () => {
    if (analyserNode) {
      const newVisualArr = new Uint8Array(analyserNode.frequencyBinCount);
      setVisualArr(newVisualArr);
    }
  };

  const cleanAudioData = () => {
    setVisualArr(new Uint8Array());
  };

  useEffect(() => {
    initCanvas();
    initVisualArr();
    return () => {
      cleanAudioData();
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      imgRef.current?.getAnimations().map((animation) => {
        animation.play();
      });
      rafRef.current = requestAnimationFrame(step);
    } else {
      imgRef.current?.getAnimations().map((animation) => {
        animation.pause();
      });
      rafRef.current && cancelAnimationFrame(rafRef.current);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioData?.length) {
      const arr = getArray(audioData);
      arr.map((item, index) => {
        sArr.current[index]?.setAttribute("height", `${((item * item) / 65025) * 60 + RECT_WIDTH}`);
      });
    }
  }, [audioData]);

  return <div id="SLine" className="top-1/4 flex gap-2"></div>;
}
