import clsx from "clsx";
import { Inter } from "next/font/google";
import { FC } from "react";
import "../styles/global.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface AppProps {
  Component: FC<any>;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={(clsx(inter.className), "text-slate-900")}>
      <Component {...pageProps} />
      <div id="modals"></div>
    </div>
  );
}
