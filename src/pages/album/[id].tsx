import Detail from "@/components/albumPage";
import Banner from "@/components/albumPage/Banner";
import getAlbumById from "@/utils/getAlbumById";
import getSongsById from "@/utils/getSongsById";
import { AlbumDetailSong, Song, MusicList, SongFetchById } from "types";

type AlbumDetailProps = {
  musicList: MusicList;
};

const AlbumDetail = ({ musicList }: AlbumDetailProps) => {
  return (
    <>
      {musicList && <Banner musicList={musicList} id={musicList.id} />}
      <div className="text-light">{musicList && <Detail musicList={musicList} />}</div>
    </>
  );
};
export default AlbumDetail;

type SsrProps = {
  params: { id: number };
};
export async function getServerSideProps(context: SsrProps) {
  const { id } = context.params;

  const albumData = await getAlbumById(id);
  const { album, songs } = albumData;
  const albumSongIds = songs.map((song: AlbumDetailSong) => song.id);
  const songArray = await getSongsById(albumSongIds);

  let songsDetail: Song[] = [];

  songArray.data.map((songDetail: SongFetchById, index: number) => {
    songsDetail = [
      ...songsDetail,
      {
        id: songs[index].id, //这里要吧songId放进来
        name: songs[index].name,
        album,
        artists: album.artists,
        mp3Url: songDetail.url,
        time: songDetail.time,
      },
    ];
  });
  const musicList = { id, songs: songsDetail, type: "album" };
  return { props: { musicList } };
}
