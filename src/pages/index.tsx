import FriendsActivity from "../components/FriendsActivity";
import NewReleases from "../components/NewReleases";
import RecentlyPlayed from "../components/RecentlyPlayed";
import MusicList from "../components/MusicList";
import Head from "next/head";
import getNewSongs from "../utils/getNewSongs";
import getAudioUrl from "../utils/getAudioUrl";

type HomeProps = {
  newSongs: Array<Music>;
};

export default function Home({ newSongs }: HomeProps) {
  return (
    <>
      <Head>
        <title>Taotify</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" mt-[100px] ml-[200px]">
        <RecentlyPlayed />
        <FriendsActivity />
        <NewReleases />
        {/* only for music list demo*/}
        <MusicList musicList={newSongs} />
      </main>
    </>
  );
}

export /* istanbul ignore next */ async function getStaticProps() {
  //get recommended new songs
  const newSongs = await getNewSongs();

  const urls = await Promise.all(
    newSongs.map(async (item: Music) => getAudioUrl(item.id, "standard"))
  );

  urls.forEach((url, index) => {
    if (url.status) newSongs[index].audioUrl = url.audioUrl;
  });

  return { props: { newSongs }, revalidate: 600 };
}
