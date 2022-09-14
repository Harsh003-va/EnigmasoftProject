import React from 'react'
import "./Form.css";


const SignUp = () => {
  return (
    <div>
   
<html lang="en">
  <head>
    <title>Sign Up | By Code Info</title>
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="signup-box">
      <h1>Sign Up</h1>
      <h4>It's free and only takes a minute</h4>
      <form>
        <label>First Name</label>
        <input type="text" placeholder="" />
        <label>Last Name</label>
        <input type="text" placeholder="" />
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <label>phone Number</label>
        <input type="phone number" placeholder="" />
        <input type="button" value="Submit" />
      </form>
      <p class="para-2">
        Already have an account? <a href="/Login">Login here</a>
      </p>
    </div>
   
  </body>
</html>





    </div>
  )
}

export default SignUp
