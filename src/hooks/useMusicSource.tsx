import React, { useEffect, useState } from "react";

const useMusicSource = (musicId: number, quality: string) => {
  const [musicUrl, setMusicUrl] = useState();
  const getMusicSource = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_MUSIC_SERVER_ADDRESS}/song/url/v1?id=${musicId}&level=${quality}`
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
  }, [musicId]);

  return { getMusicSource, musicUrl };
};

export default useMusicSource;
