import styles from "../../styles/AdminDashboard.module.css";
import AdminSidebar from "../../Components/AdminSidebar";
import {AiOutlineEdit, AiOutlinePlusSquare} from 'react-icons/Ai';
import {MdDelete} from "react-icons/Md";

export default function adminDashboard() {
    const adminJsonData = {
        Category1: [
            {
                id: "1",
                name: `peter`,
                email: 'peter@zc30.com',
            },
            {
                id: "2",
                name: `peter`,
                email: 'peter@zc30.com',
            },
            {
                id: "3",
                name: `alfred`,
                email: 'alfred@zc30.com',
            },
            {
                id: "4",
                name: `alfred`,
                email: 'alfred@zc30.com',
            },
        ]
    };

    const userJsonData = {
        Category1: [
            {
                id: "1",
                name: `bob`,
                email: 'alfred@zc30.com',
                type: 'personal',
            },
            {
                id: "2",
                name: `tod`,
                email: 'alfred@zc30.com',
                type: 'business',
            },
            {
                id: "3",
                name: `hob`,
                email: 'alfred@zc30.com',
                type: 'business',
            },
            {
                id: "4",
                name: `lob`,
                email: 'alfred@zc30.com',
                type: 'school',
            },

        ]
    };

    const adminData = Object.keys(adminJsonData).reduce((accumulator, iterator) => {
        return [...accumulator, ...adminJsonData[iterator]];
    }, []);

    const userData = Object.keys(userJsonData).reduce((accumulator, iterator) => {
        return [...accumulator, ...userJsonData[iterator]];
    }, []);

    return (
        <div className={styles.main}>
            <AdminSidebar/>
            <div className={styles.container}>

                <div className={styles.listContainer}>
                    <div className={styles.titles}>
                        <h1>Admin Management </h1>
                        <AiOutlinePlusSquare className={styles.icons}/>
                    </div>
                    <div className={styles.lists}>
                        {adminData.map((name, i) => (
                            <div className={styles.items}>
                                <p>{adminData[i].name}</p>
                                <p>{adminData[i].email}</p>
                                <MdDelete className={styles.icons}/>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.listContainer}>
                    <div className={styles.titles}>
                        <h1>User Management </h1>
                    </div>
                    <div className={styles.lists}>
                        {adminData.map((name, i) => (
                            <div className={styles.items}>
                                <p>{userData[i].id}</p>
                                <p>{userData[i].name}</p>
                                <p>{userData[i].email}</p>
                                <p>{userData[i].type}</p>
                                <AiOutlineEdit className={styles.icons}/>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}
