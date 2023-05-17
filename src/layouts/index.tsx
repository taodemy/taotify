import MusicPlayer from "@/layouts/MusicPlayer";
import SideBar from "@/layouts/SideBar";
import BottomNavBar from "./BottomNavBar";
import { ReactNode } from "react";
import SearchBar from "./SearchBar";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="flex h-screen w-4/5 flex-col bg-dark">
        <div className="grow overflow-y-scroll px-2 [-ms-overflow-style:'none'] [scrollbar-width:'none'] md:px-10 [&::-webkit-scrollbar]:hidden">
          <SearchBar />
          <div className="my-8 h-1/3">This is banner</div>
          {children}
        </div>
        <MusicPlayer />
        <BottomNavBar />
      </div>
    </div>
  );
};
export default Layout;
