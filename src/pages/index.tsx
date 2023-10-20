import Head from "next/head";
import { MusicList } from "@/types/context";
import getNewAlbums from "@/utils/getNewAlbums";
import Carousel from "@/components/carousel";
import AlbumsCollection from "@/components/AlbumsCollection";

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
      <AlbumsCollection albums={newAlbums} />
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
