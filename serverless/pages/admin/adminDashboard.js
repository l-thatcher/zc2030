import styles from "../../styles/AdminDashboard.module.css";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import NewAdminPop from "../../Components/admin/NewAdminPop";
import {AiOutlineEdit, AiOutlinePlusSquare, AiOutlineSearch} from 'react-icons/Ai';
import {MdDelete} from "react-icons/Md";
import {getUserData, getAdminData} from "../../services/adminService";
import {useState} from "react";

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
            <AdminSidebar/>
            <div className={styles.container}>

                <div className={styles.listContainer}>
                    <div className={styles.titles}>
                        <h1>Admin Management </h1>
                        <div>
                            <AiOutlinePlusSquare className={styles.icons} onClick={(e) => setVisibility(!visibility)}/>
                            <AiOutlineSearch className={styles.icons}/>
                        </div>

                    </div>
                    <div className={styles.lists}>
                        {admins.map((name, i) => (
                            <div key="{admins}" className={styles.items}>
                                <p>{admins[i].name}</p>
                                <p>{admins[i].email}</p>
                                <MdDelete className={styles.icons}/>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.listContainer}>
                    <div className={styles.titles}>
                        <h1>User Management </h1>
                        <AiOutlineSearch className={styles.icons}/>
                    </div>
                    <div className={styles.lists}>
                        {users.map((name, i) => (
                            <div key="{users}" className={styles.items}>
                                <p>{users[i].id}</p>
                                <p>{users[i].name}</p>
                                <p>{users[i].email}</p>
                                <p>{users[i].type}</p>
                                <AiOutlineEdit className={styles.icons}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <NewAdminPop
                onClose={popupCloseHandler}
                show={visibility}
                title="Hello Jeetendra"
            >
                <h1>Hello This is Popup Content Area</h1>
                <h2>This is my lorem ipsum text here!</h2>
            </NewAdminPop>
        </div>
    );
}

// This gets called at build time
export async function getServerSideProps(){
    // Adds all users types in a list
    const userRes = await getUserData()
    const users = userRes.data

    // Adds all admins types in a list
    const adminRes = await getAdminData()
    const admins = adminRes.data
    console.log(admins);


    // Pass post data to the page via props
    return { props: {users, admins} };
}
