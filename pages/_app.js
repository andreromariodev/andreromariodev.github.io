import "@/styles/globals.css";

import Public from "../components/Layouts/Public";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  // TODO: Define o service worker da PWA, comentar ao atuar em desenvolvimento
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
    }
  }, []);
  // TODO: Define o service worker da PWA, comentar ao atuar em desenvolvimento

  return (
    <>
      <Public>
        <Component {...pageProps} />
      </Public>
    </>
  );
}
