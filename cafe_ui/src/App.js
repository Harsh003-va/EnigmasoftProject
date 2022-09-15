import React from "react";
import "./App.css";
import {Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import Home from "./Home";
import Navbar from "./Navbar";
import Menu from "./Menu";
import About from "./About";
import Login from "./Login";
import SignUp from "./SignUp";
import Footer from "./Footer";



const App = () => {
  return(
  <html>
    <><></><Navbar />
           
        <body>
        <></><Routes>
            <Route path="/Navbar" element={<Navbar />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        
        

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"></link>

        
          <br></br>
          <br></br>
          <br></br>
          <Footer />
  </body></>

  </html>

        );
      }

        export default App;