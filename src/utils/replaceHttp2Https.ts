export const replaceHttp2Https = (url: string) => {
  return url.replace(/http(?!\w+:)/g, "https");
};
