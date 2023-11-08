import { IMusicContext, MusicList, SongInContext } from "@/types/context";
import { TopAlbumObject } from "@/types/TopAlbums";
import { AlbumFetchedById } from "@/types/AlbumFetchedById";
import { RootObjectBySongId, SongFetchedById } from "@/types/SongFetchedById";
import formatMusicContext from "./formatMusicContext";
import { AlbumDetail } from "@/types/TopAlbums";
import { AlbumDetailById } from "@/types/AlbumFetchedById";
import { getAlbumById, getSongsById } from "./fetchHandler";
import { musicQuality } from "@/constant/song";
import { AlbumResult } from "@/types/SearchTypes";

interface SongInAlbum {
  id: number;
  name: string;
}

async function getAlbumsDetails(newAlbums: AlbumDetail[]): Promise<AlbumFetchedById[]> {
  const albumDetails: AlbumFetchedById[] = await Promise.all(
    newAlbums.map(async (album) => {
      return await getAlbumById({ albumId: album.id });
    })
  );
  return albumDetails;
}

export async function getSongsFromAlbums(songs: SongInAlbum[]) {
  const albumSongIdArray = songs.map((song) => song.id);
  const songObjectById: RootObjectBySongId = await getSongsById({
    songId: albumSongIdArray,
    level: musicQuality.STANDARD,
  });
  return songObjectById;
}

export async function formatMusicContextAndPushToContext(
  songObjectById: RootObjectBySongId,
  album: AlbumDetailById,
  songs: SongInAlbum[]
) {
  let musicContext: IMusicContext[] = [];
  (await songObjectById).data.map((songDetail: SongFetchedById, index: number) => {
    const formattedMusicContext = formatMusicContext(album, songs, songDetail, index);
    const musicContextItem: IMusicContext = {
      album: formattedMusicContext.albumInContext,
      artist: formattedMusicContext.artistInContext,
      song: formattedMusicContext.songInContext,
    };
    musicContext = [...musicContext, musicContextItem];
  });
  return musicContext;
}

export async function addAlbumIdAndTypeToMusicList(albumsDetails: AlbumFetchedById[]) {
  const musicLists = await Promise.all(
    albumsDetails.map(async (detail) => {
      const { songs, album } = detail;
      const songObjectById = await getSongsFromAlbums(songs);
      const musicContext = await formatMusicContextAndPushToContext(songObjectById, album, songs);
      const musicList: MusicList = {
        id: album.id,
        type: "album",
        musicContext,
      };
      return musicList;
    })
  );
  return musicLists;
}

export async function transformFetchedData(fetchedData: TopAlbumObject | AlbumResult) {
  const newAlbums = fetchedData.albums;
  const albumsDetails: AlbumFetchedById[] = await getAlbumsDetails(newAlbums);
  return addAlbumIdAndTypeToMusicList(albumsDetails);
}
