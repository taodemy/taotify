import React, { useContext } from "react";
import { MusicContext } from "@/contexts/MusicContext";
import { iconList } from "@/components/sidebar/SidebarItem";
import RenderSidebarItems from "@/components/sidebar/SidebarItems";

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
          {sidebarContent.map((category) => RenderSidebarItems(category))}
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
