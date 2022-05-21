import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer-inner">
          <div className="grid" style={{ "--col": 4, "--gutter": "20px" }}>
            <div className="grid__item footer-col">
              <img src="./img/logo-circle.png" alt="" className="footer-logo" />
              <strong>Since 2018</strong>
            </div>
            <div className="grid__item footer-col">
              <h3>Information</h3>
              <ul className="footer-col__list">
                <li className="footer-col__list__item">
                  <a href="#" className="footer-col__list__item__link">
                    Products & Services
                  </a>
                </li>
                <li className="footer-col__list__item">
                  <a href="#" className="footer-col__list__item__link">
                    Contact us
                  </a>
                </li>
                <li className="footer-col__list__item">
                  <a href="#" className="footer-col__list__item__link">
                    About us
                  </a>
                </li>
                <li className="footer-col__list__item">
                  <a href="#" className="footer-col__list__item__link">
                    Career
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid__item footer-col">
              <h3>Useful Links</h3>
              <ul className="footer-col__list">
                <li className="footer-col__list__item">
                  <a href="#" className="footer-col__list__item__link">
                    Returns
                  </a>
                </li>
                <li className="footer-col__list__item">
                  <a href="#" className="footer-col__list__item__link">
                    Privacy Policy
                  </a>
                </li>
                <li className="footer-col__list__item">
                  <a href="#" className="footer-col__list__item__link">
                    Terms & Conditions
                  </a>
                </li>
                <li
                  className="footer-col__list__item"
                  style={{ margin: "50px 0" }}
                >
                  <a
                    href="#"
                    className="footer-col__list__item__link"
                    aria-describedby="payment-secured"
                  >
                    <img src="./img/payment-secured.webp" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="grid__item footer-col">
              <h3>Registered Office</h3>
              <ul className="footer-col__list">
                <li className="footer-col__list__item">
                  Cognosmed Laboratories Private Limited
                </li>
                <li className="footer-col__list__item">
                  CIN : U24230BR2018PTC04001
                </li>
                <li className="footer-col__list__item">
                  GSTIN : 10AAHCC8698Q1ZV
                </li>
                <li className="footer-col__list__item">
                  F-2 , Aditya Niwas, Ashiyana Digha Road, Rajabazar, Patna-
                  800014, Bihar- India
                </li>
                <li className="footer-col__list__item">
                  Phone: +91 8594 800 888, +91 7488 109 554
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-follow">
        <div className="footer-inner">
          <h3>Follow us</h3>
          <ul className="footer-follow__list">
            <li className="footer-follow__list__item">
              <a href="#" className="footer-follow__list__item__link">
                <i className="fab fa-facebook" aria-describedby="facebook"></i>
              </a>
            </li>
            <li className="footer-follow__list__item">
              <a href="#" className="footer-follow__list__item__link">
                <i className="fab fa-twitter" aria-describedby="twitter"></i>
              </a>
            </li>
            <li className="footer-follow__list__item">
              <a href="#" className="footer-follow__list__item__link">
                <i
                  className="fab fa-pinterest"
                  aria-describedby="pinterest"
                ></i>
              </a>
            </li>
            <li className="footer-follow__list__item">
              <a href="#" className="footer-follow__list__item__link">
                <i className="fab fa-linkedin" aria-describedby="linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-inner">
          <p>Copyright © 2022 Cognosmed® | Powered by Cognosmed®</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
