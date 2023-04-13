export const tracks = [
  {
    id: 1,
    name: "testSong",
    artist: "testArtist",
    album: "testAlbum",
    picUrl: "testPicUrl",
    audioUrl: "testaudioUrl",
  },
  {
    id: 2,
    name: "testSong",
    artist: "testArtist",
    album: "testAlbum",
    picUrl: "testPicUrl",
    audioUrl: "testaudioUrl",
  },
  {
    id: 3,
    name: "testSong",
    artist: "testArtist",
    album: "testAlbum",
    picUrl: "testPicUrl",
    audioUrl: "testaudioUrl",
  },
];

export const urls = [
  { status: true, audioUrl: "http://example.com/song1.mp3" },
  { status: false, audioUrl: "" },
  { status: true, audioUrl: "http://example.com/song3.mp3" },
];

export const musicList = {
  id: Number,
  type: "newSongs",
  tracks: tracks,
};

export const tracksWithUrl: Music[] = [
  {
    id: 1,
    name: "testSong",
    artist: "testArtist",
    album: "testAlbum",
    picUrl: "testPicUrl",
    audioUrl: "http://example.com/song1.mp3",
  },
  {
    id: 3,
    name: "testSong",
    artist: "testArtist",
    album: "testAlbum",
    picUrl: "testPicUrl",
    audioUrl: "http://example.com/song3.mp3",
  },
];
