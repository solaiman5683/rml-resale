import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TosterNotify = (props) => {
  const [isPosition] = useState("bottom-right");
  const [isAutoClose] = useState(5000);
  const [isHideProgressBar] = useState(5000);
  const [isNewestOnTop] = useState(false);
  const [isRtl] = useState(false);
  const [isTheme] = useState("colored");

  const notifySuccess = () => {
    toast.success("Success Notification !");
  };
  return (
    <div>
      <button onClick={notifySuccess}>Notify Success !</button>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default TosterNotify;
