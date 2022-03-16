import styles from "../../styles/AdminDashboard.module.css";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import { getUserData, getAdminData } from "../../services/adminService";
import AccountDashboard from "../../Components/admin/AdminPages/accountDashboard";

export default function adminDashboard(props) {
  return (
    <div className={styles.main}>
      <AdminSidebar />
      <AccountDashboard users={props.users} admins={props.admins} />
    </div>
  );
}

// This gets called at build time
export async function getServerSideProps() {
  // Adds all users types in a list
  const userRes = await getUserData();
  const users = userRes?.data;

  // Adds all admins types in a list
  const adminRes = await getAdminData();
  const admins = adminRes.data;

  // Pass post data to the page via props
  return { props: { users, admins } };
}
