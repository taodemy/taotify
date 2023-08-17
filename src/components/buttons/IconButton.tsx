import { IoPlayBackOutline } from "react-icons/io5";
import { AiOutlineCloseCircle, AiOutlineSetting } from "react-icons/ai";
import { BiPlayCircle, BiPauseCircle, BiHeart, BiDotsHorizontalRounded } from "react-icons/bi";
import { FiFastForward, FiSkipForward, FiSkipBack } from "react-icons/fi";
import { TbArrowsShuffle } from "react-icons/tb";
import { BsRepeat, BsRepeat1 } from "react-icons/bs";
import { MdQueueMusic } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";

const iconList = {
  playback: <IoPlayBackOutline className="h-5 w-5" />,
  close: <AiOutlineCloseCircle className="h-5 w-5" />,
  fastForward: <FiFastForward className="h-5 w-5" />,
  like: <BiHeart className="h-5 w-5" />,
  pause: <BiPauseCircle className="h-8 w-8 sm:h-10 sm:w-10" />,
  play: <BiPlayCircle className="h-8 w-8 sm:h-10 sm:w-10" />,
  next: <FiSkipForward className="h-5 w-5" />,
  previous: <FiSkipBack className="h-5 w-5" />,
  repeat: <BsRepeat1 className="h-5 w-5" />,
  loop: <BsRepeat className="h-5 w-5" />,
  shuffle: <TbArrowsShuffle className="h-5 w-5" />,
  lists: <MdQueueMusic className="h-5 w-5" />,
  bin: <RiDeleteBin5Line className="h-5 w-5" />,
  notification: <IoMdNotificationsOutline className="h-5 w-5" />,
  setting: <AiOutlineSetting className="h-5 w-5" />,
  dot: <BiDotsHorizontalRounded className="h-5 w-5" />,
};

export type IconTypes = keyof typeof iconList;

type IconProps<T> = {
  iconTypes?: IconTypes;
  onClick?: () => void;
  size?: "tiny" | "small" | "normal" | "large";
} & T;

const IconButton = <T,>({
  onClick,
  size = "normal",
  iconTypes = "close",
  ...otherProps
}: IconProps<T>) => {
  const iconSize = {
    tiny: "w-6 h-6",
    small: "w-8 h-8 p-1",
    normal: "w-10 h-10 p-2",
    large: "w-12 h-12 p-3",
  };
  return (
    <button
      onClick={onClick}
      aria-label={iconTypes}
      className={`text-light-200 focus:text-light active:text-light ${iconSize[size]}`}
      {...otherProps}
    >
      {iconList[iconTypes]}
    </button>
  );
};

export default IconButton;
