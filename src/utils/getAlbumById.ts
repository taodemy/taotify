const getAlbumById = async (id: number) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_MUSIC_API}/album?id=${id}`);
    const detail = await res.json();
    return detail;
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

export default getAlbumById;
