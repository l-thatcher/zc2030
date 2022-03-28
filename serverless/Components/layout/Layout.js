import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
  return (
    <div>

      <Navbar />
    <div className='container max-w-6xl mx-auto px-4' >
    <div className="bg-white py-3 md:mb-10">
      {/*<Header />*/}
      <div>{children}</div>

      <Footer />
    </div>
    </div>
    </div>
  );
};

export default Layout;
