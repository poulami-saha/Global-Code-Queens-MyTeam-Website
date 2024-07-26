import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReadyToStart.module.css";
import Button from "../utility/Button/Button.jsx";
import Typography from "../utility/Typography/Typography.js";

function ReadyToStart() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
  };

  return (
    <div className={styles.ReadyToStart}>
      <div className={styles.mainContent}>
        <Typography elType="h2" className={styles.text}>
          Ready to get started?
        </Typography>

        <Button elType="primaryDark" onClick={navigateToContact}>
          contact us
        </Button>
      </div>
    </div>
  );
}

export default ReadyToStart;
