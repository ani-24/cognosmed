import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <Link to="/" className="sidebar__list__item">
          <li className="sidebar__list__item__link active">Home</li>
        </Link>
        <Link to="/" className="sidebar__list__item">
          <li className="sidebar__list__item__link">About us</li>
        </Link>
        <Link to="/" className="sidebar__list__item">
          <li className="sidebar__list__item__link">Research & Development</li>
        </Link>
        <Link to="/" className="sidebar__list__item">
          <li className="sidebar__list__item__link">Products & Services</li>
        </Link>
        <Link to="/" className="sidebar__list__item">
          <li className="sidebar__list__item__link">Ayurveda eClinic</li>
        </Link>
        <Link to="/" className="sidebar__list__item">
          <li className="sidebar__list__item__link">Shop</li>
        </Link>
        <Link to="/" className="sidebar__list__item">
          <li className="sidebar__list__item__link">My Account</li>
        </Link>
        <Link to="/contact" className="sidebar__list__item">
          <li className="sidebar__list__item__link">Contact us</li>
        </Link>
      </ul>
    </div>
  );
};

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {isVisible && (
        <div className="overlay" onClick={() => setIsVisible(false)}></div>
      )}
      <div className="header">
        <div className="navbar--top">
          <div className="navbar--top-inner">
            <div className="navbar--top__left">
              <div className="navbar--top__left__box whatsapp">
                <i className="fab fa-whatsapp navbar--top__left__box__icon"></i>
                +91 8594800888
              </div>
              <div className="navbar--top__left__box mail">
                <a href="mailto:aniketkumar2427@gmail.com">
                  <i className="fas fa-envelope navbar--top__left__box__icon"></i>
                  care@cognosmed.com
                </a>
              </div>
            </div>
            <div className="navbar--top__right">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
        <div className="navbar--bottom">
          <div className="navbar--bottom-inner">
            <Link to="/" className="navbar--bottom__logo">
              <img src="./img/logo.webp" alt="Cognosmed" />
            </Link>
            {/* Create an unordered list with 9 list items and inside every time their should be anchor tags */}
            <ul className="navbar--bottom__list">
              <li className="navbar--bottom__list__item">
                <Link
                  className="navbar--bottom__list__item__link active"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="navbar--bottom__list__item">
                <Link className="navbar--bottom__list__item__link" to="/">
                  <a>About us</a>
                </Link>
              </li>
              <li className="navbar--bottom__list__item">
                <Link className="navbar--bottom__list__item__link" to="/">
                  <a>Research & Development</a>
                </Link>
              </li>
              <li className="navbar--bottom__list__item">
                <Link className="navbar--bottom__list__item__link" to="/">
                  <a>Product & Services</a>
                </Link>
              </li>
              <li className="navbar--bottom__list__item">
                <Link className="navbar--bottom__list__item__link" to="/">
                  <a>Ayerveda eClinic</a>
                </Link>
              </li>
              <li className="navbar--bottom__list__item">
                <Link className="navbar--bottom__list__item__link" to="/">
                  <a>Shop</a>
                </Link>
              </li>
              <li className="navbar--bottom__list__item">
                <Link className="navbar--bottom__list__item__link" to="/">
                  <a>My Account</a>
                </Link>
              </li>
              <li className="navbar--bottom__list__item">
                <Link
                  className="navbar--bottom__list__item__link"
                  to="/contact"
                >
                  <a>Contact us</a>
                </Link>
              </li>
              <li className="navbar--bottom__list__item">
                <Link to="/" className="navbar--bottom__list__item__link cart">
                  <i className="fas fa-shopping-bag shopping-icon fa-lg"></i>
                  <div className="counter">0</div>
                </Link>
              </li>
            </ul>
            {/* Add a hamburger menu icon */}
            <div
              className="navbar--bottom__hamburger"
              onClick={() => setIsVisible(true)}
            >
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
      {isVisible && <Sidebar />}
    </>
  );
};

export default Header;
