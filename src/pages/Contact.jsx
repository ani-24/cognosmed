import React from "react";
import Header from "../components/Header";
import Footer from "./../components/Footer";
import JumpToTop from "./../components/JumpToTop";

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="main-section-inner">
        <div className="grid" style={{ "--col": 2 }}>
          <div className="main-section__left">
            <div className="main-section__left__box">
              <ul className="main-section__left__box__list">
                <li className="main-section__left__box__list__item">
                  <i className="fas fa-phone main-section__left__box__list__item__icon"></i>
                  <span className="main-section__left__box__list__item__text">
                    +91 8594 800 888 <br /> +91 9334 464 888
                  </span>
                </li>
                <li className="main-section__left__box__list__item">
                  <i className="fas fa-envelope main-section__left__box__list__item__icon"></i>
                  <span className="main-section__left__box__list__item__text">
                    care@cognosmed.com
                  </span>
                </li>
                <li className="main-section__left__box__list__item">
                  <i className="fas fa-map-marker-alt main-section__left__box__list__item__icon"></i>
                  <span className="main-section__left__box__list__item__text">
                    Regd. Office : F-2 , Aditya Niwas, Ashiana - Digha Rd, Raja
                    Bazar, Patna, Bihar 800014, and Labs : Dariyapur ,
                    Fakirwara, P.O - Bankipur , Patna - 800004
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-section__right">
            <form action="#">
              <div className="input-field">
                <input type="text" className="input" required />
                <label className="label">Name</label>
              </div>
              <div className="input-field">
                <input type="email" className="input" required />
                <label className="label">Email</label>
              </div>
              <div className="input-field">
                <input type="mobile" className="input" required />
                <label className="label">Mobile</label>
              </div>
              <div className="input-field textarea">
                <textarea className="input" required></textarea>
                <label className="label">Message</label>
              </div>
              <button type="submit" className="btn-submit">
                Send <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1841906.7546789246!2d85.084691!3d25.622385!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb25f7fd6d9aa1a73!2sDUMARIA%20Niwas!5e0!3m2!1sen!2sus!4v1653279844852!5m2!1sen!2sus"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="map"
    ></iframe>
  );
};

const Contact = () => {
  return (
    <>
      <Header />
      <MainSection />
      <Map />
      <Footer />
      <JumpToTop />
    </>
  );
};

export default Contact;
