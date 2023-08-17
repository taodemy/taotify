import { musicQuality } from "@/constant/song";
const { STANDARD } = musicQuality;
const getSongsById = async (id: number | number[], level = STANDARD) => {
  if (id) {
    try {
      const url = Array.isArray(id)
        ? `${process.env.NEXT_PUBLIC_MUSIC_API}/song/url/v1?id=${[...id]}&level=${level}`
        : `${process.env.NEXT_PUBLIC_MUSIC_API}/song/url/v1?id=${id}&level=${level}`;
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
    return { error: "no valid id" };
  }
};

export default getSongsById;
