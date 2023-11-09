import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
 
    <div class="login-area pt-40">
    <div class="container">
        <div class="col-md-5 mx-auto">
            <div class="login-form">
                <div class="login-header">
                    <img src="../assets/img/logo/logo.png" alt="l"/>
                </div>
                <form action="#">
                  
                    <div class="form-group">
                        <label>Full Name</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text bg-white" id="basic-addon1"><i class="fa-regular fa-user"></i></span>
                            <input type="text" class="form-control" placeholder="Your Full Name" aria-label="name" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Mobile</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text bg-white" id="basic-addon1"><i class="fa-regular fa-mobile-alt"></i></span>
                            <input type="text" class="form-control" placeholder="Your mobile number" aria-label="mobile" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text bg-white" id="basic-addon1"><i class="fa-regular fa-eye-slash"></i></span>
                            <input type="password" class="form-control" placeholder="Your password" aria-label="password" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Confirm Password</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text bg-white" id="basic-addon1"><i class="fa-regular fa-eye-slash"></i></span>
                            <input type="password" class="form-control" placeholder="Confirm password" aria-label="password" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                  
                   
                    <div class="form-check form-group">
                        <input class="form-check-input" type="checkbox" checked="" value="" id="agree"/>
                        <label class="form-check-label" for="agree">
                            I agree with the <a href="Terms">Terms Of Service.</a>
                        </label>
                    </div>
                    <div class="d-flex align-items-center">
                        <button type="submit" class="theme-btn"><i class="far fa-paper-plane"></i> Register</button>
                    </div>
                </form>
                <div class="login-footer">
                    <p>Already have an account? <Link to="login">Login.</Link></p>
                   
                </div>
            </div>
        </div>
    </div>
</div>

  );
};

export default Register;
