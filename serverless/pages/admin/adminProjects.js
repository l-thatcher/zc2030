import styles from "../../styles/AdminDashboard.module.css";
import AdminSidebar from "../../Components/admin/AdminSidebar";

export default function adminProjects() {
    return (
        <div className={styles.main}>
            <AdminSidebar/>
        </div>
    );
}

