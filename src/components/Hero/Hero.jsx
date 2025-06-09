import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import { FaArrowCircleUp } from "react-icons/fa";
import CountUp from "react-countup";

// Highlight function to wrap matched text
const highlightText = (text, searchTerm) => {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.split(regex).map((part, i) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <span key={i} style={{ backgroundColor: "yellow" }}>
        {part}
      </span>
    ) : (
      part
    )
  );
};

const Hero = ({ searchTerm }) => {
  return (
    <div>
      <section className="hero-wrapper bgcolor">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* left side */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <h2>{highlightText("Discover GB Foundation's", searchTerm)}</h2>
              <h1>
                {highlightText("New Age Spiritual Movement", searchTerm)} <br />
              </h1>
            </div>
            <div className="flexColStart hero-des">
              <span className="secondaryText">
                {highlightText(
                  "New Age Spiritual Movement is all about you and your Awareness,",
                  searchTerm
                )}
                <span className="secondaryText">
                  {highlightText(
                    "Its a right platform for you to know more about yourself and to expolre yourself",
                    searchTerm
                  )}
                  <br />
                  <br />
                  {highlightText(
                    "We strongly believe in two aspects:",
                    searchTerm
                  )}
                  <br />
                  {highlightText(
                    "• When everything fails your Energy works",
                    searchTerm
                  )}
                  <br />
                  {highlightText(
                    "• When nothing works your Energy acts",
                    searchTerm
                  )}
                  <br />
                  {highlightText(
                    "Come and join us to know more about yourself.",
                    searchTerm
                  )}
                </span>
              </span>
            </div>

            <div className="flexCenter stats">
              <div className="flexColStart stat">
                <span className="secondaryText">
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">
                  {highlightText("Premium quality products", searchTerm)}
                </span>
              </div>

              <div className="flexColStart stat">
                <span className="secondaryText">
                  <CountUp start={1990} end={5000} duration={180000} />
                  <span>+</span>
                </span>
                <span className="secondaryText">
                  {highlightText("Happy Followers", searchTerm)}
                </span>
              </div>

              <div className="flexColStart stat">
                <span className="secondaryText">
                  <CountUp end={28} />
                  <span>+</span>
                </span>
                <span className="secondaryText">
                  {highlightText("Award winning", searchTerm)}
                </span>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flexCenter hero-right">
            <div className="image-container">
              <img src="./buddha2.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper bggcolor">
        <marquee behavior="scroll" direction="left" scrollamount="6"></marquee>
      </div>
    </div>
  );
};

export default Hero;
