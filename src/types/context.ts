import { SearchedAlbumInContext } from "./SearchTypes";

//custom types & shared types
export interface MusicList {
  id: number;
  type: "newSongs" | "playlist" | "album";
  musicContext: IMusicContext[];
}

export interface IMusicContext {
  song: SongInContext;
  album: AlbumInContext | SearchedAlbumInContext;
  artist: ArtistInContext;
}

export interface AlbumInContext {
  id: number;
  name: string;
  image: string;
  mark?: number;
}
export interface SongInContext {
  id: number;
  name: string;
  mp3Url: string;
  time: number;
  image: string;
}

export interface ArtistInContext {
  name: string;
  id: number;
  image: string;
}
