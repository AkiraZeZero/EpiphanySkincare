import React from "react";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./header.css";

import logo from "../../assets/images/epiphanyLogo.png";
import userIcon from "../../assets/images/user.png"

import { Container, Row } from "reactstrap";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="Epiphany Logo" className="epiphany__logo" />
              <div>
                <h1>Epiphany</h1>
              </div>
            </div>

            <div className="navigation">
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-2-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i class="ri-shopping-cart-line"></i>
                <span className="badge">1</span>
              </span>
              <span>
                {/* <i class="ri-user-5-line"></i> */}
                <motion.img whileTap={{ scale: 1.2 }} src={userIcon} alt="user icon" className="userIcon" />
              </span>
            </div>
            <div className="mobile_menu">
              <span>
                <i class="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
