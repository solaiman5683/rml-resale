import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-area pt-40">
      <div className="container">
        <div className="col-md-5 mx-auto">
          <div className="login-form">
            <div className="login-header">
              <img  src={window.location.origin+ "/assets/img/logo/logo.png"} alt="l" />
            </div>
            <form action="#">
              <div className="form-group">
                <label>Full Name</label>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-white" id="basic-addon1">
                    <i className="fa-regular fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Full Name"
                    aria-label="name"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Mobile</label>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-white" id="basic-addon1">
                    <i className="fa-regular fa-mobile-alt"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your mobile number"
                    aria-label="mobile"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-white" id="basic-addon1">
                    <i className="fa-regular fa-eye-slash"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your password"
                    aria-label="password"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-white" id="basic-addon1">
                    <i className="fa-regular fa-eye-slash"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                    aria-label="password"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>

              <div className="form-check form-group">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked=""
                  value=""
                  id="agree"
                />
                <label className="form-check-label" for="agree">
                  I agree with the <a href="Terms">Terms Of Service.</a>
                </label>
              </div>
              <div className="d-flex align-items-center">
                <button type="submit" className="theme-btn">
                  <i className="far fa-paper-plane"></i> Register
                </button>
              </div>
            </form>
            <div className="login-footer">
              <p>
                Already have an account? <Link to="login">Login.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
