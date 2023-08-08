import Albums from "@/components/Albums";
import { MusicList } from "types";
type FeaturedAlbumsProps = {
  albums: MusicList[];
};
const FeaturedAlbums = ({ albums }: FeaturedAlbumsProps) => {
  return <Albums albums={albums}></Albums>;
};
export default FeaturedAlbums;
