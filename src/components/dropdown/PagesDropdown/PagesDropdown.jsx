import React from "react";
import "./PagesDropdown.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PagesDropdown = ({ position, items, className }) => {
  const navigate = useNavigate();

  // const handleLinkClick = (path) => {
  //   navigate(path);
  // };

  return (
      <div
        className={`pagedrop ${className || ""}`}
        style={{
        left: position.left,
        paddingLeft: position.paddingLeft,
        paddingRight: position.paddingRight
      }}
      >
        <ul className="list-unstyled px-4 py-4">
          {items.map((item, index) => (
          <li className="py-1" key={index}>
            <Link
              to={item.path}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.path);
              }}
            >
              {item.label}
            </Link>
          </li>
           ))}
        </ul>
      </div>
  );
};

export default PagesDropdown;
