import React from "react";
import ContactForm from "../../Contact/ContactForm";
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={styles.ContactPage}>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
