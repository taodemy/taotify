import Albums from "@/components/Albums";
import { IoIosArrowForward } from "react-icons/io";
import { MusicList } from "@/types/context";
type FeaturedAlbumsProps = {
  albums: MusicList[];
};
const FeaturedAlbums = ({ albums }: FeaturedAlbumsProps) => {
  return (
    <div className="mt-8">
      <div className="mb-8">
        <div className="flex max-w-[200px] cursor-pointer text-2xl text-light">
          <span>Top Music</span>
          <span>
            <IoIosArrowForward />
          </span>
        </div>
        <p className="text-sm text-light-200">American</p>
      </div>
      <Albums albums={albums} />
    </div>
  );
};
export default FeaturedAlbums;
