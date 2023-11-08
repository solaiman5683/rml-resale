import React from "react";
import OwlCarousel from 'react-owl-carousel';

function Testimonials() {
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
      </div>
      <OwlCarousel    items={4} loop  autoplay ={true}  class="testimonial-slider owl-carousel owl-theme">
        <div class="testimonial-single">
          <div class="testimonial-content">
            <div class="testimonial-author-img">
              <img src="../assets/img/testimonial/01.jpg" alt="testimonial" />
            </div>
            <div class="testimonial-author-info">
              <h4>Sylvia H Green</h4>
              <p>Customer</p>
            </div>
          </div>
          <div class="testimonial-quote">
            <span class="testimonial-quote-icon">
              <i class="flaticon-quote-hand-drawn-symbol"></i>
            </span>
            <p>
              There are many variations of passages available but the majority
              have suffered to the alteration in some injected.
            </p>
          </div>
          <div class="testimonial-rate">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div class="testimonial-single">
          <div class="testimonial-content">
            <div class="testimonial-author-img">
              <img src="assets/img/testimonial/02.jpg" alt />
            </div>
            <div class="testimonial-author-info">
              <h4>Gordo Novak</h4>
              <p>Customer</p>
            </div>
          </div>
          <div class="testimonial-quote">
            <span class="testimonial-quote-icon">
              <i class="flaticon-quote-hand-drawn-symbol"></i>
            </span>
            <p>
              There are many variations of passages available but the majority
              have suffered to the alteration in some injected.
            </p>
          </div>
          <div class="testimonial-rate">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div class="testimonial-single">
          <div class="testimonial-content">
            <div class="testimonial-author-img">
              <img src="assets/img/testimonial/03.jpg" alt />
            </div>
            <div class="testimonial-author-info">
              <h4>Reid E Butt</h4>
              <p>Customer</p>
            </div>
          </div>
          <div class="testimonial-quote">
            <span class="testimonial-quote-icon">
              <i class="flaticon-quote-hand-drawn-symbol"></i>
            </span>
            <p>
              There are many variations of passages available but the majority
              have suffered to the alteration in some injected.
            </p>
          </div>
          <div class="testimonial-rate">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div class="testimonial-single">
          <div class="testimonial-content">
            <div class="testimonial-author-img">
              <img src="assets/img/testimonial/04.jpg" alt />
            </div>
            <div class="testimonial-author-info">
              <h4>Parker Jimenez</h4>
              <p>Customer</p>
            </div>
          </div>
          <div class="testimonial-quote">
            <span class="testimonial-quote-icon">
              <i class="flaticon-quote-hand-drawn-symbol"></i>
            </span>
            <p>
              There are many variations of passages available but the majority
              have suffered to the alteration in some injected.
            </p>
          </div>
          <div class="testimonial-rate">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <div class="testimonial-single">
          <div class="testimonial-content">
            <div class="testimonial-author-img">
              <img src="assets/img/testimonial/05.jpg" alt />
            </div>
            <div class="testimonial-author-info">
              <h4>Heruli Nez</h4>
              <p>Customer</p>
            </div>
          </div>
          <div class="testimonial-quote">
            <span class="testimonial-quote-icon">
              <i class="flaticon-quote-hand-drawn-symbol"></i>
            </span>
            <p>
              There are many variations of passages available but the majority
              have suffered to the alteration in some injected.
            </p>
          </div>
          <div class="testimonial-rate">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Testimonials;
