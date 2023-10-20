import AudioVisualizer from "@/components/visualizer";
import React, { useContext } from "react";
import Link from "next/link";
import { MusicContext } from "@/contexts/MusicContext";
import { SiYoutubemusic } from "react-icons/si";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { MdQueueMusic } from "react-icons/md";
import { RiHeartLine, RiDeleteBinLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { TbClockPlay } from "react-icons/tb";
import { menuList } from "@/components/menu";

const SideBar = () => {
  const { selectedAlbum } = useContext(MusicContext);
  const musicContext = selectedAlbum?.musicContext;
  const currentPath = window.location.pathname;

  return (
    <aside>
      {musicContext && (
        <div className="relative h-full drop-shadow-bgImgShadow">
          <img src={musicContext[0]?.artist?.image} alt="Sidebar artist image" />
        </div>
      )}
      <div className="fixed bottom-0 top-0 hidden flex-col bg-dark-400 bg-opacity-80 text-white backdrop-blur-2xl md:flex md:w-[64px] lg:w-[320px]">
        <div className="mt-8 flex items-center justify-center gap-2 font-roboto lg:ml-[36px] lg:justify-start">
          <SiYoutubemusic className="h-10 w-10" />
          <h2 className="hidden lg:block">Taotify</h2>
          <IoEllipsisHorizontalSharp className="ml-[63px] hidden h-8 w-8 lg:block" />
        </div>
        <div className="flex flex-col overflow-auto font-roboto text-lg lg:items-start">
          <p className="invisible mb-8 mt-[54px] text-primary-100 lg:visible lg:ml-[36px]">MENU</p>
          {
            <ul className="flex w-full flex-col gap-8 font-roboto text-lg text-light-200">
              {Object.keys(menuList).map((menuItem, index) => (
                <Link className="flex w-full" key={index} href={menuList[menuItem].path}>
                  <div
                    className={`h-8 w-2 ${currentPath === menuList[menuItem].path && "bg-primary"}`}
                  ></div>
                  <li className={`flex w-full items-center`}>
                    <div
                      className={`${
                        currentPath === menuList[menuItem].path &&
                        "bg-gradient-to-r from-primary to-transparent"
                      } flex h-full items-center pl-3 pr-5 lg:pl-6`}
                    >
                      {menuList[menuItem].icon}
                    </div>
                    <p className="hidden lg:block">{menuItem}</p>
                  </li>
                </Link>
              ))}
            </ul>
          }
          <p className="invisible mt-12 mb-8 text-primary-100 lg:visible lg:ml-[36px] ">
            YOUR LIBRARY
          </p>
          <div className="flex flex-col items-center gap-8 font-roboto text-lg text-light-200 lg:ml-[36px]">
            <div className="flex items-center gap-4">
              <TbClockPlay className="h-6 w-6" />
              <Link className="hidden lg:block" href="/recently-played">
                Recently Played
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <RiHeartLine className="h-6 w-6" />
              <Link className="hidden lg:block" href="/favourite-songs">
                Favourite songs
              </Link>
            </div>
          </div>
          <div className="mt-12 mb-8 flex items-center gap-[146px] lg:ml-[36px] ">
            <p className="invisible text-primary-100 lg:visible">PlAYLISTS</p>
            <FiPlus className="h-6 w-6" />
          </div>
          <div className="flex flex-col items-center gap-8 pb-12 font-roboto text-lg text-light-200 lg:ml-[36px]">
            {Array.from({ length: 3 }).map((_, index) => (
              <Link key={index} className="flex items-center" href="/playlist">
                <MdQueueMusic className="h-6 w-6" />
                <p className="ml-4 mr-[51px] hidden lg:block">Top Hit 2023 - USA</p>
                <RiDeleteBinLine className="hidden h-6 w-6 lg:block" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
