import { Typography } from "../utility";
import styles from "./Directors.module.css";
import ProfileCard from "./ProfileCard";

import { directors } from "./directorsData";

const Directors = () => {
  return (
    <section className={styles.container}>
      <article className={styles.article}>
        <Typography elType="h2" className={styles.title}>
          Meet the directors
        </Typography>
        <div className={styles.profiles}>
          {directors.map((director, idx) => (
            <ProfileCard key={idx} person={director} />
          ))}
        </div>
      </article>
    </section>
  );
};

export default Directors;
