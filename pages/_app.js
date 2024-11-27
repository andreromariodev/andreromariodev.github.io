import "@/styles/globals.css";

import Public from "../components/Layouts/Public";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Public>
        <Component {...pageProps} />
      </Public>
    </>
  );
}
