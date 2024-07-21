import React from "react";
import styles from "./ReadyToStart.module.css";
import Button from "../utility/Button/Button.jsx";
import Typography from "../utility/Typography/Typography.js";

function ReadyToStart() {
  return (
    <div className={styles.ReadyToStart}>
      <div className={styles.mainContent}>
        <Typography elType="h2" className={styles.text}>
          Ready to get started?
        </Typography>

        <Button elType="primaryDark">contact us</Button>
      </div>
    </div>
  );
}

export default ReadyToStart;
