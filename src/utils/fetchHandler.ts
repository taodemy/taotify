import { TopAlbumObject } from "@/types/TopAlbums";
import { transformFetchedData } from "./transformFetchedData";

interface fetchParamProps {
  area?: string;
  limit?: number;
  albumId?: number;
  songId?: number | number[];
  level?: string;
}

function fetchUrlGenerator(props: fetchParamProps) {
  const baseUrl = process.env.NEXT_PUBLIC_MUSIC_API;
  const { area, limit, albumId, songId, level } = props;
  return area && limit
    ? `${baseUrl}/album/new?area=${area}&limit=${limit}`
    : albumId
    ? `${baseUrl}/album?id=${albumId}`
    : Array.isArray(songId)
    ? `${baseUrl}/song/url/v1?id=${[...songId]}&level=${level}`
    : `${baseUrl}/song/url/v1?id=${songId}&level=${level}`;
}

function returnFetchError(props: fetchParamProps) {
  const { area, limit, albumId } = props;
  return area && limit
    ? `Failed to fetch ${limit} new albums for ${area}`
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
export const getAlbumById = fetchHandler;
export const getSongsById = fetchHandler;
