import React from "react";
import logo from "../../assets/rolex.png";
import { MdWifiCalling3 } from "react-icons/md";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container-fluid gx-0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 col-lg-3 ftr-leftbox">
            <h6>OUR STORE</h6>
            <div className="list-box">
              <ul>
                <li>
                  <a href="">New York</a>
                </li>
                <li>
                  <a href="">London SF</a>
                </li>
                <li>
                  <a href="">Cockfosters BP</a>
                </li>
                <li>
                  <a href="">Los Angeles</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">Chicago</a>
                </li>
                <li>
                  <a href="">Las Vegas</a>
                </li>
                <li>
                  <a href="">Texas</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-5 ftr-center-box">
            <div className="d-flex justify-content-center">
              <img src={logo} alt="logo" className="img-fluid ftr-logo" />
            </div>
            <div className="d-flex justify-content-center call-box">
              <span>
                <MdWifiCalling3 />
              </span>
              <div className="d-flex flex-column">
                <span>Got Questions ? Call us 24/7!</span>
                <span>+633 497-188-8553</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4 ftr-rightbox">
            <h6>INFORMATION</h6>
            <div className="list-box">
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Delivery information</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">My Account</a>
                </li>
                <li>
                  <a href="">Order History</a>
                </li>
                <li>
                  <a href="">Wish List</a>
                </li>
                <li>
                  <a href="">My Personal Info</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ftr-serow">
        <div className="row mx-auto d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-6 col-lg-2 sign-col">
            <span>
              <FaEnvelopeOpenText />
            </span>
            <h5>SIGN UP TO NEWSLETTER</h5>
          </div>
          <div className="col-12 col-md-6 col-lg-2 sub-col">
            <p>Subscribe to the weekly newsletter for all the latest updates</p>
          </div>
          <div className="col-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center inp-col">
            <div className="search-box d-flex justify-content-between align-items-center">
              <div>
                <input type="email" placeholder="Your Email..." />
              </div>
              <button className="sub-btn">Subscribe</button>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-2 d-flex justify-content-center ico-col">
            <span>
              <FaFacebookF />
            </span>

            <span>
              <FaXTwitter />
            </span>

            <span>
              <FaInstagram />
            </span>

            <span>
              <IoLogoPinterest />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
