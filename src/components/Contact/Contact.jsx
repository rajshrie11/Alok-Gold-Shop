import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="flexCenter banner v-right">
        <span className="">Our Contacts</span>
      </div>
      <div className="paddings innerWidth flexCenter c-container">
        {/* leftside */}
        <div className=" flexColStart c-left">
          {/* <span className="orangeText">Our Contacts</span> */}
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We are always ready to help you by providing the best guidence
            believe a premium quality experience can make your life experience
            better.
          </span>
          <span className="primaryText">Address:</span>
          <span className="secondaryText">
            Address: <br />
            Koteshwar Rao <br />
            GB Foundation's New Age Spiritual Moment <br />
            <br /> Bannerghatta, Bangalore
          </span>

          <div className="flexColCenter contactModes">
            {/* first row */}
            <div className="flexColStart row"></div>
          </div>
        </div>
      </div>

      {/* //Logos */}

      <div className="flexCenter" style={{ marginTop: "2rem", gap: "1.5rem" }}>
        <img src="./telephone.png" alt="Telephone" width={30} />
        <img src="./instagram.png" alt="Instagram" width={30} />
        <img src="./facebook.png" alt="Facebook" width={30} />
        <img src="./whatsapp.png" alt="WhatsApp" width={30} />
      </div>

      <div className="flexCenter" style={{ marginTop: "1.5rem" }}>
        <h3>Thank you for visiting!</h3>
      </div>
    </section>
  );
};

export default Contact;
