import React from "react";
import "./businessbox.css";
import business from "../assets/business.png"; // Add your CSS file
import residance from "../assets/Residance.jpg"; // Add your CSS file

const Box = () => {
  return (
    <div>
      <div className="service">
        <h1>Our Services</h1>
        {/* <h4> What we do?</h4> */}
      </div>

      <div className="flex-container1">
        <div className="image-box">
          <img src={business} alt="Image 1" className="image" />
          <div className="content1">
            <h1>For Business</h1>
            <h4>Architects | Designers | Hospitality</h4>
          </div>
        </div>
        <div className="image-box">
          <img src={residance} alt="Image 2" className="image" />
          <div className="content1">
            <h1>Your Residence</h1>
            <h4>House | Apartment | Villa</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
