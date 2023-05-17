import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { MusicContextProvider } from "@/contexts/MusicContext";
import GlobalLayout from "@/layouts";

const roboto = Roboto({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MusicContextProvider>
      <div className={roboto.className}>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </div>
    </MusicContextProvider>
  );
}
