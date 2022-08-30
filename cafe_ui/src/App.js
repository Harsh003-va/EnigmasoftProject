import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App"><h1>Login</h1>

    <div className="form">

      <label>Email:</label>
     <input type="text"name="email"/>
     <label>Password:</label>
     <input type="password"name="password" />

    <button>Submit</button>
    </div>
    </div>
  );
}

export default App;
