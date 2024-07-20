import React from "react";
import ContactForm from "../../Contact/ContactForm/ContactForm";
import styles from './ContactUs.module.css';
import AskAbout from "../../Contact/AskAbout/AskAbout";

const ContactUs = () => {
  return (
    <div className={styles.ContactPage}>
      <AskAbout />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
