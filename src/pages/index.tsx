import Head from "next/head";
import { useEffect } from "react";
import { getAlbum } from "@/utils/fetchHandler";
import Carousel from "@/components/carousel";
import AlbumsCollection from "@/components/AlbumsCollection";
import { AlbumsCollectionProps } from "@/components/AlbumsCollection";
import { ALL_REGIONS, CHINESE, KOREAN, JAPANESE, ENGLISH } from "@/constant/genres";

export default function Home({ albums }: AlbumsCollectionProps) {
  useEffect(() => {
    const defaultStoredPlaylists = localStorage.getItem("playlists");

    if (!defaultStoredPlaylists) {
      const defaultPlaylists = {
        favourites: [],
      };

      localStorage.setItem("playlists", JSON.stringify(defaultPlaylists));
    }
  }, []);

  const { englishAlbum } = albums;
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
      <Carousel albums={englishAlbum} />
      <AlbumsCollection albums={albums} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const promises = [
      getAlbum({
        area: ALL_REGIONS,
        limit: 14,
      }),
      getAlbum({ area: ENGLISH, limit: 14 }),
      getAlbum({ area: KOREAN, limit: 14 }),
      getAlbum({ area: CHINESE, limit: 14 }),
      getAlbum({ area: JAPANESE, limit: 14 }),
    ];

    const [featureAlbum, englishAlbum, koreanAlbum, chineseAlbum, japanAlbum] = await Promise.all(
      promises
    );

    const albums = {
      featureAlbum,
      englishAlbum,
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
