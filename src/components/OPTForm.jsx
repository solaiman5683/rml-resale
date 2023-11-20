import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import TosterNotify from "../components/TosterNotify";

export const OTPForm = () => {
  const [optNumber, setOptNumber] = useState(["", "", "", ""]);
  const { userMobile, userName } = useParams();
  const inputRefs = useRef([]);

  useEffect(() => {
    // Focus on the first input field when the component mounts
    inputRefs.current[0].focus();
  }, []);

  const handleInputChange = (index, event) => {
    const inputValue = event.target.value;

    // Only allow numeric input or empty string
    if (!/^\d*$/.test(inputValue) && inputValue !== "") {
      return;
    }
    
    // Update the state
    const newOptNumber = [...optNumber];
    newOptNumber[index] = inputValue;
    setOptNumber(newOptNumber);

    // Move focus to the next input field if not the last one
    if (index < inputRefs.current.length - 1 && inputValue !== "") {
      inputRefs.current[index + 1].focus();
    }

    // Move focus to the previous input field if backspace is pressed and the current field is empty
    if (event.code === "Backspace" && inputValue === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (index, event) => {
    event.preventDefault();
    const clipboardData = event.clipboardData.getData("text/plain").split("");

    // Check if any non-numeric character is pasted
    if (clipboardData.some((char) => !/^\d*$/.test(char))) {
      toast.warning("Invalid OTP Code.");
      return;
      
    }

    // Fill the input fields with pasted values
    for (
      let i = index;
      i < inputRefs.current.length && clipboardData.length > 0;
      i++
    ) {
      const pastedValue = clipboardData.shift();

      // Only allow numeric input or empty string
      if (/^\d*$/.test(pastedValue) || pastedValue === "") {
        inputRefs.current[i].value = pastedValue;
        setOptNumber((prevOptNumber) => {
          const newOptNumber = [...prevOptNumber];
          newOptNumber[i] = pastedValue;
          return newOptNumber;
        });
      }
    }
  };

  return (
    <div className="login-area pt-40">
      <div className="container">
        <div className="col-md-5 mx-auto">
          <div className="login-form">
            <div className="login-header ">
              <img
                src={window.location.origin + "/assets/img/logo/logo.png"}
                alt="l"
              />
            </div>
            <form action="#" className="mt-2">
              <div className="form-group">
                <label>
                  Enter OTP Code :{" "}
                  <i
                    className="fa-solid fa-comment-sms fa-beat"
                    style={{ color: "orangered", fontSize: "20px" }}
                  ></i>{" "}
                </label>
                <div className="d-flex gap-3 ">
                  {optNumber.map((value, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      className="form-control"
                      type="text"
                      value={value}
                      onChange={(event) => handleInputChange(index, event)}
                      onPaste={(event) => handlePaste(index, event)}
                      maxLength="1"
                    />
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>Full Name</label>
                <div className="input-group mb-3">
                  <span className="input-group-text bg-white" id="basic-addon1">
                    <i className="fa-regular fa-user"></i>
                  </span>
                  <input
                    value={userName}
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
                    disabled
                    value={userMobile}
                    type="number"
                    className="form-control"
                    placeholder="Your mobile number"
                    aria-label="mobile"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <button
                  type="submit"
                  // disabled={!isMobileNumberValid()}
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
      <TosterNotify />
    </div>
  );
};
