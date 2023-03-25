import FriendsActivity from "components/FriendsActivity";
import NewReleases from "components/NewReleases";
import RecentlyPlayed from "components/RecentlyPlayed";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Taotify</title>
        <meta name="description" content="Generated by Taotify" />
      </Head>
      <main className=" mt-[10vh] ml-[20vw] border-2 border-dashed border-black">
        <RecentlyPlayed />
        <FriendsActivity />
        <NewReleases />
      </main>
    </>
  );
}
