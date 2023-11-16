import React, { useEffect, useState } from "react";

const CountdownTimer = ({ countdownStyles }) => {
  // Set the date we're counting down to
  const countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

  // Initialize state variables for days, hours, minutes, and seconds
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Update the count down every 1 second
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes, and seconds
      const newDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const newHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const newMinutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      const newSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state variables
      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      // If the count down is over, clear the interval
      if (distance < 0) {
        clearInterval(interval);
        // Optionally, you can perform some action when the countdown expires
        // For example, set a flag in state or trigger a function
        // handleCountdownExpired();
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [countDownDate]); // Re-run the effect when countDownDate changes

  return (
    <>
      <li>
        <strong style={countdownStyles} className="days">
          {days} d
        </strong>
      </li>
      <li>
        <strong style={countdownStyles} className="hours">
          {hours} h
        </strong>
      </li>
      <li>
        <strong style={countdownStyles} className="minutes">
          {minutes} m
        </strong>
      </li>
      <li>
        <strong style={countdownStyles} className="seconds">
          {seconds} s
        </strong>
      </li>
    </>
  );
};

export default CountdownTimer;
