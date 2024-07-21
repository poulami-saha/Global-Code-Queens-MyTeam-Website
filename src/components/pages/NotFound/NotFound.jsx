import React from "react";
import Typography from "../../utility/Typography/Typography";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={styles.NotFound_container}>
    <article className={styles.NotFound_content}>
      <Typography elType="h1Small" className={styles.NotFound_heading}>Page not found</Typography>
      <Typography elType="body1">We can’t seem to find the page you’re looking for.<br/>
      Try going back to the previous page.</Typography>
      </article>
      </section>
  );
};

export default NotFound;
