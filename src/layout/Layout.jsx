import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Main from "../components/main/Main";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main children={children} />
      <Footer />
    </>
  );
};

export default Layout;
