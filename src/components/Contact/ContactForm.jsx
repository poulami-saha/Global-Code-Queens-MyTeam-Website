import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import FormElement from "../utility/FormElement/FormElement";
import Button from "../utility/Button/Button";

const ContactForm = () => {
  const initialState = {
    name: { value: "", error: "", touched: false, placeholder: "Name", type: "text" },
    email: { value: "", error: "", touched: false, placeholder: "Email Address", type: "text" },
    companyName: { value: "", error: "", touched: false, placeholder: "Company Name", type: "text" },
    title: { value: "", error: "", touched: false, placeholder: "Title", type: "text" },
    message: { value: "", error: "", touched: false, placeholder: "Message", type: "textarea" },
  };
  
  const [formData, setFormData] = useState(initialState);

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
    console.log('formData'+ formData)
    setFormData(initialState);
  };
  return (
    <form className={styles.flexColumnStart} onSubmit={handleSubmit}>
    {Object.entries(formData).map(([key, { value, error, placeholder, type }]) => (
      <FormElement
        key={key}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange(key)}
        onBlur={handleBlur(key)}
        onFocus={handleFocus(key)}
        error={error}
      />
    ))}
    <Button  type="secondary" disabled={!isFormValid()}>
      Submit
    </Button>
  </form>
  );
};

export default ContactForm;
