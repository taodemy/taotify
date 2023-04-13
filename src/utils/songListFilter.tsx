export default function songListFilter(urls: any[], newSongs: Music[]) {
  const newSongsWithUrls: Array<Music> = [];
  urls.forEach((url, index) => {
    if (url.status) {
      newSongs[index].audioUrl = url.audioUrl;
      newSongsWithUrls.push(newSongs[index]);
    }
  });
  return newSongsWithUrls;
}
