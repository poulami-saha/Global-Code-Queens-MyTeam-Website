import logo from './logo.svg';
import './App.css';
import styles from './components/utility/Typography/Typography.module.css';
import {default as Typography} from './components/utility/Typography/Typography';
import Button from "./components/utility/Button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography elType='h1Large' className={styles.h1Large}>
          Edit <code>src/App.js</code> and save to reload.
        </Typography>

        <Typography elType='body1' className={styles.body1}>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Typography>
        <h3>Primary Button</h3>
        <div className="buttonContainer buttonContainerColor">
          <Button
            type="primary"
            onClick={() => alert("Primary Button Clicked")}
          >
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
      </header>
    </div>
  );
}

export default App;
