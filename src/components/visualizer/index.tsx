import { WebAudioContext } from "@/contexts/WebAudioContext";
import React, { useContext, useEffect, useRef } from "react";
import { Circle, Canvas, Rect, Image as GImage, DisplayObject, CanvasEvent } from "@antv/g";
import { Renderer as CanvasRenderer } from "@antv/g-canvas";

export default function AudioVisualizer() {
  const { audioData } = useContext(WebAudioContext);
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
      imgRef.current!.animate(
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
          fill: "both",
          iterations: Infinity,
        }
      );
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

  useEffect(() => {
    initCanvas();
  }, []);

  useEffect(() => {
    if (audioData?.length) {
      // console.log(audioData);
      const arr = getArray(audioData);
      arr.map((item, index) => {
        sArr.current[index]?.setAttribute("height", `${((item * item) / 65025) * 50 + RECT_WIDTH}`);
      });
    }
  }, [audioData]);

  return <div id="SLine" className="top-1/4 flex gap-2"></div>;
}
