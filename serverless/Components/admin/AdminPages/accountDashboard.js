import styles from "../../../styles/AdminDashboard.module.css";
import AdminSidebar from "../../../Components/admin/AdminSidebar";
import Popup from "../../../Components/admin/Popup";
import {
  AiOutlineEdit,
  AiOutlinePlusSquare,
  AiOutlineSearch,
} from "react-icons/Ai";
import { MdDelete } from "react-icons/Md";
import { IoMdRemoveCircle } from "react-icons/io";
import {
  getUserData,
  getAdminData,
  updateRole,
  removeUser,
  updateUser,
} from "../../../services/adminService";
import { useState } from "react";
import router from "next/router";

export default function AccountDashboard(props) {
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

  const [adminVisibility, setAdminVisibility] = useState(false);
  const [userVisibility, setUserVisibility] = useState(false);

  const [adminEmail, setAdminEmail] = useState(``);

  const [userId, setUserId] = useState(``);
  const [userName, setUserName] = useState(``);
  const [userEmail, setUserEmail] = useState(``);
  const [userRole, setUserRole] = useState(``);
  const [userWallet, setUserWallet] = useState(``);

  const popupCloseHandler = (e) => {
    setAdminVisibility(e);
    setUserVisibility(e);
    setUserId("");
    setUserName("");
    setUserEmail("");
    setUserRole("");
    setUserWallet("");
  };

  function newAdminAddFunc() {
    updateRole(["ADMIN", adminEmail]).then((res) => {
      console.log("Admin added successfully", res.data);
      setAdminEmail("");
    });
  }

  function removeAdminFunc(removalEmail) {
    const data = ["PERSONAL", removalEmail];
    updateRole(data).then((res) => {
      console.log("Admin removed successfully", res.data);
      router.reload();
    });
  }

  function removeUserFunc(removalID) {
    const data = [removalID];
    removeUser(data).then((res) => {
      console.log("User deleted successfully", res.data);
      router.reload();
    });
  }

  function editUserFunc(id, name, email, role, publicAddress) {
    setUserId(id);
    setUserName(name);
    setUserEmail(email);
    setUserRole(role);
    setUserWallet(publicAddress);

    setUserVisibility(!userVisibility);
  }

  function updateUserDetails() {
    const data = [userId, userName, userEmail, userRole, userWallet];
    updateUser(data).then((res) => {
      console.log("User updated successfully", res.data);
    });
  }

  return (
    <div className={styles.main}>
      <Popup
        className={styles.adminPop}
        onClose={popupCloseHandler}
        show={adminVisibility}
        title="New Admin"
      >
        <h5>Enter email</h5>
        <form onSubmit={newAdminAddFunc} method="POST">
          <input
            id="email"
            type="email"
            required
            onChange={(e) => setAdminEmail(e.target.value)}
          />
          <p />
          <button>Submit</button>
        </form>
      </Popup>

      <Popup
        className={styles.editUserPop}
        onClose={popupCloseHandler}
        show={userVisibility}
        title="Edit user"
      >
        <form onSubmit={updateUserDetails} method="POST">
          <h5>Name</h5>
          <input
            value={userName}
            id="name"
            type="text"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
          <p />
          <h5>Email</h5>
          <input
            value={userEmail}
            id="email"
            type="email"
            required
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <p />
          <h5>Role</h5>
          <input
            value={userRole}
            id="type"
            type="text"
            required
            onChange={(e) => setUserRole(e.target.value)}
          />
          <p />
          <h5>Wallet Address</h5>
          <p>{userWallet}</p>
          <p />
          <button>Save</button>
        </form>
      </Popup>

      <div className={styles.container}>
        <div className={styles.titles}>
          <h1>Admin Management </h1>
          <AiOutlinePlusSquare
              className={styles.icons}
              onClick={(e) => setAdminVisibility(!adminVisibility)}
          />
        </div>
        <div className={styles.listContainer}>
          <table className="table-auto w-100 shadow-md rounded">
            <thead className="bg-[#77C9D480]">
            <tr>
              <th className="p-2 text-left font-bold">Name</th>
              <th className="p-2 text-left font-bold">Email</th>
              <th className="p-2 text-left font-bold">Remove</th>
            </tr>
            </thead>
            <tbody className={"divide-y divide-gray-300"}>
            {admins.map((name, i) => (
                <tr key={"admins"} className={styles.tr}>
                  <td className="p-2">{admins[i].name}</td>
                  <td className="p-2">{admins[i].email}</td>
                  <td className="p-2">
                    <IoMdRemoveCircle
                        onClick={(e) => removeAdminFunc(admins[i].email)}
                        className={styles.iconsBin}
                    />
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>

        <div className={styles.titles}>
          <h1>User Management </h1>
          {/*<AiOutlineSearch className={styles.icons}/>*/}
        </div>
        <div className={styles.listContainer}>
          <table className="table-fixed w-100 shadow-md rounded h-0.25">
            <thead className="bg-[#77C9D480]">
            <tr>
              <th className="hidden sm:block p-2 text-left font-bold">ID</th>
              <th className="p-2 text-left font-bold">Name</th>
              <th className="p-2 text-left font-bold">Email</th>
              <th className="p-2 text-left font-bold">Role</th>
              <th className="p-2 text-left font-bold overflow-x-auto">Wallet Address</th>
              <th className="p-2 text-left font-bold">Edit</th>
              <th className="p-2 text-left font-bold">Delete</th>
            </tr>
            </thead>
            <tbody className= "divide-y divide-gray-300 overflow-y-auto">
            {users.map((name, i) => (
                <tr key={"users"} className={styles.tr}>
                  <td className="hidden sm:block p-2 overflow-x-auto">{users[i].id}</td>
                  <td className="p-2 overflow-x-auto">{users[i].name}</td>
                  <td className="p-2 overflow-x-auto">{users[i].email}</td>
                  <td className="p-2 overflow-x-auto">{users[i].role}</td>
                  <td className="p-2 overflow-x-auto">{users[i].publicAddress}</td>
                  <td className="p-2">
                    <AiOutlineEdit
                        className={styles.iconsEdit}
                        onClick={(e) =>
                            editUserFunc(
                                users[i].id,
                                users[i].name,
                                users[i].email,
                                users[i].role,
                                users[i].publicAddress
                            )
                        }
                    />
                  </td>
                  <td>
                    <MdDelete
                        onClick={(e) => removeUserFunc(users[i].id)}
                        className={styles.iconsBin}
                    />
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
        
        {/*<div className={styles.listContainer}>*/}
          {/*<div className={styles.lists}>*/}
          {/*  <div key="{admins}" className={styles.items}>*/}
          {/*    <p className={styles.item}>Name</p>*/}
          {/*    <p className={styles.item}>Email</p>*/}
          {/*    <p className={styles.icons}>Remove</p>*/}
          {/*  </div>*/}
          {/*  {admins.map((name, i) => (*/}
          {/*    <div key="{admins}" className={styles.items}>*/}
          {/*      <p className={styles.item}>{admins[i].name}</p>*/}
          {/*      <p className={styles.item}>{admins[i].email}</p>*/}
          {/*      <IoMdRemoveCircle*/}
          {/*        onClick={(e) => removeAdminFunc(admins[i].email)}*/}
          {/*        className={styles.icons}*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<div className={styles.listContainer}>*/}
          {/*<div className={styles.lists}>*/}
          {/*  <div key="{users}" className={styles.items}>*/}
          {/*    <p className={styles.item}>ID</p>*/}
          {/*    <p className={styles.item}>Name</p>*/}
          {/*    <p className={styles.item}>Email</p>*/}
          {/*    <p className={styles.item}>Type</p>*/}
          {/*    <p className={styles.item}>Wallet Address</p>*/}
          {/*    <p className={styles.icons}>Edit</p>*/}
          {/*    <p className={styles.icons}>Delete</p>*/}
          {/*  </div>*/}
          {/*  {users.map((user, i) => (*/}
          {/*    <div key="{users}" className={styles.items}>*/}
          {/*      <p className={styles.item}>{users[i].id}</p>*/}
          {/*      <p className={styles.item}>{users[i].name}</p>*/}
          {/*      <p className={styles.item}>{users[i].email}</p>*/}
          {/*      <p className={styles.item}>{users[i].role}</p>*/}
          {/*      <p className={styles.item}>{users[i].ethWallet}</p>*/}
          {/*      <AiOutlineEdit*/}
          {/*        className={styles.icons}*/}
          {/*        onClick={(e) =>*/}
          {/*          editUserFunc(*/}
          {/*            users[i].id,*/}
          {/*            users[i].name,*/}
          {/*            users[i].email,*/}
          {/*            users[i].role,*/}
          {/*            users[i].ethWallet*/}
          {/*          )*/}
          {/*        }*/}
          {/*      />*/}
          {/*      <MdDelete*/}
          {/*        onClick={(e) => removeUserFunc(users[i].id)}*/}
          {/*        className={styles.icons}*/}
          {/*      />*/}
          {/*    </div>*/}
          {/*  ))}*/}
          {/*</div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
