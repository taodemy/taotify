import Head from "next/head";
import { MusicList } from "@/types/context";
import getNewAlbums from "@/utils/getNewAlbums";
import Carousel from "@/components/carousel";
import FeaturedAlbums from "@/components/featuredAlbums";
import TopMusicAlbums from "@/components/topMusicAlbums";

type HomeProps = {
  newAlbums: MusicList[];
};

export default function Home({ newAlbums }: HomeProps) {
  return (
    <>
      <Head>
        <title>Taotify</title>
        <meta
          name="description"
          content="Discover, Play, and Enjoy Your Favorite Music with Taotify - Your Ultimate Music Companion"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel albums={newAlbums} />
      <FeaturedAlbums albums={newAlbums.slice(0, 7)} />
      <TopMusicAlbums albums={newAlbums.slice(7)} />
    </>
  );
}

export /* istanbul ignore next */ async function getStaticProps() {
  const newAlbums = await getNewAlbums("EA", 14);
  return {
    props: { newAlbums },
    revalidate: 600,
  };
}
