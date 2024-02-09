import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form action="">
          <label htmlFor="">
            Login
            <input type="text" />
          </label>
          <br />
          <label htmlFor="">
            Password
            <input type="text" />
          </label>
          <br />
          <button type="submit">Log in</button>
        </form>
      </header>
    </div>
  );
}

export default App;
