import React, { useEffect, useState } from "react";
import ShopDropdown from "../dropdown/ShopDropdown/ShopDropdown";
import PagesDropdown from "../dropdown/PagesDropdown/PagesDropdown";
import { blogMenu, pagesMenu } from "../data/PageDropData";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  // Location hook for active link
  const location = useLocation();

  const [activeId, setActiveId] = useState(location.pathname);
  // Show/hide the dropdown
  const [showShop, setShowShop] = useState(false);
  const [showBlog, setShowBlog] = useState(false);
  const [showPages, setShowPages] = useState(false);
  // Toggle the mobile navbar collapse (open/close)
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  // Update activeId on route change
  useEffect(() => {
    setActiveId(location.pathname);
  }, [location.pathname]);

  // Handle responsive view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="container-fluid na">
        <nav className="navbar navbar-expand-lg container-fluid ps-lg-5 py-1">
          {/* Hamburger */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => {
              setIsOpen(!isOpen); // Toggle menu open/close
              setShowShop(false); // Close dropdown if open
            }}
            data-bs-target="#navbarSupportedContent"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsing menu */}
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              {props.menuItems.map((item, index) => {
                const dropdownMap = {
                  Shop: {
                    show: showShop,
                    setShow: setShowShop,
                    component: <ShopDropdown />,
                  },
                  Blog: {
                    show: showBlog,
                    setShow: setShowBlog,
                    component: (
                      <PagesDropdown
                        position={{
                          left: "20%",
                          paddingLeft: "1.5rem",
                          paddingRight: "1.5rem",
                        }}
                        items={blogMenu}
                        className="blog-dropdown"
                      />
                    ),
                  },
                  Pages: {
                    show: showPages,
                    setShow: setShowPages,
                    component: (
                      <PagesDropdown
                        position={{ left: "28%" }}
                        items={pagesMenu}
                        className="pages-dropdown"
                      />
                    ),
                  },
                };
                const dropdown = dropdownMap[item.label];

                if (dropdown) {
                  return (
                    <li
                      key={index}
                      className="nav-item p-2 mx-2 hover-zone"
                      onMouseEnter={
                        !isMobile ? () => dropdown.setShow(true) : undefined
                      }
                      onMouseLeave={
                        !isMobile ? () => dropdown.setShow(false) : undefined
                      }
                      onClick={
                        isMobile
                          ? () => dropdown.setShow((prev) => !prev)
                          : undefined
                      }
                    >
                      <Link
                        className={`nav-link ${
                          activeId === item.link ? "active" : ""
                        }`}
                        to={item.link}
                        onClick={(e) => {
                          if (isMobile && dropdown.component) {
                            e.preventDefault();
                          } else {
                            setIsOpen(false);
                          }
                        }}
                      >
                        {item.label} {item.icon}
                      </Link>
                      {!isMobile && dropdown.show && dropdown.component}
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="nav-item p-2 mx-2">
                      <Link
                        className={`nav-link ${
                          activeId === item.link ? "active" : ""
                        }`}
                        to={item.link}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label} {item.icon}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
