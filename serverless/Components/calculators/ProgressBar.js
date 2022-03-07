import React from "react";
import styles from "../../styles/ProgressBar.module.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = (data) => {
  const categories = data.categories;

  return (
    <div className={styles.container}>
      {categories.map((category, i) => (
        <div className={styles.column}>
          <div className={styles.row} style={{ marginTop: "30px" }}>
            <h1 className={styles.h1}>{category.name}</h1>
          </div>
          <div className={styles.row}>
            <div className={styles.progressBar}>
              <CircularProgressbar
                value={category.id}
                text={category.id + "%"}
                styles={buildStyles({
                  textSize: "28px",
                  textColor: "black",
                  trailColor: "#A5A5AF",
                })}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
