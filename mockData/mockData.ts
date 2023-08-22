import {
  AlbumInContext,
  ArtistInContext,
  IMusicContext,
  MusicList,
  SongInContext,
} from "@/types/context";

const mockArtists: ArtistInContext = {
  name: "Jon Batiste",
  id: 123,
  image: "image url",
};

const mockAlbum: AlbumInContext = { id: 1, name: "Hello World", image: "album image" };
const mockSong1: SongInContext = {
  id: 1,
  name: "song1",
  mp3Url: "url1",
  time: 1000,
  image: "song1 image",
};

const mockSong2: SongInContext = {
  id: 2,
  name: "song2",
  mp3Url: "url2",
  time: 1000,
  image: "song2 image",
};

const mockSong3: SongInContext = {
  id: 3,
  name: "song3",
  mp3Url: "url3",
  time: 1000,
  image: "song3 image",
};

export const mockContext: IMusicContext[] = [
  {
    song: mockSong1,
    album: mockAlbum,
    artist: mockArtists,
  },
  {
    song: mockSong2,
    album: mockAlbum,
    artist: mockArtists,
  },
  {
    song: mockSong3,
    album: mockAlbum,
    artist: mockArtists,
  },
];

export const mockMusicList: MusicList = { id: 0, type: "album", musicContext: mockContext };

export const emptyMusicList: MusicList = { id: 0, type: "album", musicContext: [] };
