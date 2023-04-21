import React from "react";
import Image from "next/image";

const BottomNavBar = () => {
  return (
    <section className="fixed bottom-[0px] h-[72px] w-full border-t transition-all duration-200 ease-in-out md:h-0">
      <div className="relative h-full drop-shadow-bgImgShadow">
        <Image src="/bg_player.png" alt="Player background image" fill />
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full gap-2 bg-dark-400 bg-opacity-80 px-4 py-2 backdrop-blur-2xl">
        <p className="flex items-center text-light">This is the bottom navigation bar.</p>
      </div>
    </section>
  );
};

export default BottomNavBar;
