import { IoPlayBackOutline } from "react-icons/io5";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiPlayCircle, BiPauseCircle, BiHeart } from "react-icons/bi";
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
};

export type IconTypes = keyof typeof iconList;

type IconProps = {
  iconTypes?: IconTypes;
  onClick?: () => void;
};

const IconButton = ({ onClick, iconTypes = "close" }: IconProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={iconTypes}
      className="text-light-200 focus:text-light active:text-light"
    >
      {iconList[iconTypes]}
      <span className="hidden sm:block"></span>
    </button>
  );
};

export default IconButton;
