import FriendsActivity from "../components/FriendsActivity";
import NewReleases from "../components/NewReleases";
import RecentlyPlayed from "../components/RecentlyPlayed";
import MusicList from "../components/MusicList";
import Head from "next/head";
import getNewSongs from "../utils/getNewSongs";
import getAudioUrl from "../utils/getAudioUrl";

type HomeProps = {
  newSongsWithUrls: Array<Music>;
};

export default function Home({ newSongsWithUrls }: HomeProps) {
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
        <MusicList musicList={newSongsWithUrls} />
      </main>
    </>
  );
}

export /* istanbul ignore next */ async function getStaticProps() {
  const newSongsSet = await getNewSongs();
  if (!newSongsSet.status) return { props: { newSongs: [] }, revalidate: 600 };
  const newSongs = newSongsSet.newSongs;
  const urls = await Promise.all(
    newSongs.map(async (item: Music) => getAudioUrl(item.id, "standard"))
  );
  const newSongsWithUrls: Array<Music> = [];
  urls.forEach((url, index) => {
    if (url.status) {
      newSongs[index].audioUrl = url.audioUrl;
      newSongsWithUrls.push(newSongs[index]);
    }
  });
  return { props: { newSongsWithUrls }, revalidate: 600 };
}
