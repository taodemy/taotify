import {
  AlbumInContext,
  ArtistInContext,
  IMusicContext,
  MusicList,
  SongInContext,
} from "@/types/context";

const mockArtist: ArtistInContext = {
  name: "Jon Batiste",
  id: 123,
  image: "artist",
};

const mockAlbum: AlbumInContext = { id: 1, name: "album1", image: "album1" };
const mockAlbum2: AlbumInContext = { id: 2, name: "album2", image: "album2" };

const mockSong1: SongInContext = {
  id: 1,
  name: "song1",
  mp3Url: "url1",
  time: 1000,
  image: "image1",
};

const mockSong2: SongInContext = {
  id: 2,
  name: "song2",
  mp3Url: "url2",
  time: 2000,
  image: "image2",
};

const mockSong3: SongInContext = {
  id: 3,
  name: "song3",
  mp3Url: "url3",
  time: 3000,
  image: "image3",
};

const mockContext: IMusicContext[] = [
  {
    song: mockSong1,
    album: mockAlbum,
    artist: mockArtist,
  },
  {
    song: mockSong2,
    album: mockAlbum,
    artist: mockArtist,
  },
  {
    song: mockSong3,
    album: mockAlbum,
    artist: mockArtist,
  },
];

export const mockMusicList: MusicList = { id: 0, type: "album", musicContext: mockContext };
