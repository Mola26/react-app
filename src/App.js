import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by {""}
          <a href="" target="_blank">
            {" "}
            Nokuthaba Siphambili
          </a>
          {""} and is {""}
          <a href="" target="_blank">
            open source on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
