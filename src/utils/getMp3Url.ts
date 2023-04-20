export default async function getMp3Url(id: number, level: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_MUSIC_API}/song/url/v1?id=${id}&level=${level}`
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch song url for id: ${id}`);
    }
    const data = await res.json();
    const mp3Url = data.data[0].url;
    return { mp3Url, status: true };
  } catch (error) {
    return { mp3Url: "", status: false };
  }
}
