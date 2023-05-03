import { Album, Artist, MusicList, Song } from "types";

const mockArtists: Artist[] = [
  { id: 1, name: "Cam" },
  { id: 2, name: "Mac" },
];

const mockAlbum: Album = { id: 1, name: "Hello World", picUrl: "" };

export const mockSongs: Song[] = [
  {
    id: 1,
    name: "song1",
    album: mockAlbum,
    artists: mockArtists,
    mp3Url: "url1",
  },
  {
    id: 2,
    name: "song2",
    album: mockAlbum,
    artists: mockArtists,
    mp3Url: "url2",
  },
  {
    id: 3,
    name: "song3",
    album: mockAlbum,
    artists: mockArtists,
    mp3Url: "url3",
  },
];

export const mockMusicList: MusicList = { id: 0, type: "newSongs", songs: mockSongs };

export const mockEmptyMusicList: MusicList = { id: 0, type: "album", songs: [] };
