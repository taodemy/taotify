import FriendsActivity from "../components/FriendsActivity";
import NewReleases from "../components/NewReleases";
import RecentlyPlayed from "../components/RecentlyPlayed";
import ListPage from "../components/ListPage";
import Head from "next/head";
import getNewSongs from "../utils/getNewSongs";
import { MusicList } from "types";
import getNewAlbums from "@/utils/getNewAlbums";
import Albums from "@/components/Albums";

type HomeProps = {
  // newSongsList: MusicList;
  newAlbums: MusicList[];
};

export default function Home({ newAlbums }: HomeProps) {
  return (
    <>
      <Head>
        <title>Taotify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecentlyPlayed />
      <FriendsActivity />
      <NewReleases />
      <Albums albums={newAlbums} />
      {/* <ListPage musicList={newSongsList} /> */}
    </>
  );
}

export /* istanbul ignore next */ async function getStaticProps() {
  // const newSongsRes = await getNewSongs();
  // const newSongsList = {
  //   id: 0,
  //   type: "newSongs",
  //   songs: newSongsRes.status ? newSongsRes.songs : [],
  // };

  const newAlbumsEA = await getNewAlbums("EA", 2);
  const newAlbumsJP = await getNewAlbums("JP", 2);
  const newAlbumsKR = await getNewAlbums("KR", 1);
  const newAlbumsZH = await getNewAlbums("ZH", 2);
  const newAlbums = [...newAlbumsEA, ...newAlbumsJP, ...newAlbumsKR, ...newAlbumsZH];

  return {
    props: { newAlbums },
    revalidate: 600,
  };
}
