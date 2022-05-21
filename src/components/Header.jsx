import React, { useState } from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <a href="#" className="sidebar__list__item">
          <li className="sidebar__list__item__link active">Home</li>
        </a>
        <a href="#" className="sidebar__list__item">
          <li className="sidebar__list__item__link">About us</li>
        </a>
        <a href="#" className="sidebar__list__item">
          <li className="sidebar__list__item__link">Research & Development</li>
        </a>
        <a href="#" className="sidebar__list__item">
          <li className="sidebar__list__item__link">Products & Services</li>
        </a>
        <a href="#" className="sidebar__list__item">
          <li className="sidebar__list__item__link">Ayurveda eClinic</li>
        </a>
        <a href="#" className="sidebar__list__item">
          <li className="sidebar__list__item__link">Shop</li>
        </a>
        <a href="#" className="sidebar__list__item">
          <li className="sidebar__list__item__link">My Account</li>
        </a>
        <a href="#" className="sidebar__list__item">
          <li className="sidebar__list__item__link">Contact us</li>
        </a>
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
            <a href="#" className="navbar--bottom__logo">
              <img src="./img/logo.webp" alt="Cognosmed" />
            </a>
            {/* Create an unordered list with 9 list items and inside every time their should be anchor tags */}
            <ul className="navbar--bottom__list">
              <li className="navbar--bottom__list__item">
                <a href="#" className="navbar--bottom__list__item__link active">
                  Home
                </a>
              </li>
              <li className="navbar--bottom__list__item">
                <a href="#" className="navbar--bottom__list__item__link">
                  About us
                </a>
              </li>
              <li className="navbar--bottom__list__item">
                <a href="#" className="navbar--bottom__list__item__link">
                  Research & Development
                </a>
              </li>
              <li className="navbar--bottom__list__item">
                <a href="#" className="navbar--bottom__list__item__link">
                  Product & Services
                </a>
              </li>
              <li className="navbar--bottom__list__item">
                <a href="#" className="navbar--bottom__list__item__link">
                  Ayerveda eClinic
                </a>
              </li>
              <li className="navbar--bottom__list__item">
                <a href="#" className="navbar--bottom__list__item__link">
                  Shop
                </a>
              </li>
              <li className="navbar--bottom__list__item">
                <a href="#" className="navbar--bottom__list__item__link">
                  My Account
                </a>
              </li>
              <li className="navbar--bottom__list__item">
                <a href="#" className="navbar--bottom__list__item__link">
                  Contact us
                </a>
              </li>
              <li className="navbar--bottom__list__item">
                <a href="#" className="navbar--bottom__list__item__link cart">
                  <i className="fas fa-shopping-bag shopping-icon fa-lg"></i>
                  <div className="counter">0</div>
                </a>
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
