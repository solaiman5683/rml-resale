// import "animate.css";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import React, { useEffect, useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import WOW from "wowjs";

export default function Slider() {
  const wow = useRef(null);

  useEffect(() => {
    wow.current = new WOW.WOW({
      live: false,
    });
    wow.current.init();
  }, []);

  const handleSlideChange = () => {
    if (wow.current) {
      wow.current.sync();
      wow.current = new WOW.WOW({
        live: false,
      });
      wow.current.init();
    }
  };

  return (
    <div className="hero-section">
      <OwlCarousel
        items={1}
        loop
        autoplay
        onChange={handleSlideChange}
        className="hero-slider owl-carousel owl-theme"
      >
        {/* Slide 1 */}
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
                    className="hero-title wow fadeInRight"
                    data-wow-delay=".05s"
                  >
                    Discover The Perfect Route To Your <span>Dream</span>{" "}
                    Vehicle
                  </h4>
                  <p
                    className="text-justify wow fadeInLeft"
                    data-wow-delay=".25s"
                  >
                    Being the market leaders in brand new passenger and
                    commercial vehicles in Bangladesh with over 25 years of
                    experience in delivering world-class brands (such as Eicher
                    and Mahindra), we are now progressively moving towards
                    manufacturing as the core of our business.
                  </p>
                  <div className="hero-btn wow fadeInUp" data-wow-delay="1s">
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
                  <div className="hero-img ">
                    <img
                      className="wow fadeInRight"
                      data-wow-delay=".25s"
                      src="https://resale.rangsmotors.com/assets/img/slider/hero-4.png"
                      alt="sliderImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
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
                    className="hero-title wow fadeInRight"
                    data-wow-delay=".05s"
                  >
                    Best Way To Find Your <span>Dream</span> Vehicle
                  </h1>
                  <p
                    className="text-justify wow fadeInLeft"
                    data-wow-delay=".25s"
                  >
                    Being the market leaders in brand new passenger and
                    commercial vehicles in Bangladesh with over 25 years of
                    experience in delivering world-class brands (such as Eicher
                    and Mahindra), we are now progressively moving towards
                    manufacturing as the core of our business.
                  </p>
                  <div className="hero-btn wow fadeInUp" data-wow-delay="1s">
                    <a href="noaction" className="theme-btn">
                      About More<i className="fas fa-arrow-right-long"></i>
                    </a>
                    <a href="noaction" className="theme-btn theme-btn2">
                      Learn More<i className="fas fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="hero-right">
                  <div className="hero-img">
                    <img
                      className="wow fadeInRight"
                      data-wow-delay="500ms"
                      src="../assets/img/slider/hero-5.png"
                      alt="sliderImage"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Slide 3 */}
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
                    className="hero-title wow fadeInRight"
                    data-wow-delay=".05s"
                  >
                    Best Way To Find Your <span>Dream</span> Vehicle
                  </h1>
                  <p
                    className="text-justify wow fadeInLeft"
                    data-wow-delay=".25s"
                  >
                    Being the market leaders in brand new passenger and
                    commercial vehicles in Bangladesh with over 25 years of
                    experience in delivering world-class brands (such as Eicher
                    and Mahindra), we are now progressively moving towards
                    manufacturing as the core of our business.
                  </p>
                  <div className="hero-btn wow fadeInUp" data-wow-delay="1s">
                    <a href="noaction" className="theme-btn">
                      About More<i className="fas fa-arrow-right-long"></i>
                    </a>
                    <a href="noaction" className="theme-btn theme-btn2">
                      Learn More<i className="fas fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="hero-right">
                  <div className="hero-img">
                    <img
                      className="wow fadeInRight"
                      data-wow-delay="500ms"
                      src="../assets/img/slider/hero-6.png"
                      alt="sliderImage"
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
