import Header from "../Public/Header";
import Footer from "../Public/Footer";

const index = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default index;
