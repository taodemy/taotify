import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MusicContextProvider } from "@/contexts/MusicContext";
import GlobalLayout from "@/layouts";
import { WebAudioContextProvider } from "@/contexts/WebAudioContext";
import { useEffect, useState } from "react";
import { Router } from "next/router";
import { ImSpinner8 } from "react-icons/im";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setIsLoading(true);
    };
    const end = () => {
      setIsLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <WebAudioContextProvider>
      <MusicContextProvider>
        <GlobalLayout>
          {isLoading ? (
            <ImSpinner8 className="m-auto h-1/3 w-1/3 animate-spin text-primary" />
          ) : (
            <Component {...pageProps} />
          )}
        </GlobalLayout>
      </MusicContextProvider>
    </WebAudioContextProvider>
  );
}
