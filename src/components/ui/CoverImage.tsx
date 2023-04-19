import React from "react";
import Image from "next/image";

interface CoverImageProps {
  variant?: "avatars" | "musicCover";
  src: string;
}
const CoverImage = ({ variant = "musicCover", src }: CoverImageProps) => {
  return variant === "avatars" ? (
    <Image src={src} alt={`Picture of ${variant}`} width={48} height={48} />
  ) : (
    <div className="h-16 w-16 ipad:h-[60px] ipad:w-[60px] desktop:h-[100px] desktop:w-[100px]">
      <Image src={src} alt={`Picture of ${variant}`} fill />
    </div>
  );
};

export default CoverImage;
