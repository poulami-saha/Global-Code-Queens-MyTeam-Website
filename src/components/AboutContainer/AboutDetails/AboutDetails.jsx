import { Typography } from "../../utility";
import styles from "./AboutDetails.module.css";

const AboutDetails = () => {
  return (
    <section className={styles.container}>
      <div className={styles.body}>
        <Typography elType="h1Small" className={styles.headline}>About</Typography>
        <article className={styles.aboutus}>
          <div className={styles.bar}></div>
          <Typography elType="body1">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation and
            deliver incredible outcomes. Talented, diverse teams shape the best
            products and experiences. We’ll bring those teams to you.
          </Typography>
        </article>
      </div>
    </section>
  );
};

export default AboutDetails;
