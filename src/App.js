import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Created with love by {""}
          <a href="https://beautiful-cobbler-a65852.netlify.app/">
            Nokuthaba Siphambili
          </a>
          {""} and is {""}
          <a
            href="https://github.com/Mola26/react-app"
            target="_blank"
            rel="noreferrer"
          >
            open source on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
