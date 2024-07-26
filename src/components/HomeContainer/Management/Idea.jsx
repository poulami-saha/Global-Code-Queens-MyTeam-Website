import { Typography } from "../../utility";
import styles from "./Idea.module.css";

const Idea = ({ title, description, avatar }) => {
  return (
    <article className={styles.container}>
      <img src={avatar} alt="" className={styles.avatar} />
      <div className={styles.idea}>
        <Typography elType="body4" className={styles.title}>
          {title}
        </Typography>
        <Typography elType="body2" className={styles.description}>
          {description}
        </Typography>
      </div>
    </article>
  );
};
export default Idea;
