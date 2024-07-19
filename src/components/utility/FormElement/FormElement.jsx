import React, { useState } from "react";
import styles from "./FormElement.module.css";
import Typography from "../Typography/Typography";

const FormElement = ({ type, placeholder, value, onChange, onBlur, onFocus, error }) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = (e) => {
    setIsActive(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e) => {
    setIsActive(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  const inputElement =
    type === "textarea" ? (
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${error && styles.error} ${isActive && styles.active} ${
          styles.textarea
        }`}
      />
    ) : (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${error && styles.error} ${isActive && styles.active} ${
          styles.input
        }`}
      />
    );

  return (
    <div className={styles.formElement}>
      {inputElement}
      {error && (
        <Typography elType="error" className={styles.errorMessage}>
          {error}
        </Typography>
      )}
    </div>
  );
};

export default FormElement;
