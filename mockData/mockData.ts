import { PlayList, Song } from "types";

export const mockSongs: Song[] = [
  {
    name: "song1",
    id: 1,
    album: { name: "album1", id: 1, picUrl: "picUrl1" },
    mp3Url: "url1",
    artists: [
      { name: "artist1", id: 1 },
      { name: "artist2", id: 2 },
    ],
  },
  {
    name: "song2",
    id: 2,
    album: { name: "album2", id: 2, picUrl: "picUrl2" },
    mp3Url: "url2",
    artists: [],
  },
  {
    name: "song3",
    id: 3,
    album: { name: "album3", id: 3, picUrl: "picUrl3" },
    mp3Url: "url3",
    artists: [],
  },
];

export const mockPlayList: PlayList = { id: 0, type: "newSongs", songs: mockSongs };

export const mockEmptyPlayList: PlayList = { id: 0, type: "album", songs: [] };
