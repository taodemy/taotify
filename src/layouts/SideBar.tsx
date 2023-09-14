import AudioVisualizer from "@/components/visualizer";
import React from "react";

const SideBar = () => {
  return (
    <aside className="fixed bottom-0 top-0 w-0 flex-col bg-black text-white md:flex md:w-[64px] lg:w-[320px]">
      This is the left SideBar
      <AudioVisualizer />
    </aside>
  );
};

export default SideBar;
