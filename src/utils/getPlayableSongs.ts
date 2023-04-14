import { Song } from "types";
import getMp3Url from "./getMp3Url";

export default async function getPlayableSongs(songs: Song[]) {
  const urls = await Promise.all(songs.map(async (item: Song) => getMp3Url(item.id, "standard")));
  const playableSongs: Song[] = [];
  urls.forEach((url, index) => {
    if (url.status) {
      songs[index].mp3Url = url.mp3Url;
      playableSongs.push(songs[index]);
    }
  });
  return playableSongs;
}
