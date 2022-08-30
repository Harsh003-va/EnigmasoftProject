import React from "react";
import "./App.css";


function App() {
  return (

    <div class="login-page">
    <div class="form">
        <form class="register-form">
            <input type="text" placeholder="User name"/>
            <input type="text" placeholder="Password"/>
            <button>Create</button>
            <p class="message">Already Registered? <a href="App.css">Login</a></p>
       </form>
    
       <form class="form">
            <input type="text" placeholder="User name"/>
            <input type="password" placeholder="Password"/>
            <button>Login</button>
            <p class="message">Not Registered? <a href="App.css">Register</a></p>
            </form>
    </div>
    </div>
  )
}

export default App;
