import React from "react";
import Typography from "../../utility/Typography/Typography";
import styles from "./SuccessStories.module.css";

const SuccessStory = ({ quote, name, title, avatar, altText }) => {
  return (
    <div className={styles.SuccessStories_content}>
      <Typography elType="body2">“{quote}”</Typography>
      <Typography elType="h3Large" className={styles.SuccessStories_name}>
        {name}
      </Typography>
      <Typography elType="body3" className={styles.SuccessStories_caption}>
        {title}
      </Typography>
      <div className={styles.SuccessStories_image}>
        <img src={avatar} alt={altText} />
      </div>
    </div>
  );
};

export default SuccessStory;
