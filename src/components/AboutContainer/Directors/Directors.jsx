<<<<<<<< HEAD:src/components/AboutContainer/Directors/Directors.jsx
import { Typography } from "../../utility";
import styles from "./Directors.module.css";
import ProfileCard from "../ProfileCard/ProfileCard";

========
import Typography from "../../utility/Typography/Typography";
import styles from "./Directors.module.css";
import ProfileCard from "../ProfileCard";
>>>>>>>> 0eee76d73439fcc9195437c957d9bebe393ce985:src/components/About/Directors/Directors.jsx
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
