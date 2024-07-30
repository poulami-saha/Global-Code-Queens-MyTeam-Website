import React from "react";
import { Typography } from "../../utility";
import styles from "./SuccessStories.module.css";

const SuccessStory = ({ quote, name, title, avatar, altText }) => {
  return (
    <article className={styles.quote}>
      <Typography elType="body2">“{quote}”</Typography>
      <Typography elType="h3Large" className={styles.name}>
        {name}
      </Typography>
      <Typography elType="body3" className={styles.caption}>
        {title}
      </Typography>
      <div className={styles.image}>
        <img src={avatar} alt={altText} />
      </div>
    </article>
  );
};

export default SuccessStory;
