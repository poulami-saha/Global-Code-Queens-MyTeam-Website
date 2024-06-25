import React from 'react';
import styles from './Footer.module.css'; 
import HeroFooter from './HeroFooter';


const Footer = () => {
  return (
    <footer className={styles.footer}>
       <HeroFooter/>
    </footer>
  );
};

export default Footer;
