import React from "react";

interface CoverImageProps {
  variant?: "avatars" | "musicCover";
  src: string;
}
const CoverImage = ({ variant = "musicCover", src }: CoverImageProps) => {
  return variant === "avatars" ? (
    <img
      className="w-16 rounded-full md:w-[60px] lg:w-[100px]"
      src={src}
      alt={`Picture of ${variant}`}
    />
  ) : (
    <img
      className="w-16 rounded-full md:w-[60px] lg:w-[100px]"
      src={src}
      alt={`Picture of ${variant}`}
    />
  );
};

export default CoverImage;
