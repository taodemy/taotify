export default async function getNewSongs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_MUSIC_API}/personalized/newsong`);
  const data = await res.json();
  let newSongs = data.result.map((item: NewSong) => ({
    id: item.id,
    name: item.song.name,
    artist: item.song.artists[0].name,
    album: item.song.album.name,
    picUrl: item.picUrl,
    audioUrl: "",
  }));
  return newSongs;
}
