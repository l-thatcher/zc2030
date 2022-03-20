import styles from "../../styles/AdminDashboard.module.css";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import CreateProject from "../../Components/admin/projects/CreateProject";
import AdminProjectsLayout from "../../Components/admin/projects/adminProjectsLayout";
import React from "react";
import {getProjectsList} from "../../services/ProjectService";

export default function adminProjects(props) {

    const allProjects = props.allProjects;

    return (
        <div className="flex  w-full md:w-8/12 bg-gray-100 ">
            {/*<AdminSidebar/>*/}
            <AdminSidebar/>
            <AdminProjectsLayout projects={allProjects}/>

        </div>
    );
}

export async function getServerSideProps() {
    const projectsRes = await getProjectsList();
    const allProjects = projectsRes.data;


    return {
        props: {allProjects}
    };
}

