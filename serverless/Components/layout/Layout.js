import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className='container max-w-3xl mx-auto px-4' >
    <div className="bg-white py-3 md:mb-10">
      {/*<Header />*/}
      <Navbar />

      <div>{children}</div>

      <Footer />
    </div>
    </div>
  );
};

export default Layout;
