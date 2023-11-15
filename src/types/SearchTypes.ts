import { AlbumDetail } from "@/types/TopAlbums";
import { MusicList } from "./context";
export interface SongRootObject {
  result: SongResult;
  code: number;
}

interface SongResult {
  songs: Song[];
  hasMore: boolean;
  songCount: number;
}

interface Song {
  id: number;
  name: string;
  artists: Artist[];
  album: AlbumDetail;
  duration: number;
  copyrightId: number;
  status: number;
  alias: string[];
  rtype: number;
  ftype: number;
  mvid: number;
  fee: number;
  rUrl?: any;
  mark: number;
  transNames?: string[];
}

export interface SearchResults {
  matchedArtists: ArtistRootObject;
  matchedAlbums: MusicList[];
  matchedSongs: SongRootObject;
}

export interface SearchedAlbumInContext {
  id: number;
  name: string;
  image: string;
  artistName: string;
}

export interface AlbumRootObject {
  result: AlbumResult;
  code: number;
}

export interface AlbumResult {
  hlWords: string[];
  albums: AlbumDetail[];
  albumCount: number;
}

export interface ArtistRootObject {
  result: ArtistResult;
  code: number;
}

interface ArtistResult {
  hasMore: boolean;
  artistCount: number;
  hlWords: string[];
  artists: Artist[];
  searchQcReminder?: any;
}

interface Artist {
  id: number;
  name: string;
  picUrl: string;
  alias: string[];
  albumSize: number;
  picId: number;
  fansGroup?: any;
  img1v1Url: string;
  img1v1: number;
  mvSize: number;
  followed: boolean;
  alg: string;
  alia?: string[];
  trans?: string;
  accountId?: number;
  identityIconUrl?: string;
  transNames?: string[];
}
