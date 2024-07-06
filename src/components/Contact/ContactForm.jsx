import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import FormElement from "../utility/FormElement/FormElement";
import Button from "../utility/Button/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: { value: "", error: "", touched: false },
    email: { value: "", error: "", touched: false },
    companyName: { value: "", error: "", touched: false },
    title: { value: "", error: "", touched: false },
    message: { value: "", error: "", touched: false },
  });

  const handleChange = (inputField) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [inputField]: {
        ...prevState[inputField],
        value: value,
        error: "",
        touched: true,
      },
    }));
  };

  // check if email is valid
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = (inputField) => () => {
    if (!formData[inputField].value) {
      setFormData((prevState) => ({
        ...prevState,
        [inputField]: {
          ...prevState[inputField],
          error: "This field is required",
        },
      }));
    } else if (
      inputField === "message" &&
      formData[inputField].value.length < 25
    ) {
      setFormData((prevState) => ({
        ...prevState,
        [inputField]: {
          ...prevState[inputField],
          error: "Message must be at least 25 characters",
        },
      }));
    } else if (
      inputField === "email" &&
      !isEmailValid(formData[inputField].value)
    ) {
      setFormData((prevState) => ({
        ...prevState,
        [inputField]: {
          ...prevState[inputField],
          error: "Invalid email address",
        },
      }));
    }
  };
  const handleFocus = (inputField) => () => {
    setFormData((prevState) => ({
      ...prevState,
      [inputField]: { ...prevState[inputField], error: "", touched: true },
    }));
  };
  const isFormValid = () => {
    return !Object.values(formData).some(
      (field) => field.error || !field.touched
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: { value: "", error: "", touched: false },
      email: { value: "", error: "", touched: false },
      companyName: { value: "", error: "", touched: false },
      title: { value: "", error: "", touched: false },
      message: { value: "", error: "", touched: false },
    });
  };
  return (
    <form className={styles.ContactForm}>
      <div className={styles.ContactFormInputs}>
        <FormElement
          type="text"
          placeholder="Name"
          value={formData.name.value}
          onChange={handleChange("name")}
          onBlur={handleBlur("name")}
          onFocus={handleFocus("name")}
          error={formData.name.error}
        />
        <FormElement
          type="text"
          placeholder="Email Address"
          value={formData.email.value}
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          onFocus={handleFocus("email")}
          error={formData.email.error}
        />
        <FormElement
          type="text"
          placeholder="Company Name"
          value={formData.companyName.value}
          onChange={handleChange("companyName")}
          onBlur={handleBlur("companyName")}
          onFocus={handleFocus("companyName")}
          error={formData.companyName.error}
        />
        <FormElement
          type="text"
          placeholder="Title"
          value={formData.title.value}
          onChange={handleChange("title")}
          onBlur={handleBlur("title")}
          onFocus={handleFocus("title")}
          error={formData.title.error}
        />
        <FormElement
          type="textarea"
          placeholder="Message"
          value={formData.message.value}
          onChange={handleChange("message")}
          onBlur={handleBlur("message")}
          onFocus={handleFocus("message")}
          error={formData.message.error}
        />
      </div>
      <Button type="secondary" elType="white" onClick={handleSubmit} disabled={!isFormValid()}>
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
