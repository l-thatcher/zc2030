import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="">
      {/*<Header />*/}
      <Navbar />

      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
