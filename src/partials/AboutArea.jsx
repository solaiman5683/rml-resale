import React from 'react';

function AboutArea(props) {
  return (
    <div className="about-area py-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-left wow fadeInLeft" data-wow-delay=".25s" style={{ visibility: 'visible', animationDelay: '0.25s', animationName: 'fadeInLeft' }}>
              <div className="about-img">
                <img src="./assets/img/slider/hero-4.png" alt="image" />
              </div>
              <div className="about-experience">
                <div className="about-experience-icon">
                  <i className="flaticon-car"></i>
                </div>
                <span>
                  30 Years Of <br />
                  Quality Service
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right wow fadeInRight" data-wow-delay=".25s" style={{ visibility: 'visible', animationDelay: '0.25s', animationName: 'fadeInRight' }}>
              <div className="site-heading mb-3">
                <span className="site-title-tagline justify-content-start"> <i className="flaticon-drive"></i> About Us </span>
                <h2 className="site-title"> <span>Rangs Motors Limited .</span></h2>
              </div>
              <p className="about-text text-justify">
                We have introduced some of the top global automotive brands including Volvo-Eicher, Dongfeng, Mahindra &amp; Mahindra.
                <br />

                The company has a wide range of vehicles &amp; also they offer after-sales services, including maintenance, repair and financing options to customers. <br />

                Rangs Motors Limited is committed to providing customers with the best possible experience, from the moment they step into the showroom to the time they drive off with their new vehicle. They have a team of experienced professionals who are dedicated to providing customers with personalized attention and expert advice. <br />

                Overall, Rangs Motors Limited is a trusted and reliable name in the automobile industry in Bangladesh, with a strong focus on customer satisfaction and quality products.
              </p>
              <div className="about-list-wrapper">
                <ul className="about-list list-unstyled">
                  <li>30 Years of Quality Service.</li>
                  <li>Available Service center.</li>
                  <li>24 Hours hotline service(16258).</li>
                </ul>
              </div>
              <a href="about.html" className="theme-btn mt-4">Discover More<i className="fas fa-arrow-right-long"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutArea;
