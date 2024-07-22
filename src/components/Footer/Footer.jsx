import React from "react";
import Typography from "../utility/Typography/Typography";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import twitter from "../../assets/icon-twitter.svg";
import { Link } from "react-router-dom";

function Footer() {
  const today = new Date();
  const thisYear = today.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <div className={styles.footerNavigation}>
          <img src={logo} alt="logo" />
          <div className={styles.footerLinks}>
            <Link to="/" className={styles.link}>
              <Typography elType="body1">home</Typography>
            </Link>
            <Link to="/about" className={styles.link}>
              <Typography elType="body1">about</Typography>
            </Link>
          </div>
        </div>

        <div className={styles.location}>
          <Typography elType="body1">997 Hillcrest Lane</Typography>
          <Typography elType="body1">Irvine, CA</Typography>
          <Typography elType="body1">California 92714</Typography>
          <Typography elType="body1">Call Us: 949-833-7432</Typography>
        </div>
      </div>

      <div className={styles.socialContent}>
        <div className={styles.socialLinks}>
          <img src={facebook} alt="facebook" />
          <img src={pinterest} alt="pinterest" />
          <img src={twitter} alt="X" />
        </div>

        <Typography elType="body1" className={styles.copyright}>
          Copyright {thisYear}. All Rights Reserved
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
