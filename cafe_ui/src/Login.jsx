
import React, { useState } from "react";
import Axios from 'axios';

import "./Form.css";
import "./App.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("0");

  const Login = () => {
    console.log( email + password);
    Axios.post('http://localhost:3002/login', {
      
      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };


  return (
    <div>

    <div class="login-box"><br></br><br></br>
      <a href="/Home" class="formbar"><i class="fas fa-mug-hot">Enjoy By having Our Delicious Coffee</i> </a>
      <form>
        <label>Email</label>
        <input type="email" placeholder="" onChange={(event) => {setEmail(event.target.value);}} />
        <label>Password</label>
        <input type="password" placeholder="" onChange={(event) => {setPassword(event.target.value);}} />
        <button onClick={Login} > Submit </button>
        <p class="para-2">
      Not have an account? <a href="/SignUp">Sign Up Here</a>
    </p>
      </form>
    </div>
 <br></br>
    </div>
  )
}

export default Login
