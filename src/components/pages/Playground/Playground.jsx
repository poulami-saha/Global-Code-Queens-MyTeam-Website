import React from "react";
import styles from "./Playground.module.css";
import Typography from "../../utility/Typography/Typography";
import Button from "../../utility/Button/Button";

const Playground = () => {
  return (
    <div className={styles.appHeader}>
      <Typography elType="h1Large" className={styles.h1Large}>
        Edit <code>src/App.js</code> and save to reload.
      </Typography>

      <Typography elType="body1" className={styles.body1}>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Typography>
      <h3>Primary Button</h3>
      <div className="buttonContainer buttonContainerColor">
        <Button type="primary" onClick={() => alert("Primary Button Clicked")}>
          Primary Button
        </Button>

        <Button type="primary" disabled>
          Primary Button
        </Button>
      </div>

      <h3>Secondary Button</h3>
      <div className="buttonContainer buttonContainerColor">
        <Button
          type="secondary"
          onClick={() => alert("Secondary Button Clicked")}
        >
          Secondary Button
        </Button>

        <Button type="secondary" disabled>
          Secondary Button
        </Button>
      </div>

      <h3>Tertiary Button</h3>
      <div className="buttonContainer">
        <Button
          type="tertiary"
          onClick={() => alert("Tertiary Button Clicked")}
        >
          Tertiary Button
        </Button>
        <Button type="tertiary" disabled>
          Tertiary Button
        </Button>
      </div>
    </div>
  );
};

export default Playground;
