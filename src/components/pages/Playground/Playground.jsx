import React, { useState } from "react";
import styles from "./Playground.module.css";
import Typography from "../../utility/Typography/Typography";
import Button from "../../utility/Button/Button";
import FormElement from "../../utility/FormElement/FormElement";

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
      <Button
        style="white"
        onClick={() => alert("Primary Button Clicked")}
        className={styles.buttonMargin}
      >
        White Color Button
      </Button>
      <Button
        style="dark"
        onClick={() => alert("Secondary Button Clicked")}
        className={styles.buttonMargin}
      >
        Dark Color Button
      </Button>

      <Button style="white" disabled className={styles.buttonMargin}>
        Disabled White Color Button
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
