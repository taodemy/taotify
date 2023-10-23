import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MusicContext } from "@/contexts/MusicContext";
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

interface SidebarCategory {
  label: string;
  subCategories: SidebarMenuItem[];
}

interface SidebarMenuItem {
  id?: string;
  label: string;
  path: string;
}

export const sidebarContent = [
  {
    label: "MENU",
    subCategories: [
      {
        label: "Home",
        path: "/",
      },
      {
        label: "Discover",
        path: "/discover",
      },
      {
        label: "Albums",
        path: "/albums",
      },
      {
        label: "Artists",
        path: "/artists",
      },
      {
        label: "Videos",
        path: "/videos",
      },
    ],
  },
  {
    label: "YOUR LIBRARY",
    subCategories: [
      {
        label: "Recently Played",
        path: "/recently-played",
      },
      {
        label: "Favourite Songs",
        path: "/favourite-songs",
      },
    ],
  },
  {
    label: "PLAYLISTS",
    subCategories: [
      {
        id: "1",
        label: "Top Hit 2023 - USA",
        path: `/playlist`,
      },
      {
        id: "2",
        label: "Top Hit 2023 - USB",
        path: "/playlist",
      },
      {
        id: "3",
        label: "Top Hit 2023 - USC",
        path: "/playlist",
      },
    ],
  },
];

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
  Plus: <FiPlus className="w-[14px h-[14px]" />,
  Delete: <RiDeleteBinLine className="h-4 w-4" />,
};

const RenderSidebarItems = (category: SidebarCategory) => {
  const router = useRouter();
  const isPlaylistsCategory = category.label === "PLAYLISTS";
  return (
    <div key={category.label}>
      <div className="invisible mb-8 mt-[54px] flex items-center text-light-200 lg:visible lg:ml-[36px] lg:gap-[146px]">
        <p className="text-primary-100 lg:inline-block lg:whitespace-nowrap">{category.label}</p>
        <div className="hidden h-6 w-6 items-center justify-center hover:text-light lg:flex">
          {isPlaylistsCategory && iconList["Plus"]}
        </div>
      </div>
      <ul className="flex flex-col gap-8 font-roboto text-lg text-light-200">
        {category.subCategories.map((menuItem, subIndex) => (
          <Link
            key={subIndex}
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
              <div className="hidden h-6 w-6 items-center justify-center hover:text-light lg:flex">
                {isPlaylistsCategory && iconList["Delete"]}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

const SideBar = () => {
  const { selectedAlbum } = useContext(MusicContext);
  const musicContext = selectedAlbum?.musicContext;

  return (
    <aside>
      {musicContext && (
        <div className="relative h-full drop-shadow-bgImgShadow">
          <img src={musicContext[0]?.artist?.image} alt="Sidebar artist image" />
        </div>
      )}
      <div className="fixed top-0 bottom-0 hidden flex-col bg-dark-400 bg-opacity-80 text-white backdrop-blur-2xl md:flex md:w-[64px] lg:w-[320px]">
        <div className="mt-8 flex items-center justify-center gap-2 font-roboto lg:ml-[36px] lg:justify-start">
          {iconList["musicPlayer"]}
          <h2 className="hidden lg:block">Taotify</h2>
          {iconList["more"]}
        </div>
        <div className="overflow-y-auto overflow-x-hidden pb-12">
          {sidebarContent.map((category, index) => RenderSidebarItems(category))}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
