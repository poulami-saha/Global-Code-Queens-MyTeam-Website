import React, { useState } from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames";
import icon_close from "../../assets/icon-close.svg";
import icon_hamburger from "../../assets/icon-hamburger.svg";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const standardNavClass = classNames(styles.headerNav,
    styles.standardHeaderNav,
  );

  const mobileNavClass = classNames(styles.headerNav,
    styles.mobileHeaderNav,
    { [styles.hideMobileMenu]: !mobileMenuOpen, }
  );

  const showOrHideHamburger = classNames(styles.icon_hamburger, {
    [styles.showHamburger]: !mobileMenuOpen,
  })

  const navLinks = (
    <>
      <li className={styles['nav-list-item']}>
        <Link to="/" className={styles['nav-link']}>Home</Link>
      </li>
      <li className={styles['nav-list-item']}>
        <Link to="/about" className={styles['nav-link']}>About</Link>
      </li>
      <li className={styles['nav-list-item']}>
        <Link to="/contact" className={classNames(styles['nav-link'], styles.btn)}>Contact Us</Link>
      </li>
    </>
  )

  const standardNavMenu = (
    <nav className={standardNavClass}>
      <ul className={styles.standardNavList}>
        {navLinks}
      </ul>
    </nav>
  );

  const mobileNavMenu = (
    <>
      <nav className={mobileNavClass}>
        <ul className={styles.mobileNavList}>
          <img src={icon_close} alt="close main nav menu" className={styles.icon_close} onClick={toggleMenu} />
          {navLinks}
        </ul>
      </nav>
      <img src={icon_hamburger} alt="open main nav menu" className={showOrHideHamburger} onClick={toggleMenu} />
    </>
  );

  return (
    <header className={styles.header}>
      <img src={logo} alt="myteam logo" className={styles.logo} />
      {standardNavMenu}
      {mobileNavMenu}
    </header>
  );
};

export default Header;
