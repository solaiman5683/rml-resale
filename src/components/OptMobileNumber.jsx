import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TosterNotify from "../components/TosterNotify";

export const OptMobileNumber = () => {
  const navigate = useNavigate();

  const [mobileNumber, setMobileNumber] = useState("");
  const notifySuccess = (msg) => {
    toast.success(msg);
  };
  const notifyError = (msg) => {
    toast.warning(msg);
  };

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
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://202.40.181.98:9090/resale/web_api/version_1_0_1/send_otp.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            sis_id: "1",
            mobile: mobileNumber,
          },
        }
      );

      const data = await response.json();
      if (data.status === "true") {
        notifySuccess("OTP sent successfully");
        setTimeout(() => {
          navigate(`/otpform/${mobileNumber}`);
        }, 1000);
      } else {
        notifyError("Error sending OTP");
        console.error("API response status is not true:", data);
      }
    } catch (error) {
      notifyError("Error sending OTP:", error);
    }
  };

  return (
    <div className="login-area pt-40">
      <div className="container">
        <div className="col-md-5 mx-auto">
          <div className="login-form">
            <div className="login-header ">
              <img src="../assets/img/logo/logo.png" alt="l" />
            </div>
            <form
              action=""
              method="post"
              onSubmit={handleSubmit}
              autoComplete="off"
              className="mt-2"
            >
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
                  style={{
                    backgroundColor: !isMobileNumberValid()
                      ? "darkslategrey"
                      : "#EF1D26",
                  }}
                >
                  Send OTP <i className="fa-solid fa-comment-sms fa-beat"></i>
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
      <TosterNotify />
    </div>
  );
};
