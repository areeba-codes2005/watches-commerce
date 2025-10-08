import React from "react";
import minibanner1 from "../../assets/minibanner-1.jpg";
import minibanner2 from "../../assets/minibanner-2.jpg";
import minibanner3 from "../../assets/minibanner-3.jpg";
import "./MiniBanner.css";

const minibanners = [
  {
    img: minibanner1,
    alt: "New collection watch image",
    heading: (
      <>
        NEW
        <br />
        COLLECTION
      </>
    ),
    link: "Shop Collection",
  },
  {
    img: minibanner2,
    alt: "Simple elegance watch image",
    heading: (
      <>
        SIMPLE
        <br />
        ELEGANCE
      </>
    ),
    link: "Shop Now",
  },
  {
    img: minibanner3,
    alt: "Special edition watch image",
    heading: (
      <>
        SPECIAL
        <br />
        EDITION
      </>
    ),
    link: "Explore Product",
  },
];

const MiniBanner = () => {
  return (
    <div className="container-fluid con">
      <div className="row">
        {minibanners.map((minibanner, index) => (
          <div key={index} className="col-12 col-md-4 col-lg-4 minibanner-box">
            <img
              src={minibanner.img}
              alt={minibanner.alt}
              className="img-fluid"
            />
            <div className="minibanner-content">
              <h5>{minibanner.heading}</h5>
              {/* <div className="spacer-inner"></div> */}
              <a href="/">{minibanner.link}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniBanner;
