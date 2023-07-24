import { Roboto, Allura, Sora } from "next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
export const allura = Allura({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-allura",
});

export const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});
