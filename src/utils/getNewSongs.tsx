const getNewSongs = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_MUSIC_SERVER_ADDRESS}/personalized/newsong`);

    if (!response.ok) {
      throw new Error(`This is an HTTP error: The status is ${response.status}`);
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.log(error);
  }
};

export default getNewSongs;
