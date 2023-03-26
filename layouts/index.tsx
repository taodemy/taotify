import MusicPlayer from "layouts/MusicPlayer";
import SearchBar from "layouts/SearchBar";
import SideBar from "layouts/SideBar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <SideBar />
      <SearchBar />
      <main>{children}</main>
      <MusicPlayer />
    </div>
  );
};
export default Layout;
