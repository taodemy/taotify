import React from "react";
import { SiYoutubemusic } from "react-icons/si";
import { FaEllipsisH } from "react-icons/fa";
const Logo = () => {
  return (
    <div className="flex justify-between">
      <section className="flex">
        <SiYoutubemusic />
        <h3>Taotify</h3>
      </section>
      <FaEllipsisH />
    </div>
  );
};

export default Logo;
