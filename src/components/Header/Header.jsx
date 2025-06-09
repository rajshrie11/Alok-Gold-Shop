import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({
  onScrollToPopuler,
  onScrollToValue,
  onScrollToContact,
  onScrollToEvents,
  onScrollToOnlineClasses,
  onScrollToPurpose,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [selected, setSelected] = useState("");

  const handleSearch = () => {
    const query = searchInput.trim().toLowerCase() || selected.toLowerCase();

    switch (query) {
      case "home":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "products":
        onScrollToPopuler();
        break;
      case "our values":
        onScrollToValue();
        break;
      case "events":
        onScrollToEvents();
        break;
      case "online classes":
        onScrollToOnlineClasses();
        break;
      case "purpose":
        onScrollToPurpose();
        break;
      case "contact us":
        onScrollToContact();
        break;
      default:
        alert("Section not found.");
    }
  };

  return (
    <section className="h-wrapper banner sticky-header">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="../newagelogo.jpg" alt="logo" width={80} />
        <h1>GB Foundation's New Age Spiritual Movement</h1>

        <div className="search-wrapper">
          {/* Dropdown on the left side */}
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className="dropdown-select"
          >
            <option value="" disabled hidden>
              ▼
            </option>
            <option value="Home">Home</option>
            <option value="Products">Products</option>
            <option value="Our Values">Our Values</option>
            <option value="Events">Events</option>
            <option value="Online Classes">Online Classes</option>
            <option value="Purpose">Purpose</option>
            <option value="Contact Us">Contact Us</option>
          </select>

          {/* Search input with icon inside */}
          <div className="search-input-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <span className="search-icon" onClick={handleSearch}>
              🔍
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flexCenter h-menu">
          <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Home
          </a>
          <a onClick={onScrollToPopuler}>Products</a>
          <a onClick={onScrollToValue}>Our Values</a>
          <a onClick={onScrollToEvents}>Events</a>
          <a onClick={onScrollToOnlineClasses}>Online Classes</a>
          <a onClick={onScrollToPurpose}>Purpose</a>
          <a onClick={onScrollToContact}>Contact Us</a>
        </div>

        {/* <div className="search-input-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <span className="search-icon" onClick={handleSearch}>
              🔍
            </span>
          </div> */}
      </div>
    </section>
  );
};

Header.propTypes = {
  onScrollToPopuler: PropTypes.func,
  onScrollToValue: PropTypes.func,
  onScrollToContact: PropTypes.func,
  onScrollToEvents: PropTypes.func,
  onScrollToOnlineClasses: PropTypes.func,
  onScrollToPurpose: PropTypes.func,
};

export default Header;
