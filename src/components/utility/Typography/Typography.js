import React from 'react';

export const TypographyElements = {
  "body1": "p",
  "body2": "p",
  "span": "span",
  "h1Small": "h1",
  "h1Large": "h1",
  "h2": "h2",
  "h3": "h3",
}

export default function Typography(
  { elType, className = "", id = "", children }
) {
  if (!Object.keys(TypographyElements).includes(elType)) {
    throw TypeError("Unsupported element type for Typography component")
  };

  className = `${elType} ${className}`;

  const Tag = TypographyElements[elType];

  return (
    <Tag className={className} id={id}>
      {children}
    </Tag>
  )
}
