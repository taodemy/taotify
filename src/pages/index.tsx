import FriendsActivity from "components/FriendsActivity";
import NewReleases from "components/NewReleases";
import RecentlyPlayed from "components/RecentlyPlayed";
import MusicList from "components/MusicList";
import Head from "next/head";
import getNewSongs from "utils/getNewSongs";
import getAudioUrl from "utils/getAudioUrl";

type HomeProps = {
  newSongs: Array<Song>;
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
        <MusicList list={newSongs} />
      </main>
    </>
  );
}

//get songs for music list by ISR
export async function getStaticProps() {
  //get recommended new songs
  let newSongs = await getNewSongs();
  //get audio url for each song

  // for (let song of newSongs) {
  //   song.audioUrl = await getAudioUrl(song.id, "standard");
  // }

  //should use concurrent? not much faster I feel
  const urls = await Promise.all(
    newSongs.map(async (item: Song) => getAudioUrl(item.id, "standard"))
  );
  for (let i = 0; i < newSongs.length; i++) {
    newSongs[i].audioUrl = urls[i];
  }

  return { props: { newSongs }, revalidate: 600 };
}
