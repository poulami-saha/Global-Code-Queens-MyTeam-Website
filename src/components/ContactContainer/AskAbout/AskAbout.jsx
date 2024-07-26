import React from "react";
import { Typography } from "../../utility";
import styles from "./AskAbout.module.css";
import { QA_topics } from "./Topic.js";

const AskAbout = () => {
  return (
    <section className={styles.container}>
      <header className={styles.headings}>
        <Typography elType="h1Small" className={styles.header}>
          Contact
        </Typography>
        <Typography elType="h2" className={styles.title}>
          Ask us about
        </Typography>
      </header>
      <ul>
        {QA_topics.map((topic) => (
          <li key={topic.id} className={styles.topic_li}>
            <img src={topic.img} alt={topic.img} />
            <Typography elType="body4" className={styles.topic}>
              {topic.topic}
            </Typography>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AskAbout;
