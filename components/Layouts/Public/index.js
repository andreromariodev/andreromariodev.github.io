import Head from "next/head";
import Header from "../Public/Header";
import Footer from "../Public/Footer";

const index = (props) => {
  return (
    <>
      <Head>
        <link rel="manifest" href="./manifest.json" />
      </Head>

      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default index;
