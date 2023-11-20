import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
export const OTPForm = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const { userMobile, userName } = useParams();
  //   console.log({userMobile,userName});

  const handleMobileNumberChange = (event) => {
    // Allow only numeric values
    const inputValue = event.target.value.replace(/[^0-9]/g, "");

    // Limit the input to 11 characters
    if (inputValue.length <= 11) {
      setMobileNumber(inputValue);
    }
  };

  const isMobileNumberValid = () => {
    // Check if the mobile number starts with "01" and is exactly 11 digits
    const bdMobileNumberRegex = /^01\d{9}$/;
    return bdMobileNumberRegex.test(mobileNumber);
  };

  const getBorderColor = () => {
    if (mobileNumber.length === 0) {
      return ""; // Default border color when no input is provided
    } else {
      return isMobileNumberValid() ? "green" : "red";
    }
  };

  return (
    <div className="login-area pt-40">
      <div className="container">
        <div className="col-md-5 mx-auto">
          <div className="login-form">
            <div className="login-header ">
              <img
                src={window.location.origin+ "/assets/img/logo/logo.png"}
                alt="l"
              />
            </div>
            <form action="#" className="mt-2">
              <div className="form-group">
                <label>
                  Enter Your Valid Mobile Number :{" "}
                  <i className="fa-regular fa-mobile-alt"></i>{" "}
                </label>

                <div className="input-group mb-3">
                  <span className="input-group-text bg-white" id="basic-addon1">
                    +88
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ex: 01XXXXXXXXX"
                    aria-label="mobile"
                    aria-describedby="basic-addon1"
                    value={mobileNumber}
                    onChange={handleMobileNumberChange}
                    style={{ borderColor: getBorderColor() }}
                  />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button
                  type="submit"
                  disabled={!isMobileNumberValid()}
                  className="theme-btn"
                >
                  <i className="far fa-paper-plane"></i> Send OTP
                </button>
              </div>
            </form>

            <div className="login-footer">
              <p>
                Already have an account? <Link to="/login">Login.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
