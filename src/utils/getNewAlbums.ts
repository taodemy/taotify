import { IMusicContext, MusicList, SongInContext } from "@/types/context";
import getAlbumById from "./getAlbumById";
import { TopAlbumObject } from "@/types/TopAlbums";
import { AlbumFetchedById } from "@/types/AlbumFetchedById";
import getSongsById from "./getSongsById";
import { RootObjectBySongId, SongFetchedById } from "@/types/SongFetchedById";

export default async function getNewAlbums(area: string, limit: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_MUSIC_API}/album/new?area=${area}&limit=${limit}`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch ${limit} new albums for ${area}`);
    }
    const data: TopAlbumObject = await res.json();
    const newAlbums = data.albums;

    const albumsDetails: AlbumFetchedById[] = await Promise.all(
      newAlbums.map(async (album) => getAlbumById(album.id))
    );

    const albumArray = await Promise.all(
      albumsDetails.map(async (detail) => {
        const { songs, album } = detail;
        const albumSongIdArray = songs.map((song) => song.id);
        const songObjectById: RootObjectBySongId = await getSongsById(albumSongIdArray);
        let musicContext: IMusicContext[] = [];
        songObjectById.data.map((songDetail: SongFetchedById, index: number) => {
          const albumInContext = {
            name: album.name,
            id: album.id,
            mark: album.mark,
            image: album.picUrl,
          };

          const artistInContext = {
            name: album.artist.name,
            id: album.artist.id,
            image: album.artist.picUrl,
          };

          const songInContext = {
            id: songs[index].id,
            name: songs[index].name,
            mp3Url: songDetail.url,
            time: songDetail.time,
            image: album?.blurPicUrl,
          };
          musicContext = [
            ...musicContext,
            {
              song: songInContext,
              album: albumInContext,
              artist: artistInContext,
            },
          ];
        });
        const musicList: MusicList = {
          id: album.id,
          type: "album",
          musicContext,
        };

        return musicList;
      })
    );
    return albumArray;
  } catch (error) {
    console.log(JSON.stringify(error));
    return [];
  }
}
