// import React, { useState, useEffect } from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import { FaArrowCircleUp } from "react-icons/fa";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper bgcolor">
        <div className="paddings innerWidth flexCenter hero-container ">
          {/* left side */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <h2>New Age Spiritual Moment </h2>
              <h1>
                Discover GB Foundation's New Age Spiritual Moment <br />
              </h1>
            </div>
            <div className="flexColStart hero-des">
              <span className="secondaryText">
                Go Within Become Self Controlled, Self reliant
              </span>
              <span className="secondaryText">
                You will find the source of life. That is where God–your pure
                spirit, your Absolute Understanding is. That is your “Oneness.”
                If you go far enough within yourself, you will connect with all
                creation
              </span>
            </div>

            <div className="flexCenter stats">
              <div className="flexColStart stat">
                <span className="secondaryText">
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Premium quality products</span>
              </div>

              <div className="flexColStart stat">
                <span className="secondaryText">
                  <CountUp start={1990} end={5000} duration={180000} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Followers</span>
              </div>

              <div className="flexColStart stat">
                <span className="secondaryText">
                  <CountUp end={28} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Award winning</span>
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
