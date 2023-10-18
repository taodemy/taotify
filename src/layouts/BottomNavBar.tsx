import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { menuList } from "@/components/menu";

const BottomNavBar = () => {
  const currentPath = window.location.pathname;

  return (
    <section className="fixed bottom-[0px] h-[72px] w-full border-t transition-all duration-200 ease-in-out md:h-0">
      <div className="relative h-full drop-shadow-bgImgShadow">
        <Image src="/bg_player.png" alt="Player background image" fill />
      </div>
      <div className="absolute top-0 left-0 flex h-full w-full gap-2 bg-dark-400 bg-opacity-80 backdrop-blur-2xl md:hidden">
        {
          <ul className="mx-auto flex text-light-200">
            {Object.keys(menuList).map((menuItem, index) => (
              <Link className="flex" key={index} href={menuList[menuItem].path}>
                <li
                  className={`flex items-center px-6 ${
                    currentPath === menuList[menuItem].path && "bg-primary"
                  }`}
                >
                  {menuList[menuItem].icon}
                </li>
              </Link>
            ))}
          </ul>
        }
      </div>
    </section>
  );
};

export default BottomNavBar;
