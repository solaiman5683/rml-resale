// import React from 'react';
// import Aos from "aos";
import 'animate.css';
import "aos/dist/aos.css";
import { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
// import WOW from "wowjs";
import "../assets/css/owl.carousel.min.css";
import "../assets/js/owl.carousel.min.js";

export default function Slider() {
  // useEffect(function () {
  //   Aos.init({ duration: 1000 });
  // }, []);
  useEffect(function () {
    // new WOW.WOW({
    //   live: false,
    // }).init();
    //  const wow = new WOW({
    //     offset: 100,
    //     mobile: false,
    //     live: true
    // })

    // wow.init();
  });
  return (
    <div className="hero-section">
      <OwlCarousel
        items={1}
        loop
        autoplay={true}
        className="hero-slider owl-carousel owl-theme"
      >
        <div
          className="hero-single"
          style={{
            background:
              "url(https://www.rangsgroup.com/media/images/rangs_industries_.2e16d0ba.fill-1255x878-c0.format-webp_qusXp6k.webp)",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="hero-content">
                  <h4
                    className="hero-title animate__animated animate__fadeInRight animate__delay-.05s"
                  >
                    Discover The Perfect Route To Your <span>Dream</span>{" "}
                    Vehicle
                  </h4>
                  <p
                    className="text-justify animate__animated animate__fadeInLeft animate__delay-.750s"
                    // data-aos="fade-left"
                    // data-aos-duration="75000"
                  >
                    Being the market leaders in brand new passenger and
                    commercial vehicles in Bangladesh with over 25 years of
                    experience in delivering world-class brands (such as Eicher
                    and Mahindra), we are now progressively moving towards
                    manufacturing as the core of our business.
                  </p>
                  <div
                    className="hero-btn animate__animated animate__fadeInUp animate__delay-1000s"
                    // data-aos="fade-up"
                    // data-aos-duration="2000"
                    // data-aos-anchor-placement="top-bottom"
                  >
                    <a
                      href="https://www.example.com/about"
                      className="theme-btn"
                    >
                      About More<i className="fas fa-arrow-right-long"></i>
                    </a>
                    <a
                      href="https://www.example.com/learn-more"
                      className="theme-btn theme-btn2"
                    >
                      Learn More<i className="fas fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="hero-right">
                  <div className="hero-img">
                    <img
                    className='animate__animated animate__fadeInRight animate__delay-0.50s'
                      src="https://resale.rangsmotors.com/assets/img/slider/hero-4.png"
                      alt="sliderImage"
                      // data-aos="fade-right"
                      // data-aos-duration="25000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero-single"
          style={{
            background:
              "url(https://www.rangsgroup.com/media/images/2O1A9118.2e16d0ba.fill-1255x878-c0.format-webp.webp) center center/cover no-repeat",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="hero-content">
                  <h1
                    className="hero-title"
                    // data-aos="fade-right"
                    // data-aos-duration="50000"
                  >
                    Best Way To Find Your <span>Dream</span> Vehicle
                  </h1>
                  <p
                    className="text-justify"
                    // data-aos="fade-left"
                    // data-aos-duration="75000"
                  >
                    Being the market leaders in brand new passenger and
                    commercial vehicles in Bangladesh with over 25 years of
                    experience in delivering world-class brands (such as Eicher
                    and Mahindra), we are now progressively moving towards
                    manufacturing as the core of our business.
                  </p>
                  <div
                    className="hero-btn"
                    // data-aos="fade-up"
                    // data-aos-duration="2000"
                    // data-aos-anchor-placement="top-bottom"
                  >
                    <a
                      href="https://www.example.com/about"
                      className="theme-btn"
                    >
                      About More<i className="fas fa-arrow-right-long"></i>
                    </a>
                    <a
                      href="https://www.example.com/learn-more"
                      className="theme-btn theme-btn2"
                    >
                      Learn More<i className="fas fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="hero-right">
                  <div className="hero-img">
                    <img
                      src="../assets/img/slider/hero-5.png"
                      alt="sliderImage"
                      // data-aos="fade-right"
                      // data-aos-duration="25000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="hero-single"
          style={{
            background:
              "url(https://www.rangsgroup.com/media/images/rangs_industries_.2e16d0ba.fill-1255x878-c0.format-webp_qusXp6k.webp)",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="hero-content">
                  <h1
                    className="hero-title"
                    // data-aos="fade-right"
                    // data-aos-duration="50000"
                  >
                    Best Way To Find Your <span>Dream</span> Vehicle
                  </h1>
                  <p
                    className="text-justify"
                    // data-aos="fade-left"
                    // data-aos-duration="75000"
                  >
                    Being the market leaders in brand new passenger and
                    commercial vehicles in Bangladesh with over 25 years of
                    experience in delivering world-class brands (such as Eicher
                    and Mahindra), we are now progressively moving towards
                    manufacturing as the core of our business.
                  </p>
                  <div
                    className="hero-btn"
                    // data-aos="fade-up"
                    // data-aos-duration="2000"
                    // data-aos-anchor-placement="top-bottom"
                  >
                    <a
                      href="https://www.example.com/about"
                      className="theme-btn"
                    >
                      About More<i className="fas fa-arrow-right-long"></i>
                    </a>
                    <a
                      href="https://www.example.com/learn-more"
                      className="theme-btn theme-btn2"
                    >
                      Learn More<i className="fas fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="hero-right">
                  <div className="hero-img">
                    <img
                      src="../assets/img/slider/hero-6.png"
                      alt="sliderImage"
                      // data-aos="fade-right"
                      // data-aos-duration="25000"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}
