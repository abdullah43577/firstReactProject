import React from 'react';
import logo from '../React-icon.svg.png';

export default function Navbar() {
  return (
    <nav className="navBar">
      <div className="logoContainer">
        <img src={logo} alt="react-icon" />
        <h3>ReactFacts</h3>
      </div>

      <p>React Course - Project 1</p>
    </nav>
  );
}
