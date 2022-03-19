import styles from "../../styles/AdminDashboard.module.css";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import CreateProject from "../../Components/admin/projects/CreateProject";
import React from "react";

export default function adminProjects() {
  return (
    <div className="flex flex-wrap block h-[300px] bg-blue-500 ">
      <AdminSidebar />

      <div className="w-full lg:w-6/12 px-4  ">
        <div className="   ">
          <CreateProject />
        </div>
      </div>
    </div>
  );
}
