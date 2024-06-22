import logo from './logo.svg';
import './App.css';
import styles from './components/utility/Typography/Typography.module.css';
import {default as Typography} from './components/utility/Typography/Typography';

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
      </header>
    </div>
  );
}

export default App;
