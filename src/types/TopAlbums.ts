import { Artist } from "./shared";

export interface TopAlbumObject {
  total: number;
  albums: AlbumDetail[];
  code: number;
}

export interface AlbumDetail {
  songs: any[];
  paid: boolean;
  onSale: boolean;
  mark: number;
  awardTags?: any;
  companyId: number;
  copyrightId: number;
  artists: Artist[];
  alias: any[];
  picId: number;
  artist: Artist;
  publishTime: number;
  company: string;
  briefDesc: string;
  picUrl: string;
  commentThreadId: string;
  pic: number;
  blurPicUrl: string;
  tags: string;
  status: number;
  subType: string;
  description: string;
  name: string;
  id: number;
  type: string;
  size: number;
  picId_str: string;
  transNames: string[];
}
