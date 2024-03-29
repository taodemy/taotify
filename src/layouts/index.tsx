import SearchBar from "@/layouts/SearchBar";
import SideBar from "@/layouts/SideBar";
import BottomNavBar from "./BottomNavBar";
import { ReactNode } from "react";
import { AudioContextProvider } from "@/contexts/AudioContext";
import { GlobalContextProvider } from "@/contexts/GlobalContext";
import MusicPlayer from "@/components/player/MusicPlayer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="relative font-roboto">
        <GlobalContextProvider>
          <SideBar />
          <main className="fixed bottom-0 top-0 flex w-full flex-col overflow-y-auto bg-dark px-2 md:left-[64px] md:w-[calc(100vw-64px)] md:px-6 lg:left-[320px] lg:w-[calc(100vw-320px)] lg:px-10">
            <SearchBar />
            <div className="mb-32 flex w-full flex-col">{children}</div>
          </main>
          <AudioContextProvider>
            <MusicPlayer />
          </AudioContextProvider>
          <BottomNavBar />
        </GlobalContextProvider>
      </div>
    </>
  );
};
export default Layout;
