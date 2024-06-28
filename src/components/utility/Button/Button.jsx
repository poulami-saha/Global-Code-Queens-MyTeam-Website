import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Button.module.css";

const buttonColorStyle = {
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
};

const Button = ({ style, disabled = false, onClick, children, className }) => {
  const buttonClass = classNames(styles.button, className, {
    [styles.disabled]: disabled,
  });

  const colorConfig = {
    "--button-color": buttonColorStyle[style].color,
    "--button-border-color": buttonColorStyle[style].borderColor,
    "--button-hover-background-color":
      buttonColorStyle[style].hoverBackgroundColor,
    "--button-hover-color": buttonColorStyle[style].hoverColor,
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
  style: PropTypes.oneOf(Object.keys(buttonColorStyle)).isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
