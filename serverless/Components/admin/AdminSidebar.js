import styles from "../../styles/AdminSidebar.module.css";
import Link from 'next/link'
import {MdAccountBox} from "react-icons/Md";
import {ImCalculator} from "react-icons/Im";
import {AiFillProject} from "react-icons/Ai";



export default function adminSidebar() {

    return (
        <div className={styles.container}>
            <Link href="/admin/adminDashboard">
                <div className={styles.navbarComponent}>
                    <MdAccountBox className={styles.icons}/>
                    <p className={styles.text}>Accounts</p>
                </div>
            </Link>
            <Link href="/admin/projects">
                <div className={styles.navbarComponent}>
                    <AiFillProject className={styles.icons}/>
                    <p className={styles.text}>Projects</p>
                </div>
            </Link>
            <Link href="/admin/calculator">
                <div className={styles.navbarComponent}>
                    <ImCalculator className={styles.icons}/>
                    <p className={styles.text}>Calculators</p>
                </div>
            </Link>
        </div>
    );
}
