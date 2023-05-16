interface CoverImageProps {
  imgType?: "avatar" | "albumCover" | "playerCover";
  src: string;
  onClick?: () => void;
}
const CoverImage = ({ imgType = "playerCover", src, onClick }: CoverImageProps) => {
  // console.log("@@@img src is", src);
  const imageButton = {
    avatar: (
      <button className="h-12 w-12 rounded-full border">
        <img className="object-cover" src={src} alt="avatar" onClick={onClick} />
      </button>
    ),
    albumCover: (
      <button onClick={onClick} className="h-24 w-24 rounded-full border">
        <img className="object-cover" src={src} alt="album cover" />
      </button>
    ),
    playerCover: (
      <button onClick={onClick} className="h-16 w-16 rounded-full border lg:h-24 lg:w-24">
        <img className="object-cover" src={src} alt="player cover" />
      </button>
    ),
  };

  return imageButton[imgType];
};

export default CoverImage;
