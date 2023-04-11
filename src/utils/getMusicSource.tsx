const getMusicSource = async (musicId: Number, quality: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_MUSIC_SERVER_ADDRESS}/song/url/v1?id=${musicId}&level=${quality}`
    );
    if (response.status === 200) {
      let result = await response.json();
      let url = result.data[0].url;
      return url;
    }
  } catch (error) {
    console.log(error);
  }
};

export default getMusicSource;
