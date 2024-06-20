import { createElement } from 'react';

export const TypographyElements = {
  "body1": "p",
  "body-1": "p",
  "body2": "p",
  "body-2": "p",
  "span": "span",
  "h1small": "h1",
  "h1-small": "h1",
  "h1large": "h1",
  "h1-large": "h1",
  "h2": "h2",
  "h3": "h3",
}

export default function Typography(
  { elType, className = "", id, style, children }
) {
  if (!Object.keys(TypographyElements).includes(elType)) {
    throw TypeError("Unsupported element type for Typography component")
  };

  if (elType === "body1" || elType === "body-1") {
    className = className + " body-1";
  } else if (elType === "body2" || elType === "body-2") {
    className = className + " body-2";
  } else if (elType === "h1large" || elType === "h1-large") {
    className = className + " h1-large";
  }

  className = className + " typography";

  return createElement(
    TypographyElements[elType],
    { 
      className,
      id,
      style
    },
    children,
  )
}
