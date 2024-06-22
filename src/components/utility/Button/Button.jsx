import React from "react";
import styles from './Button.module.css';

const Button = ({ type = "primary", disabled = false, onClick, children }) => {
  let buttonClass = styles.button;

  switch (type) {
    case 'primary':
      buttonClass += ` ${styles.buttonPrimary}`;
      buttonClass += !disabled ? ` ${styles.buttonPrimaryHover}` : ` ${styles.buttonPrimaryDisabled}`;
      break;
    case 'secondary':
      buttonClass += ` ${styles.buttonSecondary}`;
      buttonClass += !disabled ? ` ${styles.buttonSecondaryHover}` : ` ${styles.buttonSecondaryDisabled}`;
      break;
    case 'tertiary':
      buttonClass += ` ${styles.buttonTertiary}`;
      buttonClass += !disabled ? ` ${styles.buttonTertiaryHover}` : ` ${styles.buttonTertiaryDisabled}`;
      break;
    default:
      buttonClass += ` ${styles.buttonPrimary}`;
      buttonClass += !disabled ? ` ${styles.buttonPrimaryHover}` : ` ${styles.buttonPrimaryDisabled}`;
  }

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;
