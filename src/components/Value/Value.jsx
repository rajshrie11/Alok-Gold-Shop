import React from "react";
import "./Value.css";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./j13.webp" alt="" />
          </div>
        </div>

        {/* rigt side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by provding te best services for you.
            <br />
            We believe a good quality product enhances your life experience
          </span>

          <span className="primaryText">Best interest rates on the market</span>
          <span className="secondaryText">
            Today, in the form of jewellery, it remains the most popular form
            human adornment. By far its biggest use is as an investment for both
            individuals, governments and financial institutions. These have
            stockpiled vast quantities as stores of wealth. So we provide Best
            interest rates on the market
            <br />
            We believe a good quality product enhances your life experience
          </span>

          <span className="primaryText">Prevent unstable prices</span>
          <span className="secondaryText">
            Preventing unstable gold prices requires understanding the factors
            that drive them and employing strategies to mitigate the impact of
            fluctuations. Gold prices are influenced by a combination of supply
            and demand dynamics, as well as economic and geopolitical factors.
            So we prevent unstable price by providing good quality and price.
            <br />
            We believe a good quality product enhances your life experience
          </span>

          <span className="primaryText">Best price on the market</span>
          <span className="secondaryText">
            Because of its beauty and extreme rarity, gold has had a significant
            place throughout human history. It has shaped civilisations, and
            changed world powers, and many quotes have been made about gold over
            the ages. So we provide Best price in the market.
            <br />
            We believe a good quality product enhances your life experience
          </span>
        </div>
      </div>
    </section>
  );
};

export default Value;
