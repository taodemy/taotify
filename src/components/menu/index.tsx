import { SiYoutubemusic } from "react-icons/si";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { MdHomeFilled, MdQueueMusic } from "react-icons/md";
import {
  RiRocket2Fill,
  RiAlbumFill,
  RiHeartLine,
  RiDeleteBinLine,
  RiFolderMusicFill,
} from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { TbClockPlay } from "react-icons/tb";

interface MenuItem {
  icon: React.ReactElement;
  path: string;
}

type MenuList = {
  [key: string]: MenuItem;
};

export const menuList: MenuList = {
  Home: {
    icon: <MdHomeFilled className="h-6 w-6" />,
    path: "/",
  },
  Discover: {
    icon: <RiRocket2Fill className="h-6 w-6" />,
    path: "/discover",
  },
  Albums: {
    icon: <RiAlbumFill className="h-6 w-6" />,
    path: "/albums",
  },
  Artists: {
    icon: <FaUsers className="h-6 w-6" />,
    path: "/artists",
  },
  Videos: {
    icon: <RiFolderMusicFill className="h-6 w-6" />,
    path: "/videos",
  },
};
