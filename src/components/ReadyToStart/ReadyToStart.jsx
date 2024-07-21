import React from "react";
import styles from "./ReadyToStart.module.css";
import mainImage from "../../assets/bg-pattern-home-6-about-5.svg";
import Button from "../utility/Button/Button.jsx";
import Typography from "../utility/Typography/Typography.js";

function ReadyToStart() {
  return (
    <div className={styles.mainContent}>
      <Typography elType="h2" className={styles.text}>
        Ready to get started?
      </Typography>

      <Button elType="primaryDark">contact us</Button>
      <img src={mainImage} alt="" className={styles.mainImg} />
    </div>
  );
}

export default ReadyToStart;
