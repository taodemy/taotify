import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MusicContextProvider } from "contexts/MusicContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MusicContextProvider>
      <Component {...pageProps} />
    </MusicContextProvider>
  );
}
