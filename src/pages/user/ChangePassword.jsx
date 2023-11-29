import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ChangePassword(props) {
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();
  const notifySuccess = (msg) => {
    toast.success(msg);
  };
  const notifyError = (msg) => {
    toast.warning(msg);
  };
  const userlogData = JSON.parse(localStorage.getItem("lg_us_data"));
  const handleLogout = () => {
    // Clear user session data upon logout
    localStorage.removeItem("lg_us_data");
    notifySuccess("Logout successfully.");
    setTimeout(async () => {
      navigate("/");
    }, 1000);
  };
  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };
  const handleSubmit = async (event) => {
    // Mark the function as async
    event.preventDefault();

    try {
      const data = await sendLoginRequest();
      console.log(data);
      if (data.status === "true") {
        notifySuccess("Login successfully.");

        localStorage.setItem("lg_us_data", JSON.stringify(data.user_data));
        // const userData = JSON.parse(localStorage.getItem('lg_us_data'));
        // console.log(userData, 'userData');
        setTimeout(async () => {
          navigate("/");
        }, 1000);
      } else {
        notifyError("User Not Found!");
      }
    } catch (error) {
      notifyError("Error Login:", error);
    }
  };
  const sendLoginRequest = async () => {
    const response = await fetch(
      "https://api.rangsmotors.com?file_name=user_login&u_num=" + mobileNumber,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  };
  return (
    <div className="user-profile py-50">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="user-profile-sidebar">
            <div className="user-profile-sidebar-top">
              <div className="user-profile-img">
                <img
                  src={
                    userlogData.PICTURE_LINK ||
                    "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
                  }
                  alt=""
                />
                <button type="button" className="profile-img-btn">
                  <i className="far fa-camera"></i>
                </button>
                <input type="file" className="profile-img-file" />
              </div>
              <h5> {userlogData.USER_NAME} </h5>
              <p>
                <i
                  className="far solid fa-phone"
                  style={{ color: "#EF1D26" }}
                ></i>{" "}
                <span>{userlogData.USER_MOBILE} </span>
              </p>
            </div>
            <ul className="user-profile-sidebar-list">
              <ul className="user-profile-sidebar-list">
                <li>
                  <Link to="/dashboard">
                    <i className="far fa-layer-group"></i> Bidding Listing
                  </Link>
                </li>
                <li>
                  <Link to="/profile" >
                    <i className="far fa-user"></i> My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/change-password" className="active">
                    <i className="far fa-gear"></i> Change Password
                  </Link>
                </li>

                <li>
                  <Link onClick={handleLogout}>
                    <i className="far fa-sign-out"></i> Logout
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="user-profile-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="user-profile-card">
                  <h4 className="user-profile-card-title">
                  Change Password
                  </h4>
                  <div className="col-lg-12">
                    <div className="user-profile-form">
                      <form 
                      // onSubmit={handleSubmit}
                      >
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="text"
                            // value={userName}
                            className="form-control"
                            placeholder="Your Full Name"
                            // onChange={handleUserNameChange}
                          /> 
                        </div>
                        <div className="form-group">
                          <label>Re-Type Password</label>
                          <input
                            type="text"
                            // value={userName}
                            className="form-control"
                            placeholder="Your Full Name"
                            // onChange={handleUserNameChange}
                          />
                        </div>
                       
                     
                        <button type="submit" className="theme-btn my-3">
                          <span className="far fa-file"></span> Update Password
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default ChangePassword;
