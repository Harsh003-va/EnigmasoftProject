import React, { useState } from "react";
import Axios from 'axios';
import "./Form.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("0");
  
  const SignUp = () => {
    console.log(name);
    Axios.post('http://localhost3000/Signup', {
      name: name,
      email: email,
      password: password,
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div>
   
<html lang="en">
  <head>
    <title>Sign Up Page</title>
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
      rel="stylesheet"></link>
  </head>
  <body>
    <div class="signup-box">
      <h1>Sign Up</h1>
      <h4>It's free and only takes a minute</h4>
      <form>
        <label>Name</label>
        <input
          type="text" onChange={(event) => {setName(event.target.value);}}
        />
        <label>Email</label>
        <input 
          type="email" onChange={(event) => {setEmail(event.target.value);}}
        />
        <label>Password</label>
        <input
          type="password" onChange={(event) => {setPassword(event.target.value);}}
        />
        <button onClick={SignUp}> Submit </button>
      </form>
      <p class="para-2">
        Already have an account? <a href="/Login">Login here</a>
      </p>
      <br></br>
    </div>


    
   
  </body>
</html>





    </div>
  )
}

export default SignUp
