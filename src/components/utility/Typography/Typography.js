import React from "react";
import styles from "./Typography.module.css";

export const TypographyElements = {
  body1: "p",
  body2: "p",
  span: "span",
  h1: "h1",
  h2: "h2",
  h3: "h3",
};

export default function Typography({
  elType,
  className = "",
  id = "",
  children,
}) {
  if (!Object.keys(TypographyElements).includes(elType)) {
    throw TypeError("Unsupported element type for Typography component");
  }

  var typographyStyle = `${styles[elType]}`;
  if (className) {
    typographyStyle += `${styles[className]}`;
  }

  const Tag = TypographyElements[elType];

  return (
    <Tag className={typographyStyle} id={id}>
      {children}
    </Tag>
  );
}
