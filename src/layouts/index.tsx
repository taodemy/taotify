import MusicPlayer from "@/layouts/MusicPlayer";
import SearchBar from "@/layouts/SearchBar";
import SideBar from "@/layouts/SideBar";
import BottomNavBar from "./BottomNavBar";
import { ReactNode } from "react";
import { VolumeContextProvider } from "@/contexts/VolumeContext";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen w-screen">
      <SideBar />
      <div className="flex h-full w-full flex-col md:w-[calc(100vw-64px)] lg:w-[calc(100vw-320px)]">
        <SearchBar />
        <main className="mb-[150px] h-[calc(100vh-150px)] w-full bg-dark px-2 md:mb-[120px] md:h-[calc(100vh-120px)] md:px-10">
          {children}
        </main>
        <VolumeContextProvider>
          <MusicPlayer />
        </VolumeContextProvider>
        <BottomNavBar />
      </div>
    </div>
  );
};
export default Layout;
