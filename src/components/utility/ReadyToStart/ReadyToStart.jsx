import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReadyToStart.module.css";
import Button from "../Button/Button.jsx";
import Typography from "../Typography/Typography.js";

const ReadyToStart = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
  };

  return (
    <section className={styles.container}>
      <div className={styles.mainContent}>
        <Typography elType="h2" className={styles.text}>
          Ready to get started?
        </Typography>

        <Button elType="primaryDark" onClick={navigateToContact}>
          contact us
        </Button>
      </div>
    </section>
  );
};

export default ReadyToStart;
