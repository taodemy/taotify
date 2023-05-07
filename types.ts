//custom types & shared types
export type MusicList = {
  id: number;
  type: "newSongs" | "playlist" | "album";
  songs: Song[];
};

export type Song = {
  id: number;
  name: string;
  album: Album;
  artists: Artist[];
  mp3Url: string;
};

export type Album = {
  name: string;
  id: number;
  type?: string;
  size?: number;
  picId?: number;
  blurPicUrl?: string;
  companyId?: number;
  pic?: number;
  picUrl: string;
  publishTime?: number;
  description?: string;
  tags?: string;
  company?: string;
  briefDesc?: string;
  artist?: Artist;
  songs?: any[];
  alias?: string[];
  status?: number;
  copyrightId?: number;
  commentThreadId?: string;
  artists?: Artist[];
  subType?: string;
  transName?: string[];
  onSale?: boolean;
  mark?: number;
  gapless?: number;
  picId_str?: string;
  paid?: boolean;
  awardTags?: any;
  info?: AlbumDetailInfo;
};

export type Artist = {
  img1v1Id?: number;
  topicPerson?: number;
  followed?: boolean;
  musicSize?: number;
  albumSize?: number;
  alias?: any[];
  picId?: number;
  trans?: string;
  briefDesc?: string;
  picUrl?: string;
  img1v1Url?: string;
  name: string;
  id: number;
  img1v1Id_str?: string;
};

type ChargeInfoList = {
  rate: number;
  chargeUrl?: any;
  chargeMessage?: any;
  chargeType: number;
};

type FreeTrialPrivilege = {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType?: any;
};

type Privilege = {
  id: number;
  fee: number;
  payed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  toast: boolean;
  flag: number;
  preSell: boolean;
  playMaxbr: number;
  downloadMaxbr: number;
  maxBrLevel: string;
  playMaxBrLevel: string;
  downloadMaxBrLevel: string;
  plLevel: string;
  dlLevel: string;
  flLevel: string;
  rscl?: any;
  freeTrialPrivilege: FreeTrialPrivilege;
  chargeInfoList: ChargeInfoList[];
};

//types to handle data from API: /personalized/newSong
export type NewSongResult = {
  id: number;
  type: number;
  name: string;
  copywriter: any;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: any;
  song: NewSong;
  alg: string;
};

export type NewSong = {
  name: string;
  id: number;
  position: number;
  alias: any[];
  status: number;
  fee: number;
  copyrightId: number;
  disc: string;
  no: number;
  artists: Artist[];
  album: Album;
  starred: boolean;
  popularity: number;
  score: number;
  starredNum: number;
  duration: number;
  playedNum: number;
  dayPlays: number;
  hearTime: number;
  sqMusic: any;
  hrMusic: any;
  ringtone: string;
  crbt: any;
  audition: any;
  copyFrom: string;
  commentThreadId: string;
  rtUrl: any;
  ftype: number;
  rtUrls: any[];
  copyright: number;
  transName: any;
  sign: any;
  mark: number;
  originCoverType: number;
  originSongSimpleData: any;
  single: number;
  noCopyrightRcmd: any;
  bMusic: BMusic;
  mp3Url: string | null;
  rtype: number;
  rurl: any;
  mvid: number;
  hMusic: BMusic;
  mMusic: BMusic;
  lMusic: BMusic;
  exclusive: boolean;
  privilege: Privilege;
};

type BMusic = {
  name: any;
  id: number;
  size: number;
  extension: string;
  sr: number;
  dfsId: number;
  bitrate: number;
  playTime: number;
  volumeDelta: number;
};

//types to handle data from API: /album?id=xxx
export type AlbumDetail = {
  resourceState: boolean;
  songs: AlbumDetailSong[];
  code: number;
  album: Album;
};

type AlbumDetailInfo = {
  commentThread: CommentThread;
  latestLikedUsers?: any;
  liked: boolean;
  comments?: any;
  resourceType: number;
  resourceId: number;
  commentCount: number;
  likedCount: number;
  shareCount: number;
  threadId: string;
};

type CommentThread = {
  id: string;
  resourceInfo: ResourceInfo;
  resourceType: number;
  commentCount: number;
  likedCount: number;
  shareCount: number;
  hotCount: number;
  latestLikedUsers?: any;
  resourceOwnerId: number;
  resourceTitle: string;
  resourceId: number;
};

type ResourceInfo = {
  id: number;
  userId: number;
  name: string;
  imgUrl: string;
  creator?: any;
  encodedId?: any;
  subTitle?: any;
  webUrl?: any;
};

export type AlbumDetailSong = {
  rtUrls: any[];
  ar: AlbumDetailAr[];
  al: AlbumDetailAl;
  st: number;
  noCopyrightRcmd?: any;
  songJumpInfo?: any;
  rtype: number;
  rurl?: any;
  pst: number;
  alia: string[];
  pop: number;
  rt: string;
  mst: number;
  cp: number;
  crbt?: any;
  cf: string;
  dt: number;
  rtUrl?: any;
  ftype: number;
  no: number;
  fee: number;
  djId: number;
  mv: number;
  t: number;
  v: number;
  h: AlbumDetailH;
  l: AlbumDetailH;
  sq?: any;
  hr?: any;
  cd: string;
  a?: any;
  m: AlbumDetailH;
  name: string;
  id: number;
  privilege: Privilege;
};

type AlbumDetailH = {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
};

type AlbumDetailAl = {
  id: number;
  name: string;
  picUrl: string;
  pic_str: string;
  pic: number;
  alia: string[];
};

type AlbumDetailAr = {
  id: number;
  name: string;
  alia: string[];
};
