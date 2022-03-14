import {getSession, useSession} from "next-auth/react";
import {getLogsByUser} from "../../services/CalculatorService";
import styles from "../../styles/Calculator.module.css";
const background3 = "/calculator_background_3.jpg";

export default function Logs(props) {
    const { data: session } = useSession();
    if (session) {
        return (
            <div
                className={styles.container}
                style={{backgroundImage: `url(${background3})`}}
            >
                <h1 className={styles.h1} data-testid="main_heading">
                    {session.user.name} Log Data
                </h1>
                <div className="container-md">

                </div>
            </div>
        );
    }
    return (
        <h1>Fail</h1>
    )
}

// This gets called at build time
export async function getServerSideProps(context) {
    const session = await getSession(context);
    let userId = null;
    let logs = [];
    if (session) {
        userId = session.user.id;
        logs = await getLogsByUser(userId)
        console.log(logs)
    } else {
    }

    return { props: { logs } };
}
