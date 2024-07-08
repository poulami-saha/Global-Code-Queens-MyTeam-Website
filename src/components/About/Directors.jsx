import Typography from "../utility/Typography/Typography";
import topImage from "../../assets/bg-pattern-about-2-contact-1.svg";
import bottomImage from "../../assets/bg-pattern-home-4-about-3.svg";
import styles from "./Directors.module.css";
import ProfileCard from "./ProfileCard";
import { directors } from "./directorsData";

const Directors = () => {
  return (
    <section className={styles.container}>
      <img src={topImage} alt="background-image1" className={styles.topImage} />
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
      <img
        src={bottomImage}
        alt="background-image2"
        className={styles.bottomImage}
      />
    </section>
  );
}

export default Directors