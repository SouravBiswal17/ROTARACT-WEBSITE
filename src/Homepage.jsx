import React, { useState } from "react";
import "./App.css";
import image1 from "./assets/images/image1.jpg";  
import image2 from "./assets/images/image2.jpg";  
import image3 from "./assets/images/image3.jpg";  

const App = () => {
  const images = [image1, image2, image3]; 

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fullscreen-container">
      <header className="navbar">
        <div className="logo"></div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Gallery</li>
            <li>Events</li>
            <li>Our Team</li>
          </ul>
        </nav>
      </header>

      <div className="carousel">
        <button className="arrow left-arrow" onClick={handlePrevious}>
          &#8592;
        </button>

        <img
          src={images[currentImageIndex]} 
          alt="carousel"
          className="carousel-image"
          style={{ width: "100%", height: "auto", objectFit: "cover" }} 
        />
        
        <div className="carousel-content">
          <h1>MAKE A DIFFERENCE</h1>
          <p>Our Mission</p>
        </div>

        <button className="arrow right-arrow" onClick={handleNext}>
          &#8594;
        </button>
      </div>

      <footer className="footer">
        <p>© 2025 Rotaract Club. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
