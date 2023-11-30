import React, { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export const OTPForm = React.memo(
  ({ otpCode, onResendOTP, changeNumber, handleOTPSubmit }) => {
    const [optNumber, setOptNumber] = useState(["", "", "", ""]);
    const [timeLeft, setTimeLeft] = useState(120);
    const [isOTPMatched, setIsOTPMatched] = useState(false); // Define isOTPMatched state
    const inputRefs = useRef([]);

    useEffect(() => {
      inputRefs.current[0].focus();
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) =>
          prevTimeLeft > 0 ? prevTimeLeft - 1 : 0
        );
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    const handleInputChange = useCallback(
      (index, event) => {
        const inputValue = event.target.value;
        if (!/^\d*$/.test(inputValue) && inputValue !== "") {
          return;
        }

        const newOptNumber = [...optNumber];
        newOptNumber[index] = inputValue;
        setOptNumber(newOptNumber);

        if (index < inputRefs.current.length - 1 && inputValue !== "") {
          inputRefs.current[index + 1].focus();
        }

        if (event.code === "Backspace" && inputValue === "" && index > 0) {
          inputRefs.current[index - 1].focus();
        }
      },
      [optNumber]
    );

    const handlePaste = useCallback((index, event) => {
      event.preventDefault();
      const clipboardData = event.clipboardData.getData("text/plain").split("");

      if (clipboardData.some((char) => !/^\d*$/.test(char))) {
        toast.warning("Invalid OTP Code.");
        return;
      }

      for (
        let i = index;
        i < inputRefs.current.length && clipboardData.length > 0;
        i++
      ) {
        const pastedValue = clipboardData.shift();
        if (/^\d*$/.test(pastedValue) || pastedValue === "") {
          inputRefs.current[i].value = pastedValue;
          setOptNumber((prevOptNumber) => {
            const newOptNumber = [...prevOptNumber];
            newOptNumber[i] = pastedValue;
            return newOptNumber;
          });
        }
      }
    }, []);

    const handleResendOTP = useCallback(() => {
      if (timeLeft === 0) {
        setOptNumber(["", "", "", ""]);
        onResendOTP();
        setTimeLeft(120);
      } else {
        toast.warning(
          "Please wait for the current OTP timeout before requesting a new one."
        );
      }
    }, [onResendOTP, timeLeft]);

    useEffect(() => {
      const isOTPMatched = optNumber.join("") === otpCode;
      if (
        !isOTPMatched &&
        timeLeft !== 0 &&
        optNumber.every((value) => value !== "")
      ) {
        toast.error("Entered OTP does not match.");
      } else if (isOTPMatched && timeLeft !== 0) {
        toast.success("OTP Match.Go Next");
      }
    }, [optNumber, otpCode, timeLeft]);

    return (
      <form onSubmit={handleOTPSubmit} className="mt-2">
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
                className={`form-control ${
                  isOTPMatched ? "border-green" : "border-red"
                }`}
                type="text"
                value={value}
                onChange={(event) => handleInputChange(index, event)}
                onPaste={(event) => handlePaste(index, event)}
                maxLength="1"
              />
            ))}
          </div>
          <div className="d-flex justify-content-between">
            <span
              className=" mx-2 fw-bold"
              onClick={changeNumber}
              style={{ color: "#EF1D26", cursor: "pointer" }}
            >
              Change Number?
            </span>
            {timeLeft !== 0 && (
              <span className=" mx-2 text-warning fw-bold">
                Time left: {Math.floor(timeLeft / 60)}:
                {(timeLeft % 60).toString().padStart(2, "0")}
              </span>
            )}
            {timeLeft === 0 && (
              <span
                className=" mx-2  fw-bold"
                style={{ cursor: "pointer", color: "darkorange" }}
                onClick={handleResendOTP}
              >
                Resend OTP ?
              </span>
            )}
          </div>
        </div>

        <div className="d-flex align-items-center">
          {timeLeft !== 0 && isOTPMatched && (
            <button type="submit" className="theme-btn">
              <i className="fa-regular fa-floppy-disk"></i> Submit & Next{" "}
              <i className="fa-solid fa-forward"></i>
            </button>
          )}
        </div>
      </form>
    );
  }
);
