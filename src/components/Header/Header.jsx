import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <section className="h-wrapper banner">
        <div className="flexCenter paddings innerWidth h-container">
          <img src="./buddha2.jpg" alt="logo" width={80} />
          <h1>New Age Spiritual Moment</h1>
          <div className="flexCenter h-menu">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/values">Our Value</Link>
            <Link to="/contact">Contact Us</Link>

            {/* 🔍 Search Input */}
            <div className="search-container">
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
