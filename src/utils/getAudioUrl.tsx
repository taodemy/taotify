export default async function getAudioUrl(id: number, level: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_MUSIC_API}/song/url/v1?id=${id}&level=${level}`
    );
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    const audioUrl = data.data[0].url;
    return audioUrl;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
