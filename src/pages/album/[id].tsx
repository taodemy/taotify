import Detail from "@/components/albumPage";
import Banner from "@/components/albumPage/Banner";
import { AlbumFetchedById } from "@/types/AlbumFetchedById";
import { RootObjectBySongId } from "@/types/SongFetchedById";
import { getAlbumById } from "@/utils/fetchHandler";
import { IMusicContext, MusicList } from "@/types/context";
import {
  getSongsFromAlbums,
  formatMusicContextAndPushToContext,
} from "@/utils/transformFetchedData";

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
  const songObjectById: RootObjectBySongId = await getSongsFromAlbums(songs);
  let musicContext: IMusicContext[] = await formatMusicContextAndPushToContext(
    songObjectById,
    album,
    songs
  );

  const musicList: MusicList = {
    id,
    type: "album",
    musicContext,
  };
  return { props: { musicList } };
}
