import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import icon_close from "../../assets/icon-close.svg";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) :
   setMobileMenu(true);
  };
  return (
    <header className={styles.header}>
      <img src={logo} alt="myteam logo" className={styles.logo} />
      <nav>
        <ul className={ mobileMenu ? '' :  styles['hide-mobile-menu']}>
          <img src={icon_close} alt="" className={styles.icon_close} onClick={toggleMenu} />
         <li>home</li>
          <li>about</li>
        </ul>
          <button className={styles.btn}>contact us</button>
      </nav>
    
    </header>
  );
};

export default Header;
