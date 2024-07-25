import React, { useState } from "react";
import styles from "./Playground.module.css";
import { Typography, Button, FormElement } from "../../utility";

const Playground = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "") {
      setError("This field is required");
    } else {
      setError("");
    }
  };
  return (
    <div className={styles.appHeader}>
      <h3>Typography</h3>
      <Typography elType="h1Large">h1 Large Text</Typography>
      <Typography elType="h1Small">H1 Small Text</Typography>
      <Typography elType="body1">body1 Text</Typography>
      <Typography elType="body2">body2 Text</Typography>
      <Typography elType="h2">h2 Text</Typography>
      <Typography elType="h3">h3 Text</Typography>

      <Typography elType="body1">
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Typography>
      {/* Primary buttons */}
      <Typography elType="h3">Primary button light</Typography>
      <div
        className={`${styles.buttonContainer} ${styles.buttonContainerColor}`}
      >
        <Button
          elType="primaryWhite"
          onClick={() => alert("Primary light Button Clicked")}
          className={styles.buttonMargin}
        >
          White Color Button
        </Button>
        <Button elType="primaryWhite" disabled className={styles.buttonMargin}>
          Disabled White Color Button
        </Button>
      </div>
      {/* Primary buttons */}
      <Typography elType="h3">Primary button dark</Typography>
      <Button
        elType="primaryDark"
        onClick={() => alert("Primary dark Button Clicked")}
        className={styles.buttonMargin}
      >
        Dark Color Button
      </Button>
      <Button elType="primaryDark" disabled className={styles.buttonMargin}>
        Disabled Dark Color Button
      </Button>
      {/* secondary buttons */}
      <Typography elType="h3">Secondary button</Typography>
      <div
        className={`${styles.buttonContainer} ${styles.buttonContainerColor}`}
      >
        <Button
          elType="secondary"
          onClick={() => alert("Secondary Button Clicked")}
          className={styles.buttonMargin}
        >
          Secondary Button
        </Button>
        <Button elType="secondary" disabled className={styles.buttonMargin}>
          Disabled Secondary Color Button
        </Button>
      </div>

      {/* showMore buttons */}
      <Button
        elType="showMore"
        onClick={() => alert("Show More Button Clicked")}
        className={styles.buttonMargin}
      >
        Show More Button
      </Button>

      {/* hideMore buttons */}
      <Button
        elType="hideMore"
        onClick={() => alert("Hide More Button Clicked")}
        className={styles.buttonMargin}
      >
        Hide More Button
      </Button>

      <div>
        <Typography elType="body1">Form Elements</Typography>
        <FormElement
          type="text"
          placeholder="Message"
          value={value}
          onChange={handleChange}
          error={error}
        />
      </div>
    </div>
  );
};

export default Playground;
