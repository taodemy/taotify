export interface RootObjectBySongId {
  data: SongFetchedById[];
  code: number;
}

export interface SongFetchedById {
  id: number;
  url: string;
  br: number;
  size: number;
  md5: string;
  code: number;
  expi: number;
  type: string;
  gain: number;
  peak: number;
  fee: number;
  uf?: any;
  payed: number;
  flag: number;
  canExtend: boolean;
  freeTrialInfo?: any;
  level: string;
  encodeType: string;
  freeTrialPrivilege: FreeTrialPrivilege;
  freeTimeTrialPrivilege: FreeTimeTrialPrivilege;
  urlSource: number;
  rightSource: number;
  podcastCtrp?: any;
  effectTypes?: any;
  time: number;
}

interface FreeTimeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  type: number;
  remainTime: number;
}

interface FreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType?: any;
  cannotListenReason?: any;
}
