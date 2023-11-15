import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TosterNotify = (props) => {
  const [isPosition] = useState("bottom-right");
  const [isAutoClose] = useState(5000);
  const [isHideProgressBar] = useState(5000);
  const [isNewestOnTop] = useState(false);
  const [isRtl] = useState(false);
  const [isTheme] = useState("colored");

  
  return (
    <div>
      {/* <button onClick={notifySuccess}>Notify Success !</button> */}

      <ToastContainer
        position={isPosition}
        autoClose={isAutoClose}
        hideProgressBar={isHideProgressBar}
        newestOnTop={isNewestOnTop}
        closeOnClick
        rtl={isRtl}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={isTheme}
      />
    </div>
  );
};

export default TosterNotify;
