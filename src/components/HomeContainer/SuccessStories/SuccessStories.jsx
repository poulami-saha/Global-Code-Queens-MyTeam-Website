import React from "react";
import { Typography } from "../../utility";
import styles from "./SuccessStories.module.css";
import { stories } from "./storiesData";
import SuccessStory from "./SuccessStory";

const SuccessStories = () => {
  return (
    <section className={styles.SuccessStories}>
      <div className={styles.wrapper}>
        <Typography elType="h2" className={styles.heading}>
          Delivering real results for top companies. Some of our{" "}
          <span>success stories.</span>
        </Typography>

        <article className={styles.contents}>
          {stories.map(({ id, quote, name, title, avatar, altText }) => {
            return (
              <SuccessStory
                key={id}
                quote={quote}
                name={name}
                title={title}
                avatar={avatar}
                altText={altText}
              />
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default SuccessStories;
