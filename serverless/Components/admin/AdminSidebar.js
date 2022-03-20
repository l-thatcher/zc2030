import styles from "../../styles/AdminSidebar.module.css";
import Link from "next/link";
import { MdAccountBox } from "react-icons/md";
import { ImCalculator } from "react-icons/im";
import { AiFillProject } from "react-icons/ai";

export default function adminSidebar() {
  return (
    <div className={styles.container}>
      <Link href="/admin/adminDashboard">
        <div className={styles.navbarComponent}>
          <MdAccountBox className={styles.icons} />
          <p className={styles.text}>Accounts</p>
        </div>
      </Link>
      <Link href="/admin/adminProjects">
        <div className={styles.navbarComponent}>
          <AiFillProject className={styles.icons} />
          <p className={styles.text}>Projects</p>
        </div>
      </Link>
      <Link href="/admin/addCalculator">
        <div className={styles.navbarComponent}>
          <ImCalculator className={styles.icons} />
          <p className={styles.text}>Calculators</p>
        </div>
      </Link>
    </div>
  );
}
