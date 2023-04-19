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
    <div className="h-16 w-16 md:h-[60px] md:w-[60px] lg:h-[100px] lg:w-[100px]">
      <Image
        className="rounded-full"
        src={src}
        alt={`Picture of ${variant}`}
        width={100}
        height={100}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default CoverImage;
