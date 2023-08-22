import { Artist } from "./shared";

export interface AlbumFetchedById {
  resourceState: boolean;
  songs: SongInAlbum[];
  code: number;
  album: AlbumDetailById;
}

export interface AlbumDetailById {
  songs: any[];
  paid: boolean;
  onSale: boolean;
  mark: number;
  awardTags?: any;
  companyId: number;
  blurPicUrl: string;
  alias: any[];
  artists: Artist[];
  copyrightId: number;
  picId: number;
  artist: Artist;
  pic: number;
  briefDesc: string;
  publishTime: number;
  company: string;
  picUrl: string;
  commentThreadId: string;
  tags: string;
  description: string;
  status: number;
  subType: string;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
  info?: Info;
}

interface Info {
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
}

interface CommentThread {
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
}

interface ResourceInfo {
  id: number;
  userId: number;
  name: string;
  imgUrl: string;
  creator?: any;
  encodedId?: any;
  subTitle?: any;
  webUrl?: any;
}

interface SongInAlbum {
  rtUrls: any[];
  ar: Ar[];
  al: Al;
  st: number;
  noCopyrightRcmd?: any;
  songJumpInfo?: any;
  rtype: number;
  rurl?: any;
  pst: number;
  alia: any[];
  pop: number;
  rt: string;
  mst: number;
  cp: number;
  crbt?: any;
  cf: string;
  dt: number;
  sq: Sq;
  hr?: Sq;
  l: Sq;
  rtUrl?: any;
  ftype: number;
  h: Sq;
  djId: number;
  no: number;
  fee: number;
  mv: number;
  t: number;
  v: number;
  cd: string;
  a?: any;
  m: Sq;
  name: string;
  id: number;
  privilege: Privilege;
}

interface Privilege {
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
}

interface ChargeInfoList {
  rate: number;
  chargeUrl?: any;
  chargeMessage?: any;
  chargeType: number;
}

interface FreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType?: any;
}

interface Sq {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}

interface Al {
  id: number;
  name: string;
  picUrl: string;
  pic_str: string;
  pic: number;
}

interface Ar {
  id: number;
  name: string;
}
