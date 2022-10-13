import React from 'react'
import "./App.css";


const Navbar = () => {
  return (
         <header class="header">
          <section class="flex">
            <a href="/" class="logo"><i class="fas fa-mug-hot"> Cafe Capricon</i> </a>
            <nav class="navbar">
              <a href="/">Home</a>
              <a href="/Menu">Menu</a>
              <a href="/Login">Login</a>
              <a href="/Booktable" class="button">Book A Table</a>
              <a href='/profile'>Profile</a>
            </nav>  

          </section>

        </header>
  )
}

export default Navbar
