import React from "react";
import styles from "./Home.module.css";
import Typography from "../../utility/Typography/Typography";
import pattern3 from "../../../assets/bg-pattern-home-3.svg";
import iconcog from "../../../assets/icon-cog.svg";
import iconchart from "../../../assets/icon-chart.svg";
import iconperson from "../../../assets/icon-person.svg";
import SuccessStories from "../../HomeContainer/SuceessStories/SuccessStories";

const Home = () => {
  return (
    <section className={styles.Home2}>
      <div className={styles.Home__secondsection}>
        <div className={styles.Home__secondsection__firstContainer}>
          <div className={styles.Home2__Heading}>
            <Typography elType="h2">
              Build & manage distributed teams like no one else.
            </Typography>
          </div>
          <div className={styles.Home__pattern}>
            <img src={pattern3} alt="pattern-3" />
          </div>
        </div>
        <div className={styles.Home__secondsection__secondContainer}>
          <div className={styles.Home__secondsection__secondContainer__first}>
            <img src={iconperson} alt="icon-person" />
            <Typography elType="body1" className={styles.Home2__body1}>Experienced Individuals</Typography>
            <Typography elType="body2" className={styles.Home2__body2}>
              Our network is made up of highly experienced professionals who are
              passionate about what they do.
            </Typography>
          </div>
          <div className={styles.Home__secondsection__secondContainer__second}>
            <img src={iconcog} alt="icon-cog" />
            <Typography elType="body1" className={styles.Home2__body1}>Easy to Implement</Typography>
            <Typography elType="body2" className={styles.Home2__body2}>
              Our processes have been refined over years of implementation
              meaning our teams always deliver.
            </Typography>
          </div>
          <div className={styles.Home__secondsection__secondContainer__third}>
            <img src={iconchart} alt="icon-chart" />
            <Typography elType="body1" className={styles.Home2__body1}>Enhanced Productivity</Typography>
            <Typography elType="body2" className={styles.Home2__body2}>
              Our customized platform with in-built analytics helps you manage
              your distributed teams.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
