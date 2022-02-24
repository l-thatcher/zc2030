import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header";
import Footer from "./Footer";

const img = "/cz2030_logo.png";
const menuOptions = [ "Home", "About", "Projects", "Calculators", "Sign In", "Register"];

const Layout = ({ children }) => {

    return (
        <div className = "content">
            <Header
                logo = {img}
                home = {menuOptions[0]}
                about = {menuOptions[1]}
                projects = {menuOptions[2]}
                calculators = {menuOptions[3]}
                signIn = {menuOptions[4]}
                register = {menuOptions[5]}
            />
            <div style={{marginTop:"140px"}}>
                {children}
            </div>
            <Footer
                logo = {img}
            />
        </div>
    )
}

export default Layout;