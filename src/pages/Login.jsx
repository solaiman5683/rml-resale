import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div class="login-area pt-40">
      <div class="container">
        <div class="col-md-5 mx-auto">
          <div class="login-form">
            <div class="login-header">
              <img src="../assets/img/logo/logo.png" alt="logo" />
            </div>
            <form action="#">
              <div class="form-group">
                <label>Mobile</label>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-white" id="basic-addon1">
                    <i class="fa-regular fa-user"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your mobile number"
                    aria-label="name"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div class="form-group">
                <label>Password</label>
                <div class="input-group mb-3">
                  <span class="input-group-text bg-white" id="basic-addon2">
                    <i class="fa-regular fa-eye-slash"></i>
                  </span>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Your Password"
                    aria-label="password"
                    aria-describedby="basic-addon2"
                  />
                </div>
              </div>

              <div class="d-flex justify-content-end mb-4">
                <a href="forgot-password" class="forgot-pass">
                  Forgot Password?
                </a>
              </div>
              <div class="d-flex align-items-center">
                <button type="submit" class="theme-btn">
                  <i class="far fa-sign-in"></i> Login
                </button>
              </div>
            </form>
            <div class="login-footer">
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
