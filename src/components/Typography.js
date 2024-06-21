import React from 'react';

export const TypographyElements = {
  "body-1": "p",
  "body-2": "p",
  "span": "span",
  "h1-small": "h1",
  "h1-large": "h1",
  "h2": "h2",
  "h3": "h3",
}

export default function Typography(
  { elType, className = "", id = "", children }
) {
  if (!Object.keys(TypographyElements).includes(elType)) {
    throw TypeError("Unsupported element type for Typography component")
  };

  className = elType + " " + className + " typography";

  const Tag = TypographyElements[elType];

  return (
    <Tag className={className} id={id}>
      {children}
    </Tag>
  )
}
