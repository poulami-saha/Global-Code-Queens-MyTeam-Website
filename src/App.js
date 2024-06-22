import logo from "./logo.svg";
import "./App.css";
import Button from "./components/utility/Button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
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
