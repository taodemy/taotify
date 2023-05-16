import { NewSong, NewSongResult, Song } from "../../types";

import getMp3Url from "./getMp3Url";

export default async function getNewSongs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_MUSIC_API}/personalized/newsong`);
    if (!res.ok) {
      throw new Error("Failed to fetch new songs");
    }
    const data = await res.json();
    const newSongs = data.result.map((newSongResult: NewSongResult) => newSongResult.song);
    const urls = await Promise.all(
      newSongs.map(async (newSong: NewSong) => getMp3Url(newSong.id, "standard"))
    );
    const songs: Song[] = [];
    urls.forEach((url, index) => {
      if (url.status) {
        const newSong = newSongs[index];
        songs.push({
          id: newSong.id,
          name: newSong.name,
          album: newSong.album,
          artists: newSong.artists,
          mp3Url: url.mp3Url,
        });
      }
    });
    return { songs: songs, status: true };
  } catch (error) {
    return { songs: [], status: false };
  }
}
