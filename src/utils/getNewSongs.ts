import { NewSong } from "../../types";

export default async function getNewSongs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_MUSIC_API}/personalized/newsong`);
    if (!res.ok) {
      throw new Error("Failed to fetch new songs");
    }
    const data = await res.json();
    const newSongs = data.result.map((item: NewSong) => item.song);

    return { newSongs: newSongs, status: true };
  } catch (error) {
    return { newSongs: [], status: false };
  }
}
