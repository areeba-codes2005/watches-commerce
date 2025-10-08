import React from "react";
import "./Header.css";
import rolex from "../../assets/rolex.png";
import { GoSearch } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsBasket2 } from "react-icons/bs";

const socialIcons = [
  { icon: <IoPersonOutline /> },
  { icon: <IoIosHeartEmpty />, badge: 24 },
  { icon: <BsBasket2 />, badge: 0 },
];

const Header = () => {
  return (
    <header className="container-fluid pt-3">
      <span className="hea-wel">Welcome to our online store!</span>
      <hr className="custom-hr" />
      <div className="row d-flex align-items-center">
        <div className="col-12 col-md-2 col-lg-2 healog-box">
          <img src={rolex} alt="Rolex logo" className="img-fluid hea-logo" />
        </div>
        <div className="col-12 col-md-8 col-lg-8 d-flex justify-content-center align-items-center">
          <div className="search-box d-flex justify-content-between align-items-center">
            <div>
              <GoSearch className="search-icon" />
              <input type="text" placeholder="Search products..." />
            </div>
            <button className="sea-btn">Search</button>
          </div>
        </div>
        <div className="d-none d-md-block col-md-2 col-lg-2">
          <div className="d-flex gap-md-2 gap-lg-4 social-icons">
            {socialIcons.map((item, index) => (
              <div className="position-relative d-inline-block" key={index}>
                <a className="icon d-inline-block position-relative" href="#">
                  {item.icon}
                  {/* Badge */}
                  {item.badge !== undefined && (
                    <span className="position-absolute top-0 start-100 translate-middle rounded-circle my-badge">
                      {item.badge}
                    </span>
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
