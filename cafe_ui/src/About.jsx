import React from 'react'
import "./App.css";

const About = () => {
  return (
    <div>
      <section class="about" id="about">
          <br></br>

          <div class="image">
            <br></br>
            <img src="\images\home-img-1.png" alt=""></img> 
          </div>
         
          <div class="content">
            <h3>Why Choose Us?</h3>
            <h2 class="title">the best coffee maker in the town</h2>
            <div class="container">
              <p>We have everything from classic coffee to our house made specialty beverages.You can complete your coffee with one of our delicious sweet treats made by our very own baker. We look forward to serving you at Taste and See Coffee Shop and Gallery</p>
            </div>
                  <div class="icons-container">
                  <div class="icons">
                      <i class="fas fa-headset"></i>
                      <h3>24/7 service</h3>
                    </div>
                    <div class="icons">
                      <i class="fas fa-coffee"></i>
                      <h3>best coffee</h3>
                    </div>
                    <div class="icons">
                      <i class="fas fa-shipping-fast"></i>
                      <h3>free delivery</h3>
                    </div>
            </div>
            <br></br>
              <a href="#facility" class="btnn">Our Facitities</a>
          </div>
       </section>

   
   
        <section class="facility" id="facility">
          <br></br><br></br>
          <div class="heading">
            <img src="\images\heading-img.png" alt=""></img>
            <h3>our facility<br></br></h3>
            <br></br>
            <section class="menu" id="menu">
              <br></br>
              <div class="container box-container">

                <div class="box">
                  <img src="\images\icon-1.png" alt=""></img>
                  <h3>varieties of coffees</h3>
                </div>

                <div class="box">
                  <img src="\images\icon-2.png" alt=""></img>
                  <h3>coffee beans</h3>
                </div>

                <div class="box">
                  <img src="\images\icon-3.png" alt=""></img>
                  <h3>breakfast and sweets</h3>
                </div>
                <div class="box">
                  <img src="\images\icon-4.png" alt=""></img>
                  <h3>ready to go coffee</h3>
                </div>
              </div>
            </section></div>
        </section>
    </div>
  )
}

export default About
