import React from "react";
import { Typography } from "../utility";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";

import { Link } from "react-router-dom";

import FacebookIcon from "../../assets/icon-facebook.svg";
import PinterestIcon from "../../assets/icon-pinterest.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";

const Footer = () => {
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

        <address className={styles.location}>
          <Typography elType="body2">997 Hillcrest Lane</Typography>
          <Typography elType="body2">Irvine, CA</Typography>
          <Typography elType="body2">California 92714</Typography>
          <Typography elType="body2">Call Us: 949-833-7432</Typography>
        </address>
      </div>

      <div className={styles.socialContent}>
        <div className={styles.socialLinks}>
          <img
            src={FacebookIcon}
            className={styles.socialLink}
            alt="facebook"
          />
          <img
            src={PinterestIcon}
            className={styles.socialLink}
            alt="Pinterest"
          />
          <img src={TwitterIcon} className={styles.socialLink} alt="twitter" />
        </div>

        <Typography
          elType="body2"
          className={`${styles.copyright} ${styles.avoidWrap}`}
        >
          Copyright 2020. All Rights Reserved
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
