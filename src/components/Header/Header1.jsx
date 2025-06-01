// Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper banner">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./j3.jpeg" alt="logo" width={80} />
        <h1></h1>
        <div className="flexCenter h-menu">
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/values">Our Value</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
