import React, { useState } from "react";
import styles from "./FormElement.module.css";
import Typography from "../Typography/Typography";

const FormElement = ({ type, placeholder, value, onChange, error }) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
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
        type="text"
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
