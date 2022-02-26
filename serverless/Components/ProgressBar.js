import React from "react";
import styles from "../styles/ProgressBar.module.css"
import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = (data) => {


    return (

        <div className={styles.container}>

            <div className={styles.column} style={{marginTop:"10px"}}>
                <div className={styles.row} style={{marginTop:"30px"}}>
                    <h1 className={styles.h1}>{data.category[0]}</h1>
                </div>
                <div className={styles.row}>
                    <div className={styles.progressBar}>
                        <CircularProgressbar
                            value={data.results[0]}
                            text={`${data.results[0]}%`}
                            styles={buildStyles({
                                textSize: "28px",
                                textColor: "black",
                                trailColor: "#A5A5AF",
                            })}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.column}>
                <div className={styles.row} style={{marginTop:"30px"}}>
                    <h1 className={styles.h1}>{data.category[1]}</h1>
                </div>
                <div className={styles.row}>
                    <div className={styles.progressBar}>
                        <CircularProgressbar
                            value={data.results[1]}
                            text={`${data.results[1]}%`}
                            styles={buildStyles({
                                textSize: "28px",
                                textColor: "black",
                                trailColor: "#A5A5AF"
                            })}/>
                    </div>
                </div>
            </div>

            <div className={styles.column}>
                <div className={styles.row} style={{marginTop:"30px"}}>
                    <h1 className={styles.h1}>{data.category[2]}</h1>
                </div>
                <div className={styles.row}>
                    <div className={styles.progressBar}>
                        <CircularProgressbar
                            value={data.results[2]}
                            text={`${data.results[2]}%`}
                            styles={buildStyles({
                                textSize: "28px",
                                textColor: "black",
                                trailColor: "#A5A5AF",
                            })}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProgressBar;

