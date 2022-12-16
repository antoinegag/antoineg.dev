import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { ParallaxProvider } from "react-scroll-parallax";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ParallaxProvider>
  );
}
