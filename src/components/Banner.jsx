import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <p className="banner__content__subtitle">
          Personalized Ayurvedic Treatment
        </p>
        <p className="banner__content__title">
          Get Authentic Ayurvedic Treatment Today!
        </p>
        <p className="banner__content__btns">
          <a href="#" className="banner__content__btns__btn btn-primary">
            Consultation on Call <span className="icon">&rarr;</span>
          </a>
          <a href="#" className="banner__content__btns__btn btn-secondary">
            Book Appointment <span className="icon">&rarr;</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Banner;
