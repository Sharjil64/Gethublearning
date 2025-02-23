import React from "react";
import "../component/Nav.css";


export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>
          Professional <br /> Portfolio
        </h3>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#Table">Table of Content</a>
        </li>
        <li>
          <a href="#teacher">Philosophy of Teacher</a>
          <ul>
            <li>Why I am a Teacher</li>
          </ul>
        </li>
        <li>
          <a href="#CV">CV</a>
        </li>
        <li>
          <a href="#Reflection">Reflection</a>
          <ul>
            <li>Day-to-Day Teaching Reflection</li>
            <li>Add 4-7 Reflections</li>
          </ul>
        </li>
        <li>
          <a href="#position">Position Paper</a>
          <ul>
            <li>Good of Life</li>
            <li>About Life</li>
          </ul>
        </li>
        <li>
          <a href="#achievements">Achievements</a>
          <ul>
            <li>Certificates</li>
            <li>Rewards</li>
          </ul>
        </li>
        <li>
          <a href="#replication">Replication</a>
        </li>
      </ul>
      <button className="sign-in">Sign In</button>
 
    </nav>
  
  );
}
