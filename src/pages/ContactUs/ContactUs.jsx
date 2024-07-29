import React from "react";
import styles from "./ContactUs.module.css";
import { AskAbout, ContactForm } from "../../components/ContactContainer";

const ContactUs = () => {
  return (
    <section className={styles.ContactPage}>
      <div className={styles.body}>
        <AskAbout />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
