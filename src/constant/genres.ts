export const GENRES = [
  {
    collectionName: "FEATURED",
    collectionDescription: "This Week",
    area: "ALL",
    limit: 14,
  },
  {
    collectionName: "TOP MUSIC",
    collectionDescription: "English",
    area: "EA",
    limit: 14,
  },
  {
    collectionName: "C-Pop",
    collectionDescription: "Chinese",
    area: "ZH",
    limit: 14,
  },
  {
    collectionName: "K-Pop",
    collectionDescription: "Korean",
    area: "KR",
    limit: 14,
  },
  {
    collectionName: "J-Pop",
    collectionDescription: "Japan",
    area: "JP",
    limit: 14,
  },
];

export const ALL_REGIONS = GENRES.find((item) => item.collectionName == "FEATURED")?.area;
export const ENGLISH = GENRES.find((item) => item.collectionName == "TOP MUSIC")?.area;
export const CHINESE = GENRES.find((item) => item.collectionName == "C-Pop")?.area;
export const KOREAN = GENRES.find((item) => item.collectionName == "K-Pop")?.area;
export const JAPANESE = GENRES.find((item) => item.collectionName == "J-Pop")?.area;
