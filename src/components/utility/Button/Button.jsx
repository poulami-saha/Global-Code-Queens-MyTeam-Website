import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Button.module.css";

const Button = ({ type = "primary", elType, disabled = false, onClick, children, className }) => {
  const isSecondary = type === "secondary";
  const buttonClass = classNames(styles.button, className, {
    [styles.disabled]: disabled,
    [styles.buttonSecondary]: isSecondary,
    [styles.buttonPrimaryDark]: type === "primary" && elType === "dark",
    [styles.buttonPrimaryWhite]: type ==="primary" && elType === "white",
    [styles.buttonShowMore]: elType === "showMore",
    [styles.buttonHideMore]: elType === "hideMore",
  })

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
  elType: PropTypes.oneOf(["white", "dark", "showMore", "hideMore"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;