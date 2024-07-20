import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Button.module.css";

const buttonColorStyle = {
  primary: {
    white: {
      color: "#fff",
      borderColor: "#fff",
      hoverBackgroundColor: "white",
      hoverColor: "#002529",
    },
    
    dark: {
      color: "#012F34",
      borderColor: "#012F34",
      hoverBackgroundColor: "#012F34",
      hoverColor: "#fff",
    },
  },
  secondary: {
    color: "#002529",
    hoverBackgroundColor: "#79C8C7",
    hoverColor: "#002529",
  },
};

const Button = ({ type = "primary", elType, disabled = false, onClick, children, className }) => {
  const isSecondary = type === "secondary";
  const buttonClass = classNames(styles.button, className, {
    [styles.disabled]: disabled,
    [styles.buttonSecondary]: isSecondary,
  });

  const buttonStyle = isSecondary ? buttonColorStyle.secondary : buttonColorStyle.primary[elType];
  const colorConfig = {
    "--button-color": buttonStyle.color,
    "--button-border-color": buttonStyle.borderColor,
    "--button-hover-background-color": buttonStyle.hoverBackgroundColor,
    "--button-hover-color": buttonStyle.hoverColor,
  };

  return (
    <button
      className={buttonClass}
      onClick={disabled ? null : onClick}
      disabled={disabled}
      style={colorConfig}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  elType: PropTypes.oneOf(["white", "dark"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;