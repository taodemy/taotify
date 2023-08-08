import SearchBar from "@/layouts/SearchBar";
import SideBar from "@/layouts/SideBar";
import BottomNavBar from "./BottomNavBar";
import { ReactNode } from "react";
import { VolumeContextProvider } from "@/contexts/VolumeContext";
import MusicPlayer from "@/components/player/MusicPlayer";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative">
      <SideBar />
      <main className="fixed top-0 bottom-0 flex flex-col overflow-y-auto bg-dark p-4 md:left-[64px] md:w-[calc(100vw-64px)] lg:left-[320px] lg:w-[calc(100vw-320px)]">
        <SearchBar />
        <div className="mb-28 flex w-full flex-col lg:mb-20">{children}</div>
      </main>
      <VolumeContextProvider>
        <MusicPlayer />
      </VolumeContextProvider>
      <BottomNavBar />
    </div>
  );
};
export default Layout;
