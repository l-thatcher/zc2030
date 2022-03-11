import styles from "../../styles/AdminDashboard.module.css";
import AdminSidebar from "../../Components/AdminSidebar";
import {AiOutlineEdit, AiOutlinePlusSquare, AiOutlineSearch} from 'react-icons/Ai';
import {MdDelete} from "react-icons/Md";
import {getUserData} from "../../services/adminService";

export default function adminDashboard(props) {
    const users = props.users;
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
    return (
        <div className={styles.main}>
            <AdminSidebar/>
            <div className={styles.container}>

                <div className={styles.listContainer}>
                    <div className={styles.titles}>
                        <h1>Admin Management </h1>
                        <div>
                            <AiOutlinePlusSquare className={styles.icons}/>
                            <AiOutlineSearch className={styles.icons}/>
                        </div>

                    </div>
                    <div className={styles.lists}>
                        {users.map((name, i) => (
                            <div className={styles.items}>
                                <p>{users[i].name}</p>
                                <p>{users[i].email}</p>
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
                            <div className={styles.items}>
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
        </div>
    );
}

// This gets called at build time
export async function getServerSideProps(){
    // let categories = [];
    // let categoriesCount = [];
    // let inputs = [];
    // let typeId = [];
    // let categoryId = [];
    // const session = await getSession(context);
    // let userId = null;
    // if (session) {
    //     userId = session.user.id;
    // }

    // Adds all Calculator types in a list
    const userRes = await getUserData()
    const users = userRes.data
    console.log(users)

    // Adds the IDs of calculators in a list
    // types.map((type) => {
    //     typeId.push(type.id);
    // });

    // Add Calculator Categories into categories for every id of calculators
    // for (let i = 0; i < typeId.length; i++) {
    //     const res = await getCalculatorCategories(typeId[i]);
    //     const calculatorCategories = res.data;
    //     if (userId != null) {
    //         // categoriesCount.push(await calculatorCategories.map(it => getUserCategoryProgress(userId, it.id)))
    //         // categoriesCount.push((await getUserCategoryProgress("cl0h963z10006rwqni8sc891f", 1)).data.count)
    //         const temp = [];
    //         for (let j = 0; j < calculatorCategories.length; j++) {
    //             temp.push(
    //                 (
    //                     await getUserCategoryProgress(
    //                         userId,
    //                         calculatorCategories[j].id
    //                     )
    //                 ).data.count
    //             );
    //         }
    //         categoriesCount.push(temp);
    //     }
    //     categories.push(calculatorCategories);
    // }

    // Add Calculator Inputs for each calculator type
    // for (let i = 0; i < typeId.length; i++) {
    //     for (let b = 0; b < categories[i].length; b++) {
    //         categoryId = categories[i][b].id;
    //         const res = await getCalculatorInputs(typeId[i], categoryId);
    //         inputs.push(res.data);
    //     }
    // }

    // Pass post data to the page via props
    return { props: {users} };
}
