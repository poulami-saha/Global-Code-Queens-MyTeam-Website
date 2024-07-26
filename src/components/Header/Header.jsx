import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "../../assets/logo.svg";
import Button from "../utility/Button/Button";
import { Link } from "react-router-dom";
import closeIcon from "../../assets/icon-close.svg";
import hamburger from "../../assets/icon-hamburger.svg";
import Typography from "../utility/Typography/Typography";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate("/contact");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navLinks}>
          <img src={Logo} alt="logo" className={styles.logo} />
          <Link to="/" className={`${styles.navLink} ${styles.nav}`}>
            <Typography elType="body4">home</Typography>
          </Link>
          <Link to="/about" className={`${styles.navLink} ${styles.nav}`}>
            <Typography elType="body4">about</Typography>
          </Link>
        </div>

        <Button
          elType="primaryWhite"
          className={styles.nav}
          onClick={navigateToContact}
        >
          contact us
        </Button>
        <img
          src={hamburger}
          alt="hamburger"
          onClick={toggleMenu}
          className={styles.hamburgerIcon}
        />
      </header>
      <div className={`${styles.sideDrawer} ${isOpen ? styles.open : ""}`}>
        <nav className={styles.mobileNav}>
          <img
            src={closeIcon}
            className={styles.closeIcon}
            alt="close"
            onClick={toggleMenu}
          />
          <ul>
            <li onClick={toggleMenu}>
              <Link to="/" className={styles.navLink}>
                home
              </Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/about" className={styles.navLink}>
                about
              </Link>
            </li>
            <li>
              <Button
                elType="primaryWhite"
                className={styles.contact}
                onClick={navigateToContact && toggleMenu}
              >
                contact us
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && <div className={styles.backdrop} onClick={toggleMenu}></div>}
    </>
  );
};

export default Header;
