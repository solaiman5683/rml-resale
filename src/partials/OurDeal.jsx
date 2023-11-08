import React from "react";

function OurDeal(props) {
  return (
    <div className="car-dealer pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="site-heading text-center">
              <span className="site-title-tagline">
                <i className="flaticon-drive"></i> OUR DEALERS
              </span>
              <h2 className="site-title">
                Best Dealers In <span>Your City</span>
              </h2>
              <div className="heading-divider"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Repeat the following block for each dealer item */}
          <div className="col-md-6 col-lg-3">
            <div
              className="dealer-item wow fadeInUp"
              data-wow-delay=".25s"
              style={{
                visibility: "visible",
                animationDelay: "0.25s",
                animationName: "fadeInUp",
              }}
            >
              <div className="dealer-img">
                <span className="dealer-listing">Mahindra</span>
                <img src="assets/img/dealer/01.png" alt="" />
              </div>
              <div className="dealer-content">
                <h4>
                  <a href="#">General Motors</a>
                </h4>
                <ul>
                  <li>
                    <i className="far fa-location-dot"></i> Red Crescent
                    Hospital Road, Paharpur, Dinajpur.
                  </li>
                  <li>
                    <i className="fa-solid fa-user-tag"></i>
                    <a>Md. Foyshal Khan</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Repeat this block for each dealer item */}
        </div>
      </div>
    </div>
  );
}

export default OurDeal;
