import React from "react";
import "./Navigation.css";
import background from "./Image/bg.avif";
const Navigation = () => {
  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="logo">
            <h2>Logo</h2>
          </div>
          <div className="menu">
            <div className="item">Home</div>
            <div className="item">About</div>
            <div className="item">Menu</div>
            <div className="item">Order</div>
            <div className="item">Contact</div>
          </div>
        </div>
      </div>
      <div className="header">
        <div
          className="background"
          style={{ backgroundImage: `url(${background})` }}
        ></div>
        
      </div>
    </>
  );
};

export default Navigation;
