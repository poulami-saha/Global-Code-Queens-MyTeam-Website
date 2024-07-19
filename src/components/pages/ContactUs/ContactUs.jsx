import React from "react";
import ContactForm from "../../Contact/ContactForm/ContactForm";
import styles from './ContactUs.module.css';
import AskAbout from "../../Contact/AskAbout/AskAbout";

const ContactUs = () => {
  return (
    <main className={styles.ContactPage}>
      <AskAbout />
      <ContactForm />
    </main>
  );
};

export default ContactUs;
