import React from 'react';
import styles from './Footer.module.css'; 
import HeroFooter from './HeroFooter';
import SubFooter from './SubFooter';


const Footer = () => {
  return (
    <footer className={styles.footer}>
       <HeroFooter/>
       <SubFooter />
    </footer>
  );
};

export default Footer;
