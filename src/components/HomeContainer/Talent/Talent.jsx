import React from "react";
import Typography from "../../utility/Typography/Typography";
import styles from "./Talent.module.css"
import "../../../App.css";

const Talent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text_wrapper}>
        <Typography elType="h1Large" className={styles.heading}>
          Find the<br/> best <span>talent</span>
        </Typography>
        <div className={styles.content}>
          <div className={styles.rectangle}>
          </div>
          <Typography elType="body1">
            Finding the right people and building high performing teams can be hard. Most companies aren't tapping into the abundance of global talent. We're about to change that.
          </Typography>
        </div>
      </div>
    </section>
  );
};
export default Talent;
