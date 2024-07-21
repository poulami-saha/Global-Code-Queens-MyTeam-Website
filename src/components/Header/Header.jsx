import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <img src={logo} alt="myteam logo" className={styles["header-logo"]} />
      <nav className={styles.header - nav}>
        <ul className={mobileMenu ? "" : styles[hide - mobile - menu]}>
          <img
            src={icon_close}
            alt=""
            className={styles[icon - close]}
            onClick={toggleMenu}
          />
          <li className={styles[nav - list - item]}>
            <Link to="/" className={styles[nav - link]}>
              Home
            </Link>
          </li>
          <li className={styles[nav - list - item]}>
            <Link to="/about" className={styles[nav - link]}>
              About
            </Link>
          </li>
          <li className={styles.btn}>
            <Link to="/contact" className={styles[nav - link]}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
