import React from "react";
import styles from "./ContactUs.module.css";
import { AskAbout, ContactForm } from "../../components/ContactContainer";

const ContactUs = () => {
  return (
    <div className={styles.ContactPage}>
      <AskAbout />
      <ContactForm />
    </div>
  );
};

export default ContactUs;