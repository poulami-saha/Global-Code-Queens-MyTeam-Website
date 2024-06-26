import React from "react";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import twitter from "../../assets/icon-twitter.svg";
import styles from './Footer.module.css'

function SubFooter() {
  return (
    <div className={styles.footerInfo}>
     
      <div className={styles.logoDesc}>
        <img src={logo} alt="logo" />
        <ul className={styles.logoText}>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>

      <div className={styles.location}>
        <ul>
          <li>997 Hillcrest Lane</li>
          <li>Invine, CA</li>
          <li>California 92714</li>
          <li>Call Us: 949-833-7432</li>
        </ul>
      </div>

      <div className={styles.socialLinks}>

        <div>
          <ul>
            <li>
              <img src={facebook} alt="facebook" />
            </li>
            <li>
              <img src={pinterest} alt="pinterest" />
            </li>
            <li>
              <img src={twitter} alt="X" />
            </li>
          </ul>
        </div>

        <p>Copyright 2024. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default SubFooter;
