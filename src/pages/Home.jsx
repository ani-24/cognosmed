import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "../components/Footer";
import JumpToTop from "../components/JumpToTop";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-inner">
        <div className="grid" style={{ "--col": 3 }}>
          <div className="grid__item">
            <div className="card">
              <div className="card__img">
                <img src="./img/herosection-1.webp" alt="" />
              </div>
              <div className="card__body">
                <div className="card__body__title">Research & Development</div>
                <p className="card__body__text">
                  COGNOSMED specializes in support to bring innovative products
                  to market and to enhance and improve essential processes in
                  manufacturing of Advanced Ayurveda.
                </p>
                <a href="#" className="card__body__btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <div className="card__img">
                <img src="./img/herosection-2.webp" alt="" />
              </div>
              <div className="card__body">
                <div className="card__body__title">Products & Services</div>
                <p className="card__body__text">
                  At Cognosmed, We offer range of products such as Stress
                  relieving Tea, Immuno Boosting Tea, Hand Sanitizer, Nitrile
                  Examination gloves and many more with quality services
                </p>
                <a href="#" className="card__body__btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <div className="card__img">
                <img src="./img/herosection-3.webp" alt="" />
              </div>
              <div className="card__body">
                <div className="card__body__title">Ayurveda eClinic</div>
                <p className="card__body__text">
                  Get Medical Advice from our well experienced, specialized
                  Ayurveda Doctors. Please fill the simple questionnaire or
                  Contact us to get Medical advice for your solutions.
                </p>
                <a href="#" className="card__body__btn">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <section className="certifications">
      <div className="section-inner">
        <h2 className="section-title">Our Certifications</h2>
        <div className="certifications-inner">
          <div className="grid" style={{ "--col": 5, "--gutter": "10px" }}>
            <div className="grid__item">
              <img src="./img/certification-1.webp" alt="" />
            </div>
            <div className="grid__item">
              <img src="./img/certification-2.webp" alt="" />
            </div>
            <div className="grid__item">
              <img src="./img/certification-3.webp" alt="" />
            </div>
            <div className="grid__item">
              <img src="./img/certification-4.webp" alt="" />
            </div>
            <div className="grid__item">
              <img src="./img/certification-5.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RecentProducts = () => {
  return (
    <section className="recent-products">
      <div className="section-inner">
        <h2 className="section-title">Our Recent Products!</h2>
        <div className="recent-products-inner">
          <div className="grid" style={{ "--col": 3, "--gutter": "30px" }}>
            <div className="grid__item">
              <div className="card">
                <div className="card__badge">Sale!</div>
                <div className="card__img">
                  <img src="./img/recent-product-1.webp" alt="" />
                </div>
                <div className="card__body">
                  <div className="card__body__text">
                    Cognosmed Castile Bar Soap (100 GM)
                    <div>
                      <del className="cut">₹250.00</del>₹199.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid__item">
              <div className="card">
                <div className="card__badge">Sale!</div>
                <div className="card__img">
                  <img src="./img/recent-product-2.webp" alt="" />
                </div>
                <div className="card__body">
                  <div className="card__body__text">
                    Cognosmed 3 Ply Face Mask (100 Pieces)
                    <div>
                      <del className="cut">₹250.00</del>₹199.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid__item">
              <div className="card">
                <div className="card__badge">Sale!</div>
                <div className="card__img">
                  <img src="./img/recent-product-3.webp" alt="" />
                </div>
                <div className="card__body">
                  <div className="card__body__text">
                    Cognosmed Nitrile Gloves (100 Pieces / Box)
                    <div>
                      <del className="cut">₹250.00</del>₹199.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid__item">
              <div className="card">
                <div className="card__badge">Sale!</div>
                <div className="card__img">
                  <img src="./img/recent-product-4.webp" alt="" />
                </div>
                <div className="card__body">
                  <div className="card__body__text">
                    Cognosmed Natural Hand Sanitizer (50 ML)
                    <div>
                      <del className="cut">₹250.00</del>₹199.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Numbers = () => {
  useEffect(() => {
    const counterSection = document.querySelector(".counter-section");
    window.addEventListener("scroll", () => {
      if (
        window.scrollY >
        counterSection.getBoundingClientRect().top - window.innerHeight + 200
      ) {
        const counters = document.querySelectorAll(".counter-num");
        counters.forEach((counter) => {
          const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const inc = target / 10000;
            if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 1);
            }
          };
          updateCount();
        });
      }
    });
  }, []);

  return (
    <section className="counter-section">
      <div className="section-inner">
        <div className="grid" style={{ "--col": 3, "--gutter": 0 }}>
          <div className="grid__item counter-1">
            <div className="counter">
              <div className="icon">
                <img src="./img/icon-1.webp" alt="" />
              </div>
              <p className="counter-num" data-target="3">
                0
              </p>
              <p className="counter-text">Open Clinics</p>
            </div>
            <div className="counter">
              <div className="icon">
                <img src="./img/icon-2.webp" alt="" />
              </div>
              <p className="counter-num" data-target="220">
                0
              </p>
              <p className="counter-text">Medical Product</p>
            </div>
          </div>
          <div className="grid__item counter-img">
            <p className="counter-section__subtitle">
              COGNOSMED WELLNESS e-CENTER
            </p>
            <p className="counter-section__title">
              Bringing Ayurveda to Every Home!
            </p>
            <img src="./img/ayurveda.webp" alt="" />
          </div>
          <div className="grid__item counter-2">
            <div className="counter">
              <div className="icon">
                <img src="./img/icon-3.webp" alt="" />
              </div>
              <p className="counter-num" data-target="51">
                0
              </p>
              <p className="counter-text">Plus Patients</p>
            </div>
            <div className="counter">
              <div className="icon">
                <img src="./img/icon-4.webp" alt="" />
              </div>
              <p className="counter-num" data-target="8">
                0
              </p>
              <p className="counter-text">Employees</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="section-inner">
        <h2 className="section-title">Testimonials</h2>
        <Swiper
          spaceBetween={50}
          direction="horizontal"
          loop="true"
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="testimonial">
              <div className="testimonial__img">
                <img src="./img/testimonial-1.webp" alt="" />
              </div>
              <div className="testimonial__body">
                <p className="testimonial__body__text">
                  Cognosmed Nitrile Gloves is a sense of the size that can grasp
                  small things, It is suitable for my dental practice work. It
                  is best for sensitive skin who has allergic to powder based
                  latex rubber.
                </p>
                <p className="testimonial__body__author">
                  Dr. Prerna Priya - Dentist
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <div className="testimonial__img">
                <img src="./img/testimonial-2.webp" alt="" />
              </div>
              <div className="testimonial__body">
                <p className="testimonial__body__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque euismod, nisi vel consectetur interdum, nisl nunc
                  egestas nisi, sed euismod nisl nunc egestas
                </p>
                <p className="testimonial__body__author">Dr. John Doe</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

const Blog = () => {
  return (
    <section className="blog">
      <div className="section-inner">
        <h2 className="section-title">Our Health Blog</h2>
        <div className="grid" style={{ "--col": 3, "--gutter": 0 }}>
          <div className="grid__item">
            <div className="card">
              <div className="card__img">
                <img src="./img/blog-1.webp" alt="" />
              </div>
              <div className="card__body">
                <p className="card__body__title">
                  SARPAGANDHA: ULTIMATE NATURAL SOLUTION FOR HIGH BLOOD PRESSURE
                </p>
                <p className="card__body__text">
                  Sarpagandha (Rauwolfia serpentina ) is small, green, erect,
                  perennial shrub which grows at a height of around 15-45cm.
                  This plant grows
                </p>
                <p className="card__body__author">
                  Dr. John Doe - Ayurveda Expert
                </p>
                <a href="#" className="card__body__btn">
                  Read more &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <div className="card__img">
                <img src="./img/blog-2.webp" alt="" />
              </div>
              <div className="card__body">
                <p className="card__body__title">
                  Relevance of Ayurveda in Modern Lifestyle
                </p>
                <p className="card__body__text">
                  Our modern age proudly displays a lifestyle where work,
                  communication, business and travel has been made extremely
                  easy for man, with
                </p>
                <p className="card__body__author">
                  Dr. John Doe - Ayurveda Expert
                </p>
                <a href="#" className="card__body__btn">
                  Read more &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <div className="card__img">
                <img src="./img/blog-3.webp" alt="" />
              </div>
              <div className="card__body">
                <p className="card__body__title">
                  Importance of Ayurvedic medicine in the modern lifestyle
                </p>
                <p className="card__body__text">
                  The entire science of Ayurveda is based on the ‘Five Great
                  Elements’ (Panchabhuta) theory. These five elements are earth
                  (prithvi), water
                </p>
                <p className="card__body__author">
                  Dr. John Doe - Ayurveda Expert
                </p>
                <a href="#" className="card__body__btn">
                  Read more &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Banner />
      <Certifications />
      <RecentProducts />
      <Numbers />
      <Testimonials />
      <Blog />
      <Footer />
      <JumpToTop />
    </>
  );
};

export default Home;
