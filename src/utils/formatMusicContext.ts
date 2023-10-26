import { AlbumDetailById } from "@/types/AlbumFetchedById";
import { SongFetchedById } from "@/types/SongFetchedById";
import { IMusicContext } from "@/types/context";

interface SongInAlbum {
  id: number;
  name: string;
}

export default function formatMusicContext(
  album: AlbumDetailById,
  songs: SongInAlbum[],
  songDetail: SongFetchedById,
  index: number
) {
  const albumInContext: IMusicContext["album"] = {
    id: album.id,
    mark: album.mark,
    name: album.name,
    image: album.picUrl,
  };

  const artistInContext: IMusicContext["artist"] = {
    name: album.artist.name,
    id: album.artist.id,
    image: album.artist.picUrl,
  };

  const songInContext: IMusicContext["song"] = {
    id: songs[index].id,
    name: songs[index].name,
    mp3Url: songDetail.url,
    time: songDetail.time,
    image: album.blurPicUrl || "",
  };

  return { albumInContext, artistInContext, songInContext };
}
