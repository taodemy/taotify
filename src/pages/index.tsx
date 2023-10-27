import Head from "next/head";
import { MusicList } from "@/types/context";
import { getAlbum } from "@/utils/fetchHandler";
import Carousel from "@/components/carousel";
import AlbumsCollection from "@/components/AlbumsCollection";
import { AlbumsCollectionProps } from "@/components/AlbumsCollection";

export default function Home({ albums }: AlbumsCollectionProps) {
  const { westernAlbum } = albums;
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
      <Carousel albums={westernAlbum.slice(7)} />
      <AlbumsCollection albums={albums} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const promises = [
      getAlbum({ area: "ALL", limit: 14 }),
      getAlbum({ area: "EA", limit: 14 }),
      getAlbum({ area: "KR", limit: 14 }),
      getAlbum({ area: "ZH", limit: 14 }),
      getAlbum({ area: "JP", limit: 14 }),
    ];

    const [featureAlbum, westernAlbum, koreanAlbum, chineseAlbum, japanAlbum] = await Promise.all(
      promises
    );

    const albums = {
      featureAlbum,
      westernAlbum,
      chineseAlbum,
      koreanAlbum,
      japanAlbum,
    };

    return {
      props: { albums },
      revalidate: 600,
    };
  } catch (error) {
    console.error(error);
    return {
      props: { albums: {} },
      revalidate: 600,
    };
  }
}
