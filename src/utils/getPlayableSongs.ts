import { Song } from "types";

export default function getPlayableSongs(urls: any[], Songs: Song[]) {
  const playableSongs: Song[] = [];

  urls.forEach((url, index) => {
    if (url.status) {
      Songs[index].mp3Url = url.mp3Url;
      playableSongs.push(Songs[index]);
    }
  });
  return playableSongs;
}
