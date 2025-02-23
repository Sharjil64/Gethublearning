import React from "react";
import "./Ed.css";
import post from "./education.jpg";

export default function Education() {
  return (
    <div className="banner">
      <img src={post} alt="Background" className="bg-image" />

      <div className="overlay">
        <div className="content">
          <h1>Cover Page</h1>
          <button className="start-button">
            <a href="#Hello">Get Start</a>
          </button>
        </div>
      </div>
    </div>
  );
}
