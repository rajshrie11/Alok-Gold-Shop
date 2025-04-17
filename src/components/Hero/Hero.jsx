import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

console.log(window.width);

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <h2>Sulochana Jewellers</h2>
            <h1>
              Discover Most Suitable Stylish <br />
              Pure Jewellery <br />{" "}
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of antique and modern designs
            </span>
            <span className="secondaryText">
              The easy way in finding the antique and modern design at the same
              place
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span className="secondaryText">
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium quality</span>
            </div>

            <div className="flexColStart stat">
              <span className="secondaryText">
                <CountUp start={1990} end={3690} duration={180} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
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

        {/* right side   */}

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./jshop1.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
