import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowsAlt, FaHeart, FaShoppingBag } from "react-icons/fa";

const ProductCard = ({ Image, CardName, ProductName, Price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product");
  };
  return (
    <div className="card">
      <div className="card__img" onClick={handleClick}>
        <img src={Image} alt={ProductName} className="img-fluid" />
        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
          <li className="icon">
            <FaArrowsAlt />
          </li>
          <li className="icon mx-3">
            {" "}
            <FaHeart />
          </li>
          <li className="icon">
            <FaShoppingBag />
          </li>
        </ul>
      </div>
      <div className="card__name">
        <p>{CardName}</p>
      </div>
      <div className="product__name">
        <p>{ProductName}</p>
      </div>
      <div className="card__price">
        <span className="card__price price">${Price}</span>
      </div>
      <div className="card__btn">
        <button className="card__button">Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
