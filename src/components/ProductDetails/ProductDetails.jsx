import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaArrowLeft,
} from "react-icons/fa";
import "./ProductDetails.css";
import ProductPage from "../Product/ProductPage";
import { BestProductData } from "../data/ProductData";

const ProductDetails = ({ product }) => {
  const navigate = useNavigate();
  if (!product || !product.images) {
    return <div>Loading product...</div>;
  }
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="container-fluid back">
      <div className="container py-5">
        <div onClick={() => navigate(-1)} className="back-btn">
          <FaArrowLeft />
        </div>
        <div className="row">
          {/* Left: Main image and thumbnails */}
          <div className="col-md-6">
            <img
              src={mainImage}
              alt="Product"
              className="img-fluid mb-3 main-img-border"
            />
            <div className="row">
              {product.images.map((img, i) => (
                <div className="col-3" key={i}>
                  <img
                    src={img}
                    alt={`Thumbnail ${i}`}
                    className={`img-fluid product-feature-thumb ${
                      mainImage === img ? "active" : ""
                    }`}
                    onClick={() => setMainImage(img)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="col-md-6">
            <h2 className="product-feature-title">{product.title}</h2>
            <p className="product-feature-rating">
              {[...Array(5)].map((_, i) =>
                i < 4 ? (
                  // First 4 stars
                  <FaStar key={i} className="product-feature-star" />
                ) : (
                  // Last (5th) star
                  <FaStar key={i} className="product-feature-last-star" />
                )
              )}{" "}
              <span>Read reviews (1) | Write a review</span>
            </p>
            <h5 className="product-feature-price">
              {product.priceNew}{" "}
              <del className="prduct-feature-priceOld">{product.priceOld}</del>
            </h5>

            {/* Size boxes */}
            <div className="mb-2">
              <label className="product-feature-label pb-2">Size</label>
              <div className="d-flex gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <div
                    key={size}
                    className={`px-3 py-1 product-feature-sizes ${
                      selectedSize === size ? "active" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="mb-2">
              <label className="product-feature-label pb-2">Color</label>
              <div className="d-flex gap-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`product-feature-cocircle ${
                      selectedColor === color ? "active" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-2">
              <label className="product-feature-label pb-2">Quantity</label>
              <div
                className="d-flex justify-content-center align-items-center product-feature-qty-selector"
                style={{ width: 110, overflow: "hidden" }}
              >
                <button
                  className="qty-btn"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center qty-btn"
                  readOnly
                  value={quantity}
                  style={{ width: 55, height: 20 }}
                />
                <button
                  className="qty-btn"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <button className="product-feature-ATC mt-2">Add to Cart</button>

            {/* Meta Info */}
            <div className="mt-4">
              <p>
                <strong className="product-feature-label me-3">
                  In stock:
                </strong>{" "}
                <span className="product-feature-meta">
                  {product.stock} Items
                </span>
              </p>
              <p>
                <strong className="product-feature-label me-3">
                  Reference:
                </strong>{" "}
                <span className="product-feature-meta">
                  {product.reference}
                </span>
              </p>
              <p>
                <strong className="product-feature-label me-3">Brand:</strong>{" "}
                <span className="product-feature-meta">{product.brand}</span>
              </p>
              <p>
                <strong className="product-feature-label me-3">
                  Categories:
                </strong>{" "}
                <span className="product-feature-meta">
                  {product.categories.join(", ")}
                </span>
              </p>
              <p>
                <strong className="product-feature-label me-3">Share:</strong>{" "}
                <a href="#" className="px-2">
                  <FaFacebook className="profea-social-icon facebook" />
                </a>{" "}
                <a href="#" className="px-2">
                  <FaInstagram className="profea-social-icon instagram" />
                </a>
                <a href="#" className="px-2">
                  <FaYoutube className="profea-social-icon youtube" />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <hr className="my-5" />
        <div>
          <ul className="nav nav-tabs border-0 justify-content-center">
            {[
              { key: "description", label: "Description" },
              { key: "details", label: "Product Details" },
              { key: "reviews", label: "Reviews" },
              { key: "shipping", label: "Shipping & Return" },
            ].map((tab) => (
              <li className="nav-item" key={tab.key}>
                <button
                  className={`nav-link border-0 product-tab-btn ${
                    activeTab === tab.key ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                  style={{ background: "none" }}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="p-4">
            {activeTab === "description" && (
              <div className="product-fet-description-block mt-4">
                <h5 className="product-fet-desc-title mb-3">Description</h5>
                <p className="product-fet-desc-para">{product.description}</p>
              </div>
            )}
            {activeTab === "details" && (
              <div className="product-fet-details-block mt-4">
                <h5 className="product-fet-details-title mb-3">
                  Product Details
                </h5>

                {Object.entries(product.ProductDetails).map(([key, value]) => (
                  <p key={key} className="mb-2">
                    <strong className="product-fet-details-label">
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </strong>{" "}
                    <span className="product-fet-details-value">{value}</span>
                  </p>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <section className="product-fet-reviews-section mt-4">
                <h5 className="product-fet-reviews-title mb-3">
                  Customer Reviews
                </h5>

                {product.ProductReviews.map((review, index) => (
                  <ul
                    className="product-fet-reviews-list list-unstyled"
                    key={index}
                  >
                    {Object.entries(review).map(([key, value]) => (
                      <li className="product-fet-review-item mb-2" key={key}>
                        <strong className="product-fet-review-label">
                          {key.charAt(0).toUpperCase() + key.slice(1)}:
                        </strong>{" "}
                        <span className="product-fet-review-value">
                          {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                ))}
              </section>
            )}

            {activeTab === "shipping" && (
              <div className="product-fet-shipping-section">
                {product.ShippingandReturn.map((section, index) => (
                  <div key={index}>
                    <h5 className="product-fet-shipping-title">
                      {section.title}
                    </h5>
                    <p style={{ whiteSpace: "pre-line" }}>{section.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <ProductPage
        type="best"
        title="Related products"
        titleColorClass="related-title"
        showFilters={false}
        data={[...BestProductData, ...BestProductData.slice(0, 3)]}
        colClasses="col-12 col-md-3 col-lg-3"
      />
    </div>
  );
};

export default ProductDetails;
