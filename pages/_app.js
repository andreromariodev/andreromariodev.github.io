import "@/styles/globals.css";

import Public from "../components/Layouts/Public";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/portfolio/sw.js').catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
    }
  }, []);

  return (
    <>
      <Public>
        <Component {...pageProps} />
      </Public>
    </>
  );
}
