import { AiFillRocket } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { BsPersonLinesFill } from "react-icons/bs";
import { MdHomeFilled, MdMusicVideo } from "react-icons/md";
import { RiAlbumFill } from "react-icons/ri";
import { GiBackwardTime } from "react-icons/gi";

const linkList = {
  home: <MdHomeFilled className="h-5 w-5 sm:mr-0.5 md:ml-2" />,
  discover: <AiFillRocket className=" h-5 w-5 sm:mr-0.5 md:ml-2" />,
  albums: <RiAlbumFill className=" h-5 w-5 sm:mr-0.5 md:ml-2" />,
  artists: <BsPersonLinesFill className=" h-5 w-5 sm:mr-0.5 md:ml-2" />,
  videos: <MdMusicVideo className=" h-5 w-5 sm:mr-0.5 md:ml-2" />,
  recentPlay: <GiBackwardTime className=" h-5 w-5 sm:mr-0.5 md:ml-2" />,
  favorite: <BiHeart className=" h-5 w-5 sm:mr-0.5 md:ml-2" />,
};

enum LINK_TEXT {
  home = "Home",
  discover = "Discover",
  albums = "Albums",
  artists = "Artists",
  videos = "Videos",
  recentPlay = "Recent Play",
  favorite = "Favorite songs",
}

export type LinkTypes = keyof typeof linkList;

type IconProps = {
  linkTypes?: LinkTypes;
  onClick?: () => void;
  isActive?: boolean;
};

const LinkButton = ({ onClick, linkTypes = "home", isActive = false }: IconProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-start border-l-8 border-transparent text-light-200 ${
        isActive && "border-primary"
      }`}
    >
      <button
        aria-label={linkTypes}
        className={`flex h-[72px] w-[72px] items-center justify-center bg-primary sm:h-8 sm:w-14 sm:bg-transparent ${
          isActive && "text-light sm:bg-gradient-to-r sm:from-primary sm:to-primary/0"
        }`}
      >
        {linkList[linkTypes]}
      </button>
      <span className={`hidden pl-2 lg:inline-block ${isActive && "text-light"}`}>
        {LINK_TEXT[linkTypes]}
      </span>
    </div>
  );
};

export default LinkButton;
