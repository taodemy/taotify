import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { sidebarContent } from "./SideBar";
import { iconList } from "./SideBar";

const BottomNavBar = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const menuList = sidebarContent[0].subCategories;

  return (
    <section className="fixed bottom-[0px] h-[72px] w-full border-t transition-all duration-200 ease-in-out md:h-0">
      <div className="relative h-full drop-shadow-bgImgShadow">
        <Image src="/bg_player.png" alt="Player background image" fill />
      </div>
      <div className="absolute top-0 left-0 flex h-full w-full gap-2 bg-dark-400 bg-opacity-80 backdrop-blur-2xl md:hidden">
        <ul className="mx-auto flex text-light-200">
          {menuList.map((menuItem, index) => (
            <Link className="flex" key={index} href={menuItem.path}>
              <li
                className={`flex items-center px-6 ${
                  currentPath === menuItem.path ? "bg-primary" : ""
                }`}
              >
                {iconList[menuItem.label]}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BottomNavBar;
