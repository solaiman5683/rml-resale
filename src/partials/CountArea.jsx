import React from "react";

function CountArea(props) {
  return (
    <div className="counter-area pt-30 pb-30">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="counter-box">
              <div className="icon">
                <i className="flaticon-car-rental"></i>
              </div>
              <div>
                <span
                  className="counter"
                  data-count="+"
                  data-to="501"
                  data-speed="3000"
                >
                  501
                </span>
                <h6 className="title">+ Available Vehicle</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="counter-box">
              <div className="icon">
                <i className="flaticon-car-key"></i>
              </div>
              <div>
                <span
                  className="counter"
                  data-count="+"
                  data-to="7000"
                  data-speed="3000"
                >
                  7000
                </span>
                <h6 className="title">+ Happy Clients</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="counter-box">
              <div className="icon">
                <i className="flaticon-screwdriver"></i>
              </div>
              <div>
                <span
                  className="counter"
                  data-count="+"
                  data-to="23"
                  data-speed="3000"
                >
                  23
                </span>
                <h6 className="title">+ Work Shop</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="counter-box">
              <div className="icon">
                <i className="flaticon-review"></i>
              </div>
              <div>
                <span
                  className="counter"
                  data-count="+"
                  data-to="30"
                  data-speed="3000"
                >
                  30
                </span>
                <h6 className="title">+ Years Of Experience</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountArea;
