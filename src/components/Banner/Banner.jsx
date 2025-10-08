import React from "react";
import banner from "../../assets/banner.jpg";
import bannerwatch from "../../assets/banner-watch.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      className="container-fluid banner-cont"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="row g-0 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center">
          <div className="bannerbox-1">
            <h6>SALE UP TO 75% OFF!</h6>
            <h2>PLATINUM DESIGN</h2>
            <p>Give Her a Symbol of your never - Ending love</p>
            <div className="mt-5 cobtn-box">
              <div className="d-flex">
                <div className="d-flex flex-column mx-2">
                  <span>00</span>
                  <span>days</span>
                </div>
                <div className="d-flex flex-column mx-2">
                  <span>00</span>
                  <span>hours</span>
                </div>
                <div className="d-flex flex-column mx-2">
                  <span>00</span>
                  <span>minutes</span>
                </div>
                <div className="d-flex flex-column mx-2">
                  <span>00</span>
                  <span>seconds</span>
                </div>
              </div>
              <div className="ms-5 flex-shrink-0">
                <button>Shop now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 bannerbox-2">
          <img src={bannerwatch} alt="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
