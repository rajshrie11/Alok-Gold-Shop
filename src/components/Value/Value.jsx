import React from "react";
import "./Value.css";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="flexCenter banner v-right">
        <span className="">Our Value</span>
      </div>
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./buddha3.jpg" alt="" />
          </div>
        </div>

        {/* rigt side */}
        <div className="flexColStart v-right">
          {/* <span className="orangeText">Our Value</span> */}
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We always ready to help by providing te best guidence & services for
            you.
            <br />
            We believe a good quality guidence enhances your life experience
          </span>

          <span className="primaryText">
            Best of the best practices are followed
          </span>
          <span className="secondaryText">
            Meditation practice is neither holding on nor avoiding; it is a
            settling back into the moment, opening to what is there
            <br />
            We believe a good quality product enhances your life experience
          </span>

          <span className="primaryText">
            Best of the best interests are followed
          </span>
          <span className="secondaryText">
            when believers meditate on God's Word, they will be blessed with
            flourishing just like a tree flourishes if it is planted by
            continuously running water and nourished by a constant source of
            life.
            <br />
            We believe a good quality product enhances your life experience
          </span>

          <span className="primaryText">Helping in mentaining consistency</span>
          <span className="secondaryText">
            All human beings have an innate desire to overcome suffering, to
            find happiness. Training the mind to think differently, through
            meditation, is one important way to avoid suffering and be happy
            <br />
            We believe a good quality guidence enhances your life experience
          </span>
        </div>
      </div>
    </section>
  );
};

export default Value;
