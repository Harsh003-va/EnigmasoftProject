import React from 'react'
import "./Form.css";


const Login = () => {
  return (
    <div>
      
<html lang="en">
  <head>
    <title>Login | By Code Info</title>
    <link rel="stylesheet" href="style.css" ></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="login-box">
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <input type="button" value="Submit" />
      </form>
    </div>
    <p class="para-2">
      Not have an account? <a href="/SignUp">Sign Up Here</a>
    </p>
  </body>
</html>
    </div>
  )
}

export default Login
