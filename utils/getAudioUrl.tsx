export default async function getAudioUrl(id: number, level: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_MUSIC_API}/song/url/v1?id=${id}&level=${level}`
  );
  const data = await res.json();
  const audioUrl = data.data[0].url;
  return audioUrl;
}
