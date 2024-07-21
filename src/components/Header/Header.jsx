import React, { useState } from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames";
import icon_close from "../../assets/icon-close.svg";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu((toggleMenu) => !toggleMenu);
  };

  const listClass = classNames(styles["nav-list"], {
    [styles["hide-mobile-menu"]]: mobileMenu,
  });

  return (
    <header className={styles.header}>
      <img src={logo} alt="myteam logo" className={styles.logo} />
      <nav className={styles.headerNav}>
        <ul className={listClass}>
          <img src={icon_close} alt="" className={styles.icon_close} onClick={toggleMenu} />
          <li className={styles['nav-list-item']}>
            <Link to="/" className={styles['nav-link']}>Home</Link>
          </li>
          <li className={styles['nav-list-item']}>
            <Link to="/about" className={styles['nav-link']}>About</Link>
          </li>
          <li className={styles['nav-list-item']}>
            <Link to="/contact" className={classNames(styles['nav-link'], styles.btn)}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
