import Typography from "../utility/Typography/Typography";
import styles from "./AboutDetails.module.css";
import containerImage from "../../assets/bg-pattern-about-1-mobile-nav-1.svg";
const AboutDetails = () => {
  return (
    <section className={styles.container}>
      <Typography elType="h1Small">About</Typography>
      <article>
        <div></div>
        <Typography elType="body1">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </Typography>
      </article>

      <img
        src={containerImage}
        alt="background-image"
        className={styles.containerImage}
      />
    </section>
  );
};

export default AboutDetails;
