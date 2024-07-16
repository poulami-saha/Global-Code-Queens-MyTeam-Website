import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
      <nav className={styles.header-nav}>
        <ul className={ mobileMenu ? '' :  styles['hide-mobile-menu']}>
          <img src={icon_close} alt="" className={styles.icon_close} onClick={toggleMenu} />
       <li className={styles.nav-list-item}><Link to="/">Home</Link></li>
          <li className={styles.nav-list-item}><Link to="/about">About</Link></li>
           <li className={styles.nav-list-item}><Link to="/contact">Contact Us</Link></li>
          {/* <button className={styles.btn}>contact us</button> */}
        </ul>
       
      </nav>
    
      </header>
      
  );
};

export default Header;
