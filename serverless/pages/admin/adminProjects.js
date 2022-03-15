import styles from "../../styles/AdminDashboard.module.css";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import CreateProject from "../../Components/admin/projects/CreateProject";
import React from "react";

export default function adminProjects() {
    return (
        <div className={styles.main}>

            {/*<AdminSidebar/>*/}


    <div className="flex flex-wrap ">
        <AdminSidebar/>
        <div className="w-full lg:w-8/12 px-4">
            <CreateProject/>
        </div>
        <div className="w-full lg:w-4/12 px-4">

        </div>
    </div>

        </div>
    );
}

