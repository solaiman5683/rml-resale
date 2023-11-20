import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-area pt-40">
      <div className="container">
        <div className="col-md-5 mx-auto">
          <div className="login-form">
            <div className="login-header">
              <img  src={window.location.origin+ "/assets/img/logo/logo.png"} alt="logo" />
            </div>
            <form action="#">
              <div className="form-group">
                <label>Mobile</label>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-white" id="basic-addon1">
                    <i className="fa-regular fa-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your mobile number"
                    aria-label="name"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Password</label>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-white" id="basic-addon2">
                    <i className="fa-regular fa-eye-slash"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
                    aria-label="password"
                    aria-describedby="basic-addon2"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-end mb-4">
                <a href="forgot-password" className="forgot-pass">
                  Forgot Password?
                </a>
              </div>
              <div className="d-flex align-items-center">
                <button type="submit" className="theme-btn">
                  <i className="far fa-sign-in"></i> Login
                </button>
              </div>
            </form>
            <div className="login-footer">
              <p>
                Don't have an account? <Link to="/register">Register.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
