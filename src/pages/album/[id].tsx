import Detail from "@/components/albumPage";
import Banner from "@/components/albumPage/Banner";
import { AlbumFetchedById } from "@/types/AlbumFetchedById";
import { RootObjectBySongId, SongFetchedById } from "@/types/SongFetchedById";
import { getAlbumById } from "@/utils/fetchHandler";
import { getSongsById } from "@/utils/fetchHandler";
import { IMusicContext, MusicList, SongInContext } from "@/types/context";

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

  const albumData: AlbumFetchedById = await getAlbumById({ albumId: id });
  const { album, songs } = albumData;
  const albumSongIds = songs.map((song) => song.id);
  const songObjectById: RootObjectBySongId = await getSongsById({ songId: albumSongIds });

  let musicContext: IMusicContext[] = [];

  songObjectById.data.map((songDetail: SongFetchedById, index: number) => {
    const albumInContext = {
      name: album.name,
      id: album.id,
      mark: album.mark,
      image: album.picUrl,
    };

    const artistInContext = {
      name: album.artist.name,
      id: album.artist.id,
      image: album.artist.picUrl,
    };

    const songInContext = {
      id: songs[index].id,
      name: songs[index].name,
      mp3Url: songDetail.url,
      time: songDetail.time,
      image: album?.blurPicUrl,
    };
    musicContext = [
      ...musicContext,
      {
        song: songInContext,
        album: albumInContext,
        artist: artistInContext,
      },
    ];
  });
  const musicList: MusicList = {
    id,
    type: "album",
    musicContext,
  };
  return { props: { musicList } };
}
