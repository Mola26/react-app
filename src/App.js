import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Created with love by Nokuthaba Siphambili
          {""} and is {""}
          <a href="https://github.com/Mola26/react-app" target="_blank">
            open source on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
