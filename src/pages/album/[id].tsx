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
import { GetServerSideProps } from "next";

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

function parseFunc(id: string) {
  return parseInt(id, 10);
}

export const getServerSideProps: GetServerSideProps = async ({ res, params }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=3600" // 600 seconds for fresh, 3600 seconds for stale and still using but fetch on background
  );
  const paramId = params as { id: string };
  const id = parseFunc(paramId.id);
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
};
