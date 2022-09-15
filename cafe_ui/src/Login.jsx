import React from 'react'
import "./Form.css";
import "./App.css"

const Login = () => {
  return (
    <div>

    <div class="login-box"><br></br><br></br>
      <a href="/Home" class="formbar"><i class="fas fa-mug-hot">Enjoy By having Our Delicious Coffee</i> </a>
      <form>
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <input type="button" value="Submit" />
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
