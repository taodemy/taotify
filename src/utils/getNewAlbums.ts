import { Album, AlbumDetail, AlbumDetailSong, Song } from "types";
import getMp3Url from "./getMp3Url";

export default async function getNewAlbums(area: string, limit: number) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_MUSIC_API}/album/new?area=${area}&limit=${limit}`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch ${limit} new albums for ${area}`);
    }
    const data = await res.json();
    const newAlbums = data.albums;

    const albumsDetails = await Promise.all(
      newAlbums.map(async (album: Album) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_MUSIC_API}/album?id=${album.id}`);
        const data = await res.json();
        return data;
      })
    );

    const albums = await Promise.all(
      albumsDetails.map(async (detail: AlbumDetail) => {
        const albumSongs = detail.songs;
        const urls = await Promise.all(
          albumSongs.map(async (song: AlbumDetailSong) => getMp3Url(song.id))
        );

        const songs: Song[] = [];
        urls.forEach((url, index) => {
          if (url.status) {
            const albumSong = albumSongs[index];
            songs.push({
              id: albumSong.id,
              name: albumSong.name,
              album: detail.album,
              artists: albumSong.ar,
              mp3Url: url.mp3Url,
            });
          }
        });
        return { id: detail.album.id, type: "album", songs: songs };
      })
    );

    return albums;
  } catch (error) {
    return [];
  }
}
