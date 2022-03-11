import {Nav} from "react-bootstrap";
import styles from "../styles/AdminDashboard.module.css";



export default function adminSidebar() {

    return (
        <div className={styles.container}>
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
                 activeKey="/home"
                 onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"/>
                <Nav.Item>
                    <Nav.Link href="/home">Accounts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Calculators</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Projects</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}
