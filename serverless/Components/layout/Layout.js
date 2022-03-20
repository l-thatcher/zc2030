import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />

      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
