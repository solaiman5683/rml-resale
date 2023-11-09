import React from "react";
import OwlCarousel from "react-owl-carousel";

function Testimonials() {
  //Owl Carousel Settings
  const options = {
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  return (
    <div className="testimonial-area bg py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <i className="flaticon-drive"></i> Testimonials
              </span>
              <h2 className="site-title">
                What Our Client <span>Says</span>
              </h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <OwlCarousel
          // items={4}
          // loop
          // autoplay={true}
          className="testimonial-slider owl-carousel owl-theme"
          {...options}>
          <div className="testimonial-single">
            <div className="testimonial-content">
              <div className="testimonial-author-img">
                <img src="../assets/img/testimonial/01.jpg" alt="log" />
              </div>
              <div className="testimonial-author-info">
                <h4>Sylvia H Green</h4>
                <p>Customer</p>
              </div>
            </div>
            <div className="testimonial-quote">
              <span className="testimonial-quote-icon">
                <i className="flaticon-quote-hand-drawn-symbol"></i>
              </span>
              <p>
                There are many variations of passages available but the majority
                have suffered to the alteration in some injected.
              </p>
            </div>
            <div className="testimonial-rate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="testimonial-single">
            <div className="testimonial-content">
              <div className="testimonial-author-img">
                <img src="assets/img/testimonial/02.jpg" alt="img" />
              </div>
              <div className="testimonial-author-info">
                <h4>Gordo Novak</h4>
                <p>Customer</p>
              </div>
            </div>
            <div className="testimonial-quote">
              <span className="testimonial-quote-icon">
                <i className="flaticon-quote-hand-drawn-symbol"></i>
              </span>
              <p>
                There are many variations of passages available but the majority
                have suffered to the alteration in some injected.
              </p>
            </div>
            <div className="testimonial-rate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="testimonial-single">
            <div className="testimonial-content">
              <div className="testimonial-author-img">
                <img src="assets/img/testimonial/03.jpg" alt="img" />
              </div>
              <div className="testimonial-author-info">
                <h4>Reid E Butt</h4>
                <p>Customer</p>
              </div>
            </div>
            <div className="testimonial-quote">
              <span className="testimonial-quote-icon">
                <i className="flaticon-quote-hand-drawn-symbol"></i>
              </span>
              <p>
                There are many variations of passages available but the majority
                have suffered to the alteration in some injected.
              </p>
            </div>
            <div className="testimonial-rate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="testimonial-single">
            <div className="testimonial-content">
              <div className="testimonial-author-img">
                <img src="assets/img/testimonial/04.jpg" alt="img" />
              </div>
              <div className="testimonial-author-info">
                <h4>Parker Jimenez</h4>
                <p>Customer</p>
              </div>
            </div>
            <div className="testimonial-quote">
              <span className="testimonial-quote-icon">
                <i className="flaticon-quote-hand-drawn-symbol"></i>
              </span>
              <p>
                There are many variations of passages available but the majority
                have suffered to the alteration in some injected.
              </p>
            </div>
            <div className="testimonial-rate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="testimonial-single">
            <div className="testimonial-content">
              <div className="testimonial-author-img">
                <img src="assets/img/testimonial/05.jpg" alt="img" />
              </div>
              <div className="testimonial-author-info">
                <h4>Heruli Nez</h4>
                <p>Customer</p>
              </div>
            </div>
            <div className="testimonial-quote">
              <span className="testimonial-quote-icon">
                <i className="flaticon-quote-hand-drawn-symbol"></i>
              </span>
              <p>
                There are many variations of passages available but the majority
                have suffered to the alteration in some injected.
              </p>
            </div>
            <div className="testimonial-rate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Testimonials;
