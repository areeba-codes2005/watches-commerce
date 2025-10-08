import React from "react";
import "./ShopDropdown.css";
import ShopCategories from "../../data/ShopCategories";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ShopDropdown = () => {
  // const navigate = useNavigate();

  // const handleLinkClick = (layoutName) => {
  //   switch (layoutName) {
  //     case "Collection layout 01":
  //       navigate("/collection-layout-01");
  //       break;
  //     case "Collection layout 02":
  //       navigate("/collection-layout-02");
  //       break;
  //     case "Collection layout 03":
  //       navigate("/collection-layout-03");
  //       break;
  //     case "Collection layout 04":
  //       navigate("/collection-layout-04");
  //       break;

  //     // Product Styles
  //     case "Product Style 01":
  //       navigate("/product-style-01");
  //       break;
  //     case "Product Style 02":
  //       navigate("/product-style-02");
  //       break;
  //     case "Product Style 03":
  //       navigate("/product-style-03");
  //       break;
  //     case "Product Style 04":
  //       navigate("/product-style-04");
  //       break;
  //     case "Product Style 05":
  //       navigate("/product-style-05");
  //       break;

  //     // Product Features
  //     case "Product default":
  //       navigate("/product-default");
  //       break;
  //     case "Product Variable":
  //       navigate("/product-variable");
  //       break;
  //     case "Product countdown":
  //       navigate("/product-countdown");
  //       break;
  //     case "Product grouped":
  //       navigate("/product-grouped");
  //       break;
  //     case "Product Out-of-stock":
  //       navigate("/product-out-of-stock");
  //       break;

  //     // Product Layouts
  //     case "Layout 01 - Bottom thumb":
  //       navigate("/layout-01-bottom-thumb");
  //       break;
  //     case "Layout 02 - Left thumb":
  //       navigate("/layout-02-left-thumb");
  //       break;
  //     case "Layout 03 - Right thumb":
  //       navigate("/layout-03-right-thumb");
  //       break;
  //     case "Layout 04 - No thumb":
  //       navigate("/layout-04-no-thumb");
  //       break;
  //     case "Layout 05 - No thumb center":
  //       navigate("/layout-05-no-thumb-center");
  //       break;
  //     case "Layout 06 - No thumb fullwidth":
  //       navigate("/layout-06-no-thumb-fullwidth");
  //       break;
  //     case "Layout 07 - Gallery":
  //       navigate("/layout-07-gallery");
  //       break;
  //     //Popular Product
  //     case "Hanging egg chair":
  //       navigate("/hanging-egg-chair");
  //       break;
  //     case "Objects cushion-Yellow":
  //       navigate("/objects-cushion-yellow");
  //       break;
  //     case "Victo pedant lamp":
  //       navigate("/victo-pedant-lamp");
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <div className="shop-dropdown-outer">
      <div className="container-fluid">
        <div className="row d-flex justify-content-between flex-wrap">
          {ShopCategories.map((category, index) => (
            <div key={index} className="col-12 col-md-12 col-lg-2">
              <h6>{category.title}</h6>
              {/* Links List */}
              {category.links && (
                <ul className="list-unstyled">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="shop-link-item">
                      <Link
                        to="/"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(link);
                        }}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {/* Product Cards */}
              {category.products && (
                <div className="d-flex flex-column gap-3">
                  {category.products.map((product, i) => (
                    <Link
                      key={i}
                      to="/"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(product.name);
                      }}
                      className="d-flex gap-3 align-items-center text-decoration-none"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="img-fluid popular-pro-img"
                      />
                      <div>
                        <div className="popular-pro-name">{product.name}</div>
                        <div className="popular-pro-rating d-flex">
                          {[...Array(5)].map((_, i) =>
                            i < 4 ? (
                              // First 4 stars
                              <FaStar key={i} className="custom-star" />
                            ) : (
                              // Last (5th) star
                              <FaStar key={i} className="last-star" />
                            )
                          )}
                        </div>
                        <div className="product-price">{product.price}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopDropdown;
