import { IoPlayBackOutline } from "react-icons/io5";
import { AiOutlineCloseCircle, AiFillRocket } from "react-icons/ai";
import { BiPlayCircle, BiPauseCircle, BiHeart } from "react-icons/bi";
import { FiFastForward, FiSkipForward, FiSkipBack } from "react-icons/fi";
import { TbArrowsShuffle } from "react-icons/tb";
import { BsRepeat, BsRepeat1, BsPersonLinesFill } from "react-icons/bs";
import { MdHomeFilled, MdMusicVideo, MdQueueMusic } from "react-icons/md";
import { RiAlbumFill, RiDeleteBin5Line } from "react-icons/ri";
import { GiBackwardTime } from "react-icons/gi";

type ButtonColor = "primary" | "secondary" | "ternary" | "warning" | "info" | "light" | "dark";
type IconTypes =
  | "close"
  | "playback"
  | "fastforward"
  | "favorite"
  | "pause"
  | "play"
  | "next"
  | "previous"
  | "shuffle"
  | "repeat"
  | "loop"
  | "home"
  | "discover"
  | "albums"
  | "artists"
  | "videos"
  | "recentplay"
  | "lists"
  | "bin";
type ButtonProps = {
  iconTypes?: IconTypes;
  color?: ButtonColor;
  size?: "tiny" | "small" | "normal" | "large";
  outline?: boolean;
  label?: string;
  onClick?: () => void;
} & React.ComponentProps<"button">;

const btn = " text-light text-base rounded-full font-[Roboto] flex justify-center items-center";
const getButtonClass = (color: ButtonColor, outline: boolean) => {
  switch (color) {
    case "primary":
      return outline
        ? "border border-primary hover:bg-primary active:bg-primary disabled:text-light-100"
        : "bg-primary hover:bg-primary-400 active:bg-primary-400 disabled:bg-primary-100 disabled:text-light-400";
    case "secondary":
      return outline
        ? "border border-secondary hover:bg-secondary active:bg-secondary disabled:text-secondary-100"
        : "bg-secondary hover:bg-secondary-400 active:bg-secondary-400 disabled:bg-secondary-100 disabled:text-light-400";
    case "ternary":
      return outline
        ? "border border-ternary hover:bg-ternary active:bg-ternary disabled:text-light-100"
        : "bg-ternary hover:bg-ternary-400 active:bg-ternary-400 disabled:bg-ternary-100 disabled:text-light-400";
    case "warning":
      return outline
        ? "border border-warning hover:bg-warning active:bg-warning disabled:text-light-100"
        : "bg-warning hover:bg-warning-400 active:bg-warning-400 disabled:bg-warning-100 disabled:text-light-400";
    case "info":
      return outline
        ? "border border-info hover:bg-info active:bg-info disabled:text-light-100"
        : "bg-info hover:bg-info-400 active:bg-info-400 disabled:bg-info-100 disabled:text-light-400";
    case "light":
      return `hover:bg-light-400 hover:text-dark active:bg-light-400 active:text-dark ${
        outline
          ? "border border-light-100 text-light disabled:border-light-100 disabled:text-light-100"
          : "bg-light-400 text-dark disabled:bg-light-200 disabled:text-dark-200"
      }`;
    case "dark":
      return `hover:bg-dark-400 hover:text-light active:bg-dark-400 active:text-light ${
        outline
          ? "border border-dark-100 text-dark disabled:border-dark-100 disabled:text-light-100"
          : "bg-dark-400 text-light disabled:bg-dark-200 disabled:text-light-200"
      }`;
  }
};

const NormalButton = ({
  color = "primary",
  outline = false,
  size = "normal",
  onClick,
  label = "button",
  iconTypes = "close",
  ...otherProps
}: NormalButtonProps) => {
  const buttonSize = {
    tiny: "py-[1px] px-[4px]",
    small: "py-[3px] px-[8px]",
    normal: "py-[6px] px-[12px]",
    large: "py-[12px] px-[24px]",
  };
  const iconColor = {
    primary: "#8B3ECF",
    secondary: "#3972E6",
    ternary: "#2DEBC9",
    info: "#DB7737",
    warning: "#E63965",
    light: "#FEFEFE",
    dark: "#282B2D",
  };
  const iconSize = {
    tiny: "26px",
    small: "32px",
    normal: "40px",
    large: "48px",
  };
  const iconType = {
    playback: <IoPlayBackOutline className=" h-5 w-5" />,
    close: <AiOutlineCloseCircle className=" h-5 w-5" />,
    fastforward: <FiFastForward className=" h-5 w-5" />,
    favorite: <BiHeart className=" h-5 w-5" />,
    pause: <BiPauseCircle className="h-8 w-8 sm:h-10 sm:w-10" />,
    play: <BiPlayCircle className="h-8 w-8 sm:h-10 sm:w-10" />,
    next: <FiSkipForward className=" h-5 w-5" />,
    previous: <FiSkipBack className=" h-5 w-5" />,
    repeat: <BsRepeat1 className=" h-5 w-5" />,
    loop: <BsRepeat className=" h-5 w-5" />,
    shuffle: <TbArrowsShuffle className=" h-5 w-5" />,
    home: <MdHomeFilled className=" h-5 w-5" />,
    discover: <AiFillRocket className=" h-5 w-5" />,
    albums: <RiAlbumFill className=" h-5 w-5" />,
    artists: <BsPersonLinesFill className=" h-5 w-5" />,
    videos: <MdMusicVideo className=" h-5 w-5" />,
    recentplay: <GiBackwardTime className=" h-5 w-5" />,
    lists: <MdQueueMusic className=" h-5 w-5" />,
    bin: <RiDeleteBin5Line className=" h-5 w-5" />,
  };

  return (
    <button
      className={`${getButtonClass(color, outline)} ${buttonSize[size]} ${btn} `}
      {...otherProps}
      onClick={onClick}
    >
      {label}
    </button>
  ) : (
    <button onClick={onClick} aria-label={iconTypes} className="text-light">
      {iconType[iconTypes]}
    </button>
  );
};

export default NormalButton;