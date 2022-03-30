
import {getUserData, getAdminData, } from "../services/adminService";
import AccountDashboard from "../Components/admin/AdminPages/accountDashboard";
import ShowCalculators from "../Components/admin/AdminPages/showCalculators";
import {getCalculatorTypes} from "../services/CalculatorService";
import {  useState, useMemo } from 'react';
import Sidebar from "../Components/admin/projects/Sidebar";
import {getProjectsList} from "../services/ProjectService";
import AdminProjectsLayout from "../Components/admin/projects/adminProjectsLayout";
import {DashboardViewContext} from "../Contexts/DashboardViewContext";


export default function adminDashboard(props) {


    const allProjects = props.allProjects;

    const [dashboardView, setDashboardView] = useState('projects');
    const value = useMemo(
        () => ({ dashboardView, setDashboardView }),
        [dashboardView]
    );
    // function showUserPage() {
    //     setCalculatorVisibility(false);
    //     setUserVisibility(true);
    // }
    //
    // function showCalculatorPage() {
    //     setUserVisibility(false);
    //     setCalculatorVisibility(true);
    // }

  return (



    // <div className={styles.main}>
    //     <div className="w-48 h-full shadow-md bg-white px-1 absolute">
    //         <ul className="relative">
    //             <li className="relative">
    //                 <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
    //                    data-mdb-ripple="true" data-mdb-ripple-color="dark" onClick={showUserPage}>Users</a>
    //             </li>
    //             <li className="relative">
    //                 <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
    //                   data-mdb-ripple="true" data-mdb-ripple-color="dark" onClick={showCalculatorPage}>Calculators</a>
    //             </li>
    //             <li className="relative">
    //                 <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
    //                    data-mdb-ripple="true" data-mdb-ripple-color="dark">Projects</a>
    //             </li>
    //         </ul>
    //     </div>
    //
    // </div>
    <DashboardViewContext.Provider value={value} >
        <div className=" flex ">
            {/*<AdminSidebar/>*/}
            {/*<AdminSidebar/>*/}
            <Sidebar/>

            {/*users*/}
            {dashboardView === 'users'&&
            <AccountDashboard users={props.users} admins={props.admins} />}

            {/*calculator*/}
            {dashboardView ===  'calculator' &&
            <ShowCalculators types={props.types} />}

            {/*projects*/}
            { dashboardView ===  'projects' &&
            <AdminProjectsLayout projects={allProjects}/>}

        </div>

      </DashboardViewContext.Provider >

    // {/*<Sidebar/>*/}
    //
    //
    // {/*<div className={styles.content}>*/}
    // {/*        <div style={{display: userVisibility ? "block":"none"}}>*/}
    // {/*            <AccountDashboard users={props.users} admins={props.admins}/>*/}
    // {/*        </div>*/}
    // {/*        <div className={styles.calculators} style={{display: calculatorVisibility ? "block":"none"}}>*/}
    // {/*            <ShowCalculators types={props.types}/>*/}
    // {/*        </div>*/}
    // {/*    </div>*/}


  );
}

// This gets called at build time
export async function getServerSideProps() {
  // Adds all users types in a list
  const userRes = await getUserData();
  const users = userRes.data;

  //gets project data
  const projectsRes = await getProjectsList();
  const allProjects = projectsRes.data;


    // Adds all admins types in a list
  const adminRes = await getAdminData();
  const admins = adminRes.data;

  const typesRes = await getCalculatorTypes();
  const types = typesRes.data;



  // Pass post data to the page via props
  return { props: { allProjects, users, admins, types } };
}
