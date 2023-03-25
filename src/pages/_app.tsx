import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MusicContextProvider } from "contexts/MusicContext";
import GlobalLayout from "layouts";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <MusicContextProvider>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </MusicContextProvider>
  );
}
