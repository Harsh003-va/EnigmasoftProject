import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
   
   <body>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet"  ></link>
          
    
        
        <header class="header">

          <section class="flex">

            <a href="#home" class="logo"><i class="fas fa-mug-hot"> Cafe Capricon</i> </a>
            <nav class="navbar">
              <a href="#home">Home</a>
            
              <a href="#popular">Menu</a>
              <a href="#divOne">Login</a>
              <a href="#register" class="button">Book A Table</a>
            </nav>

            <div id="menu-btn" class="fas fa-bars"></div>

          </section>

        </header>





        <div class="home-bg">

          <section class="home" id="home">

            <div class="content">
              <h3>coffee heaven</h3>
              <p>A Cup of Coffee can complete your day......</p>
              <a href="#about" class="btn" id="homebtn">about us</a>
            </div>

          </section>

        </div>



        <section class="about" id="about">

          <br></br>
          <div class="image">
            <img src="\images\home-img-1.png" alt=""></img>
           
          </div>

          <div class="content">
            <h3>Why Choose Us?</h3>
            <h2 class="title">the best coffee maker in the town</h2>


            <div class="container">
              <p>We have everything from classic coffee to our house made specialty beverages.You can complete your coffee with one of our delicious sweet treats made by our very own baker. We look forward to serving you at Taste and See Coffee Shop and Gallery</p>
              <div class="row align-items-center">
                <div class="col-md-6">
                  <img src="\images\about-img-1.png" class="w-100" alt=""></img>
                </div>
                <div class="col-md-6">

                  <div class="icons-container">
                    <div class="icons">
                      <i class="fas fa-coffee"></i>
                      <h3>best coffee</h3>
                    </div>
                    <div class="icons">
                      <i class="fas fa-shipping-fast"></i>
                      <h3>free delivery</h3>
                    </div>
                    <div class="icons">
                      <i class="fas fa-headset"></i>
                      <h3>24/7 service</h3>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <br></br>
              <a href="#facility" class="btn">Our Facitities</a>
          </div>

        </section>



        <section class="facility" id="facility">
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



        <section class="popular" id="popular">
          <div class="heading">
            <img src="\images\heading-img.png" alt=""></img>
            <h3> Menu</h3>


            <div class="box-container">

              <div class="box">
                <span class="price"> Rs 120/-  </span>
                <img src="\images\images.jpg" alt=""></img>
                <h3>Americano</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                
              </div>
              <div class="box">
                <span class="price"> Rs 160/-  </span>
                <img src="\images\coffee2jpg.jpg" alt=""></img>

                <h3>Cappucino</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
          
              </div>
              <div class="box">
                <span class="price"> Rs 220/- </span>
                <img src="\images\coffee3jpg.jpg" alt=""></img>
                <h3>Caffe Latte</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                
              </div>
              <div class="box">
                <span class="price"> Rs 250/- </span>
                <img src="\images\COF4.jpg" alt=""></img>
                <h3>Frappuccino</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              
              </div>
              <div class="box">
                <span class="price"> Rs 300/-  </span>
                <img src="\images\coffee4.jpg" alt=""></img>
                <h3>Macchiato</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
              <div class="box">
                <span class="price"> Rs 350/- </span>
                <img src="\images\coffee5.jpg" alt=""></img>
                <h3>Espresso</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
             
              </div>
              <div class="box">
                <span class="price"> Rs 400/- </span>
                <img src="\images\coffee6.jpg" alt=""></img>
                <h3>Caramel Latte</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
               
              </div>
              <div class="box">
                <span class="price"> Rs 580/- </span>
                <img src="\images\coffee7.jpg" alt=""></img>
                <h3>Affogato Coffee</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
            
              </div>

            </div>
          </div>
        </section>



        <div class="login-page" id="login-page">
          <h3>LOGIN </h3>
          <div class="form">
            <a href="#home" class="formbar"><i class="fas fa-mug-hot">Enjoy By having Our Delicious Coffee</i> </a>
            <form class="form">
              <input type="text" placeholder="User name" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
              <p class="message">Not Registered?<a href="App.css">Register</a></p>
            </form>
          </div>
        </div>

      
     
      
    <section class="register" id="register">
      
        <div class="heading">
            <img src="images/heading-img.png" alt=""></img>
            <h3>Reservation</h3>
        </div>


    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;900&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap" rel="stylesheet" />  
    <div class="overlay" id="divOne">
      <div class="wrapper">
                <div class="login-page" id="login-page">

                <div class="form">
                <a class="close" href="/">&times;</a>
                  <a href="#home" class="formbar"><i class="fas fa-mug-hot">Enjoy By having Our Delicious Coffee</i> </a>
                  <form class="form">
                    <input type="text" placeholder="User name" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>
                    <p class="message">Not Registered?<a href="App.css">Register</a></p>
                  </form>
                </div>
             </div>
       
          </div>
      </div>


     </section>
     <br></br>
     <br></br>
     <br></br>
    
    
        <section class="footer">

          <div class="share">
            <a href="#home">< i class="fab fa-facebook-f"></i></a>
            <a href="#home"><i class="fab fa-twitter"></i></a>
            <a href="#home"><i class="fab fa-instagram"></i></a>
            <a href="#home"><i class="fab fa-linkedin"></i></a>
            <a href="#home"><i class="fab fa-pinterest"></i></a>
          </div>
        </section>
 </body>



        );
      }

        export default App;