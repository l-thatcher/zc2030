import React from "react";
import styles from "../../styles/ProgressBar.module.css";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = (data) => {

    const inputs = data.inputs[data.value]

    return (
        <div className={styles.container}>
            <div className={styles.column} style={{marginTop: "10px"}}>
                <div className={styles.row} style={{marginTop: "30px"}}>
                    <h1 className={styles.h1}>{data.category[0]}</h1>
                </div>
                <div className={styles.row}>
                    <div className={styles.progressBar}>
                        <CircularProgressbar
                            value={66}
                            text={`66%`}
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
                <div className={styles.row} style={{marginTop: "30px"}}>
                    <h1 className={styles.h1} data-testid="category2_heading">
                        {data.category[1]}
                    </h1>
                </div>
                <div className={styles.row}>
                    <div className={styles.progressBar}>
                        <CircularProgressbar
                            value={3}
                            text={`3%`}
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
                <div className={styles.row} style={{marginTop: "30px"}}>
                    <h1 className={styles.h1} data-testid="category3_heading">
                        {data.category[2]}
                    </h1>
                </div>
                <div className={styles.row}>
                    <div className={styles.progressBar}>
                        <CircularProgressbar
                            value={77}
                            text={`77%`}
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
    );
};

export default ProgressBar;
