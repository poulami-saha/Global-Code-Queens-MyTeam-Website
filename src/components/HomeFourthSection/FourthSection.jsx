import React from "react";
import styles from "./FourthSection.module.css";
import footerImage from "../../assets/bg-pattern-home-6-about-5.svg";
import Button from "../utility/Button/Button.jsx";
import Typography from "../utility/Typography/Typography";

function FourthSection() {
  return (
    <div className={styles.footerContent}>
      <Typography elType="h2" className={styles.text}>
        Ready to get started?
      </Typography>

      <Button type="secondary">contact us</Button>
      <img src={footerImage} alt="" className={styles.footerImg} />
    </div>
  );
}

export default FourthSection;