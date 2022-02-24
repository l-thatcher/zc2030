import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {

    return (
        <div className = "content">
            <Header/>

            <div style={{marginTop:"140px"}}>
                {children}
            </div>

            <Footer/>
        </div>
    )
}

export default Layout;