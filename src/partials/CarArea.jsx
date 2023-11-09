import React from 'react';

function CarArea(props) {
  return (
    <div className="car-area bg py-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline"><i className="flaticon-drive"></i> New Arrivals</span>
              <h2 className="site-title">Let's Check Latest <span>Vehicle</span></h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Repeat the following block for each car item */}
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="car-item wow fadeInUp" data-wow-delay=".25s" style={{ visibility: 'visible', animationDelay: '0.25s', animationName: 'fadeInUp' }}>
              <div className="car-img">
                <span className="car-status status-1">Used</span>
                <img src="assets/img/slider/hero-4.png" alt="image" />
                <div className="car-btns">
                  <a href="nolink"><i className="far fa-heart"></i></a>
                  <a href="nolink"><i className="far fa-arrows-repeat"></i></a>
                </div>
              </div>
              <div className="car-content">
                <div className="car-top">
                  <h4><a href="shop-single.html">Eicher 20.15 Skyline</a></h4>
                  <div className="car-rate">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <span>5.0 (58.5k Review)</span>
                  </div>
                </div>
                <ul className="car-list">
                  <li><i className="far fa-steering-wheel"></i>Automatic</li>
                  <li><i className="far fa-road"></i>10.15km / 1-litre</li>
                  <li><i className="far fa-car"></i>Eng. Model : Cummins BSIII TCI</li>
                  <li><i className="far fa-gas-pump"></i>Eicher</li>
                </ul>
                <div className="car-footer">
                  <span className="car-price">TK 8,00,000</span>
                  <a href="shop-single.html" className="theme-btn"><span className="far fa-eye"></span>Details</a>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat this block for each car item */}
        </div>
        <div className="text-center mt-4">
          <a href="nolink" className="theme-btn">Load More <i className="far fa-arrow-rotate-right"></i></a>
        </div>
      </div>
    </div>
  );
}

export default CarArea;
