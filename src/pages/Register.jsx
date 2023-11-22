import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { OTPForm } from "../components/OPTForm";
import { RegistrationForm } from "../components/RegistrationForm";
import RegistrationMobileNumber from "../components/RegistrationMobileNumber";
import TosterNotify from "../components/TosterNotify";

const Register = () => {
  const navigate = useNavigate();
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [mobileNumber, setMobileNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [otpCode, setOtpCode] = useState("");

  const notifySuccess = (msg) => {
    toast.success(msg);
  };
  const notifyError = (msg) => {
    toast.warning(msg);
  };

  // for RegistrationMobileNumber Event handlers
  const handleMobileNumberChange = (event) => {
    const inputValue = event.target.value.replace(/[^0-9]/g, "");
    if (inputValue.length <= 11) {
      setMobileNumber(inputValue);
    }
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    const newPassword = e.target.value;
    setUserPassword(newPassword);
    const isPasswordLengthValid = newPassword.length >= 4;
    setIsPasswordValid(isPasswordLengthValid);
  };

  const isMobileNumberValid = () => {
    const bdMobileNumberRegex = /^01\d{9}$/;
    return bdMobileNumberRegex.test(mobileNumber);
  };

  const getBorderColor = () => {
    return mobileNumber.length === 0
      ? ""
      : isMobileNumberValid()
        ? "green"
        : "red";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await sendOtpRequest();
      console.log(data, 'data');
      if (data.status === "true") {
        notifySuccess("OTP sent successfully.");
        setOtpCode(data.otp_code);
        console.log(otpCode, '9940');
        console.log(data.otp_code);
        setUserName(data.customer_name);
        setStep1(false);
        setStep3(false);
        setStep2(true);
      } else {
        notifyError("Error sending OTP");
      }
    } catch (error) {
      notifyError("Error sending OTP:", error);
    }
  };
  // end RegistrationMobileNumber Event handlers

  const sendOtpRequest = async () => {
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
    return response.json();
  };
  const changeNumber = () => {
    setStep1(true);
    setStep2(false);
    setStep3(false);
  };
  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    setStep1(false);
    setStep2(false);
    setStep3(true);
  };

  const handleRegSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await sendRegRequest();
      if (data.status === "true") {
        notifySuccess("User registation successfully.");
        setTimeout(async () => {
          navigate("/login");
        }, 1000);
      } else {
        notifyError("Something wrong in SQL server.");
      }
    } catch (error) {
      notifyError("Error :", error);
    }
  };
  const sendRegRequest = async () => {
    const response = await fetch(
      "http://202.40.181.98:9090/resale/web_api/version_1_0_1/user_registration.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          sis_id: "1",
          mobile: mobileNumber,
          name: userName,
          pass: userPassword,
          otp: otpCode,
        },
      }
    );
    return response.json();
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
            {/* Use the RegistrationMobileNumber component */}
            {step1 && (
              <RegistrationMobileNumber
                mobileNumber={mobileNumber}
                handleMobileNumberChange={handleMobileNumberChange}
                isMobileNumberValid={isMobileNumberValid}
                handleSubmit={handleSubmit}
                getBorderColor={getBorderColor}
              />
            )}
            {/* Step 2: OTPForm component added here  */}
            {step2 && (
              <OTPForm
                otpCode={otpCode}
                onResendOTP={sendOtpRequest}
                changeNumber={changeNumber}
                handleOTPSubmit={handleOTPSubmit}
              />
            )}
            {/* Step 2: OTPForm component added here  */}
            {step3 && (
              <RegistrationForm
                userName={userName}
                mobileNumber={mobileNumber}
                handleUserNameChange={handleUserNameChange}
                handlePassword={handlePassword}
                handleRegSubmit={handleRegSubmit}
                isPasswordValid={isPasswordValid}
              />
            )}
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

export default Register;
