import logo from './logo.svg';
import './App.css';
import './components/Typography.css';
import {default as Typography} from './components/Typography.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography elType='h3'>
          Edit <code>src/App.js</code> and save to reload.
        </Typography>

        <Typography elType='body-1'>
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
