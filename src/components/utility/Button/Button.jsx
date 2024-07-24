import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ elType, disabled = false, onClick, children, className }) => {
  const buttonClass = classNames(styles.button, className, {
    [styles.disabled]: disabled,
    [styles.buttonPrimaryDark]: elType === "primaryDark",
    [styles.buttonPrimaryWhite]: elType === "primaryWhite",
    [styles.buttonSecondary]: elType === "secondary",
    [styles.buttonShowMore]: elType === "showMore",
    [styles.buttonHideMore]: elType === "hideMore",
  });

  return (
    <button
      className={buttonClass}
      onClick={disabled ? null : onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  elType: PropTypes.oneOf([
    "primaryWhite",
    "primaryDark",
    "secondary",
    "showMore",
    "hideMore",
  ]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
