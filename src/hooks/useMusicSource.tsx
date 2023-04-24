import { useEffect, useState } from "react";

/* istanbul ignore next */ const useMusicSource = (musicId: number, quality: string) => {
  const [musicUrl, setMusicUrl] = useState();
  const getMusicSource = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_MUSIC_API}/song/url/v1?id=${musicId}&level=${quality}`
      );
      if (!response.ok) {
        throw new Error(`This is an HTTP error: The status is ${response.status}`);
      }
      let result = await response.json();
      let url = result.data[0].url;
      setMusicUrl(url);
      return url;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMusicSource();
  }, [musicId, quality]);

  return { musicUrl };
};

export default useMusicSource;
