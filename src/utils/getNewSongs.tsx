const getNewSongs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_MUSIC_SERVER_ADDRESS}/personalized/newsong`);
    const data = await res.json();
    const musicData = data.result.map((song) => ({
      id: song.song.id,
      name: song.name,
      artist: song.song.artists,
      album: song.song.album,
      picUrl: song.picUrl,
      musicUrl: "",
    }));
    return musicData;
  } catch (error) {
    console.log(error);
  }
};

export default getNewSongs;
