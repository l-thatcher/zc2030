import styles from "../../styles/AdminDashboard.module.css";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import NewAdminPop from "../../Components/admin/NewAdminPop";
import {
  AiOutlineEdit,
  AiOutlinePlusSquare,
  AiOutlineSearch,
} from "react-icons/Ai";
import { MdDelete } from "react-icons/Md";
import {
  getUserData,
  getAdminData,
  addNewAdmin,
} from "../../services/adminService";
import { useState } from "react";

export default function adminDashboard(props) {
  const users = props.users;
  const admins = props.admins;
  // const adminJsonData = {
  //     Category1: [
  //         {
  //             id: "1",
  //             name: `peter`,
  //             email: 'peter@zc30.com',
  //         },
  //         {
  //             id: "2",
  //             name: `peter`,
  //             email: 'peter@zc30.com',
  //         },
  //         {
  //             id: "3",
  //             name: `alfred`,
  //             email: 'alfred@zc30.com',
  //         },
  //         {
  //             id: "4",
  //             name: `alfred`,
  //             email: 'alfred@zc30.com',
  //         },
  //     ]
  // };
  //
  // const userJsonData = {
  //     Category1: [
  //         {
  //             id: "1",
  //             name: `bob`,
  //             email: 'alfred@zc30.com',
  //             type: 'personal',
  //         },
  //         {
  //             id: "2",
  //             name: `tod`,
  //             email: 'alfred@zc30.com',
  //             type: 'business',
  //         },
  //         {
  //             id: "3",
  //             name: `hob`,
  //             email: 'alfred@zc30.com',
  //             type: 'business',
  //         },
  //         {
  //             id: "4",
  //             name: `lob`,
  //             email: 'alfred@zc30.com',
  //             type: 'school',
  //         },
  //
  //     ]
  // };

  // const adminData = Object.keys(adminJsonData).reduce((accumulator, iterator) => {
  //     return [...accumulator, ...adminJsonData[iterator]];
  // }, []);
  //
  // const userData = Object.keys(userJsonData).reduce((accumulator, iterator) => {
  //     return [...accumulator, ...userJsonData[iterator]];
  // }, [])

  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div className={styles.main}>
      <AdminSidebar />
      <NewAdminPop
        className={styles.adminPop}
        onClose={popupCloseHandler}
        show={visibility}
        title="New Admin"
      >
        <h5>Enter email</h5>

        <form action="" method="POST">
          <input id="email" type="email" required />
          <p />
          <button type="submit">Submit</button>
        </form>
      </NewAdminPop>
      <div className={styles.container}>
        <div className={styles.listContainer}>
          <div className={styles.titles}>
            <h1>Admin Management </h1>
            <div>
              <AiOutlinePlusSquare
                className={styles.icons}
                onClick={(e) => setVisibility(!visibility)}
              />
              <AiOutlineSearch className={styles.icons} />
            </div>
          </div>
          <div className={styles.lists}>
            <div key="{admins}" className={styles.items}>
              <p className={styles.item}>Name</p>
              <p className={styles.item}>Email</p>
              <p>Remove</p>
            </div>
            {admins.map((name, i) => (
              <div key="{admins}" className={styles.items}>
                <p className={styles.item}>{admins[i].name}</p>
                <p className={styles.item}>{admins[i].email}</p>
                <MdDelete className={styles.icons} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.listContainer}>
          <div className={styles.titles}>
            <h1>User Management </h1>
            <AiOutlineSearch className={styles.icons} />
          </div>
          <div className={styles.lists}>
            <div key="{users}" className={styles.items}>
              <p className={styles.item}>ID</p>
              <p className={styles.item}>Name</p>
              <p className={styles.item}>Email</p>
              <p className={styles.item}>Type</p>
              <p className={styles.item}>Wallet Address</p>
              <p>Edit</p>
            </div>
            {users.map((name, i) => (
              <div key="{users}" className={styles.items}>
                <p className={styles.item}>{users[i].id}</p>
                <p className={styles.item}>{users[i].name}</p>
                <p className={styles.item}>{users[i].email}</p>
                <p className={styles.item}>{users[i].type}</p>
                <p className={styles.item}>{users[i].wallet}</p>
                <AiOutlineEdit className={styles.icons} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// This gets called at build time
export async function getServerSideProps() {
  // Adds all users types in a list
  const userRes = await getUserData();
  const users = userRes.data;

  // Adds all admins types in a list
  const adminRes = await getAdminData();
  const admins = adminRes.data;

  // Pass post data to the page via props
  return { props: { users, admins } };
}
