import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label>
            Login
            <input type="text" name="login" />
          </label>
          <br />
          <label>
            Password
            <input type="text" name="password" />
          </label>
          <br />
          <button type="submit">Log in</button>
        </form>
      </header>
    </div>
  );
}

export default App;
