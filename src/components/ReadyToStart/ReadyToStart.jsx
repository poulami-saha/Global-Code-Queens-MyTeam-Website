import React from "react";
import styles from "./ReadyToStart.module.css";
import footerImage from "../../assets/bg-pattern-home-6-about-5.svg";
import Button from "../utility/Button/Button.jsx";
import Typography from "../utility/Typography/Typography.js";

function ReadyToStart() {
  return (
    <div className={styles.footerContent}>
      <Typography elType="h2" className={styles.text}>
        Ready to get started?
      </Typography>

      <Button elType="primaryDark">contact us</Button>
      <img src={footerImage} alt="" className={styles.footerImg} />
    </div>
  );
}

export default ReadyToStart;
