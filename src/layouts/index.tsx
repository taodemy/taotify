import MusicPlayer from "@/layouts/MusicPlayer";
import SearchBar from "@/layouts/SearchBar";
import SideBar from "@/layouts/SideBar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen w-screen">
      <SideBar />
      <div className="flex h-full w-[calc(100vw-320px)] flex-col">
        <SearchBar />
        <main className="mb-[120px] h-[calc(100vh-120px)] w-full">{children}</main>
        <MusicPlayer />
      </div>
    </div>
  );
};
export default Layout;
