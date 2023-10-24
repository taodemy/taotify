import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { SiYoutubemusic } from "react-icons/si";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { TbClockPlay } from "react-icons/tb";
import { MdHomeFilled, MdQueueMusic } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import {
  RiRocket2Fill,
  RiAlbumFill,
  RiFolderMusicFill,
  RiHeartLine,
  RiDeleteBinLine,
} from "react-icons/ri";

export interface SidebarMenuItem {
  id?: string;
  label: string;
  path: string;
}

interface RenderSidebarItemProps {
  isPlaylistsCategory: boolean;
  menuItem: SidebarMenuItem;
}

export const iconList: Record<string, React.ReactNode> = {
  musicPlayer: <SiYoutubemusic className="h-10 w-10" />,
  more: <IoEllipsisHorizontalSharp className="ml-[63px] hidden h-8 w-8 lg:block" />,
  Home: <MdHomeFilled className="h-6 w-6" />,
  Discover: <RiRocket2Fill className="h-6 w-6" />,
  Albums: <RiAlbumFill className="h-6 w-6" />,
  Artists: <FaUsers className="h-6 w-6" />,
  Videos: <RiFolderMusicFill className="h-6 w-6" />,
  "Recently Played": <TbClockPlay className="h-6 w-6" />,
  "Favourite Songs": <RiHeartLine className="h-6 w-6" />,
  playlist: <MdQueueMusic className="h-6 w-6" />,
  Plus: <FiPlus className="h-4 w-4" />,
  Delete: <RiDeleteBinLine className="h-4 w-4" />,
};

export const RenderSidebarItem: React.FC<RenderSidebarItemProps> = ({
  isPlaylistsCategory,
  menuItem,
}) => {
  const router = useRouter();
  return (
    <Link
      href={isPlaylistsCategory ? `${menuItem.path}/${menuItem.id}` : menuItem.path}
      className="group flex items-center"
    >
      <div
        className={`h-8 w-2 ${
          router.asPath.split("?")[0] ===
          (isPlaylistsCategory ? `${menuItem.path}/${menuItem.id}` : menuItem.path)
            ? "bg-primary"
            : ""
        }`}
      ></div>
      <div
        className={`flex h-8 items-center pl-4 pr-5 group-hover:text-light group-focus:text-light lg:ml-0 lg:pl-6 ${
          router.asPath.split("?")[0] ===
          (isPlaylistsCategory ? `${menuItem.path}/${menuItem.id}` : menuItem.path)
            ? "bg-gradient-to-r from-primary to-transparent"
            : ""
        }`}
      >
        {isPlaylistsCategory ? iconList["playlist"] : iconList[menuItem.label]}
      </div>
      <li className="flex items-center lg:gap-[51px]">
        <p className="hidden group-hover:text-light group-focus:text-light lg:block">
          {menuItem.label}
        </p>
        <div className="hidden h-6 w-6 items-center justify-center text-light-100 hover:text-light lg:flex">
          {isPlaylistsCategory && iconList["Delete"]}
        </div>
      </li>
    </Link>
  );
};
