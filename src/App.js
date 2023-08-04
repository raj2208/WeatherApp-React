import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="https://github.com/raj2208" rel="noreferrer">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="https://github.com/raj2208" rel="noreferrer">
          Raj Kumar Rai
        </a>{" "}
        | Here's My{" "}
        <a target="_blank" href="https://github.com/raj2208" rel="noreferrer">
          PORTFOLIO
        </a>
      </div>
    </React.Fragment>
    // <React.Fragment> ... </React.Fragment>: This is a special syntax in React used to group multiple JSX elements without adding an extra DOM element to the output. It's also commonly written as <> ... </>.
  );
}

export default App;
