import AdminSidebar from "../../Components/admin/AdminSidebar";
import styles from "../../styles/AdminDashboard.module.css";
import { getUserData, getAdminData } from "../../services/adminService";
import AccountDashboard from "../../Components/admin/AdminPages/accountDashboard";

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
        <div className="w-48 h-full shadow-md bg-white px-1 absolute">
            <ul className="relative">
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                       data-mdb-ripple="true" data-mdb-ripple-color="dark">Users</a>
                </li>
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                      data-mdb-ripple="true" data-mdb-ripple-color="dark">Calculators</a>
                </li>
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                       data-mdb-ripple="true" data-mdb-ripple-color="dark">Projects</a>
                </li>
            </ul>
        </div>
        <div className={styles.content}>
            <AccountDashboard users={props.users} admins={props.admins} />
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
