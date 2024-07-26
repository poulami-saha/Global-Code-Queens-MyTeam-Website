import React from "react";
import styles from "./Typography.module.css";
import classNames from "classnames";
import PropTypes from "prop-types";

export const TypographyElements = {
  body1: "p",
  body2: "p",
  body3: "p",
  body4: "p",
  span: "span",
  h1Large: "h1",
  h1Small: "h1",
  h2: "h2",
  h3: "h3",
  h3Large: "h1",
  error: "p",
};

const Typography = ({ elType, className = "", id = "", children }) => {
  if (!Object.keys(TypographyElements).includes(elType)) {
    throw TypeError("Unsupported element type for Typography component");
  }
  const Tag = TypographyElements[elType];

  const combinedClassName = classNames(className, {
    [styles.body1]: elType === "body1",
    [styles.body2]: elType === "body2",
    [styles.body3]: elType === "body3",
    [styles.body4]: elType === "body4",
    [styles.h1Large]: elType === "h1Large",
    [styles.h1Small]: elType === "h1Small",
    [styles.h2]: elType === "h2",
    [styles.h3]: elType === "h3",
    [styles.h3Large]: elType === "h3",
    [styles.error]: elType === "error",
  });

  return (
    <Tag className={combinedClassName} id={id}>
      {children}
    </Tag>
  );
};

Typography.propTypes = {
  elType: PropTypes.oneOf(Object.keys(TypographyElements)).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Typography;
