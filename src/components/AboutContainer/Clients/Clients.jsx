import styles from "./Clients.module.css";
import { Typography } from "../../utility";

import verge from "../../../assets/logo-the-verge.png";
import jakarta from "../../../assets/logo-jakarta-post.png";
import guardian from "../../../assets/logo-the-guardian.png";
import techRadar from "../../../assets/logo-tech-radar.png";
import gadgetsNow from "../../../assets/logo-gadgets-now.png";

const Clients = () => {
  return (
    <section className={styles.container}>
      <div className={styles.body}>
        <Typography elType="h2" className={styles.title}>
          Some of our clients
        </Typography>
        <div className={styles.news}>
          <img src={verge} alt="The Verge" className={styles.logoVerge} />
          <img
            src={jakarta}
            alt="The Jakarta Post"
            className={styles.logoJakarta}
          />
          <img
            src={guardian}
            alt="The Guardian"
            className={styles.logoGuardian}
          />
          <img src={techRadar} alt="Tech Radar" className={styles.logoTechRadar} />
          <img
            src={gadgetsNow}
            alt="Gadgets Now"
            className={styles.logoGadgets}
          />
        </div>
      </div>
    </section>
  );
};
export default Clients;
