import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import {useSession} from "next-auth/react";
import UserLayout from "../userLayout/UserLayout";
import AdminLayout from "../adminLayout/AdminLayout";


const Layout = ({ children }) => {
    const { data: session } = useSession();

    if (session){
        if (session.user.role === 'ADMIN') {
            return (
                <div className="content">
                    <AdminLayout/>
                    <div>{children}</div>
                    <Footer />
                </div>
            );
        } else {
            return (
                <div className="content">
                    <UserLayout/>
                    <div>{children}</div>
                    <Footer />
                </div>
            )
        }
    } else {
        return (
            <div className="content">
                <UserLayout/>
                <div>{children}</div>
                <Footer />
            </div>
        )
    }
};

export default Layout;

