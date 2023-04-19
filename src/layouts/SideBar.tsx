import React from "react";
import Logo from "@/components/ui/Logo";
import { GrHomeRounded } from "react-icons/gr";
import { RiRocket2Line } from "react-icons/ri";
import { MdOutlineAlbum } from "react-icons/md";
import { MdMusicVideo } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdQueueMusic } from "react-icons/md";
// import { FontAwesomeIcon } from "react-icons";
import { RiUserVoiceLine} from "react-icons/ri";

export default function SideBar() {
  return (
    <aside className="w-[10vw] h-[100vh] fixed top-0 left-0 border-2 border-dashed border-black">
      <Logo />
      <section className="my-5">
        MENU
        <ul>
          <li>
            <a href="/home" className="flex">
              <GrHomeRounded /> Home
            </a>
          </li>
          <li>
            <a href="/discover" className="flex">
              <RiRocket2Line />
              Discover
            </a>
          </li>
          <li>
            <a href="/albums" className="flex">
              <MdOutlineAlbum />
              Albums
            </a>
          </li>
          <li>
            <a href="/artists" className="flex">
            <RiUserVoiceLine />Artists
            </a>
          </li>
          <li>
            <a href="/videos" className="flex">
              <MdMusicVideo />
              Videos
            </a>
          </li>
        </ul>
      </section>
      <section className="my-5">
        YOUR LIBRARY
        <ul>
          <li>
            <a href="/recent Played" className="flex">
              <RiTimeLine />
              Recent Played
            </a>
          </li>
          <li>
            <a href="/fovorite songs" className="flex">
              <FaRegHeart />
              Fovorite songs
            </a>
          </li>
        </ul>
      </section>
      <section className="my-5">
        <div className="flex">
          PLAYLIST
          <a href="/fovorite songs" className="flex">
            <FaPlus />
          </a>
        </div>
        <div>
          <a href="/fovorite songs" className="flex">
            <MdQueueMusic />
            Top Hit 2023-USA
            <FaRegTrashAlt />
          </a>
        </div>
      </section>
    </aside>
  );
}
