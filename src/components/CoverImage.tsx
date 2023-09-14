import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

interface CoverImageProps {
  variant?: "avatars" | "musicCover";
  src: string;
}
const CoverImage = ({ variant = "musicCover", src }: CoverImageProps) => {
  const router = useRouter();
  const onClickToVisualizer = () => {
    router.push(`/visualizer`);
    return;
  };

  return variant === "avatars" ? (
    <img className="rounded-full" src={src} alt={`Picture of ${variant}`} width={48} height={48} />
  ) : (
    <div className="h-[64px] w-[64px] overflow-hidden md:h-[60px] md:w-[60px] lg:h-[100px] lg:w-[100px]">
      <img
        className="rounded-full"
        src={src}
        alt={`Picture of ${variant}`}
        width={100}
        height={100}
        onClick={onClickToVisualizer}
      />
    </div>
  );
};

export default CoverImage;
