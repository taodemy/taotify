import { TopAlbumObject } from "@/types/TopAlbums";
import { transformFetchedData } from "./transformFetchedData";
import { AlbumRootObject, SearchedAlbumInContext } from "@/types/SearchTypes";
import { ArtistInContext, IMusicContext, MusicList, SongInContext } from "@/types/context";

interface fetchParamProps {
  area?: string;
  limit?: number;
  albumId?: number;
  songId?: number | number[];
  level?: string;
  type?: number;
  keywords?: string;
}

function fetchUrlGenerator(props: fetchParamProps) {
  const baseUrl = process.env.NEXT_PUBLIC_MUSIC_API;
  const { area, limit, albumId, songId, level, type, keywords } = props;
  return area && limit
    ? `${baseUrl}/album/new?area=${area}&limit=${limit}`
    : albumId
    ? `${baseUrl}/album?id=${albumId}`
    : type && keywords && limit
    ? `${baseUrl}/search?keywords=${keywords}&type=${type}&limit=${limit}`
    : Array.isArray(songId)
    ? `${baseUrl}/song/url/v1?id=${[...songId]}&level=${level}`
    : `${baseUrl}/song/url/v1?id=${songId}&level=${level}`;
}

function returnFetchError(props: fetchParamProps) {
  const { area, limit, albumId, type, keywords } = props;
  return area && limit
    ? `Failed to fetch ${limit} new albums for ${area}`
    : type && keywords
    ? `Failed to search ${keywords} for ${type}`
    : albumId
    ? `No album found by albumId`
    : `No song is found by SongId`;
}

export async function fetchHandler(props: fetchParamProps) {
  try {
    const fetchUrl = fetchUrlGenerator(props);
    const res = await fetch(fetchUrl);
    if (!res.ok) {
      throw new Error(returnFetchError(props));
    }
    return res.json();
  } catch (error) {
    console.log(JSON.stringify(error));
  }
}

export async function getAlbum(props: fetchParamProps) {
  const { area, limit } = props;
  const fetchedData: TopAlbumObject = await fetchHandler({ area, limit });
  return await transformFetchedData(fetchedData);
}

export async function getSearchedAlbums(props: fetchParamProps) {
  const { keywords, type, limit } = props;
  const fetchedResData: AlbumRootObject = await fetchHandler({ keywords, type, limit });
  console.log(fetchedResData.result.albums);
  let musicContext: IMusicContext[] = [];
  let musicList = {} as MusicList;
  const searchedAlbumsDetail = await Promise.all(
    fetchedResData.result.albums.map((detail) => {
      const { id, name, artists, picUrl } = detail;
      const artistName = artists[0].name;
      const image = picUrl;
      const musicContextItem: IMusicContext = {
        album: { id, name, image, artistName } as SearchedAlbumInContext,
        artist: {} as ArtistInContext,
        song: {} as SongInContext,
      };
      musicContext = [musicContextItem];
      return (musicList = {
        id: id,
        type: "album",
        musicContext,
      });
    })
  );
  return searchedAlbumsDetail;
}

export const getAlbumById = fetchHandler;
export const getSongsById = fetchHandler;
// export const getSearchedAlbums = fetchHandler;
export const getSearchedArtists = fetchHandler;
export const getSearchedSongs = fetchHandler;
