import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { MusicContextProvider } from "@/contexts/MusicContext";
import GlobalLayout from "@/layouts";
import { WebAudioContextProvider } from "@/contexts/WebAudioContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WebAudioContextProvider>
      <MusicContextProvider>
        <GlobalLayout>
          <Component {...pageProps} />
        </GlobalLayout>
      </MusicContextProvider>
    </WebAudioContextProvider>
  );
}
