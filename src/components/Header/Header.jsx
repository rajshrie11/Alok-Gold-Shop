import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./j3.jpeg" alt="logo" width={80} />
        <div className="flexCenter h-menu">
          <a href="">Our Products</a>
          <a href="">Our Value</a>
          <a href=""> Contact US</a>
          <a href=""> Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
