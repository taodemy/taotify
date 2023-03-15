import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MyContext from "contexts/MyContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyContext.Provider value={{ name: "John", age: 30, occupation: "Developer" }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}
