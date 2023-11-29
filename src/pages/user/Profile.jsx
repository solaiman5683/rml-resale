import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Profile(props) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userProfile, setUserProfile] = useState([]);

  const navigate = useNavigate();

  const notifySuccess = (msg) => {
    toast.success(msg);
  };
  const notifyError = (msg) => {
    toast.warning(msg);
  };

  const handleUserMobileChange = (event) => {
    const inputValue = event.target.value.replace(/[^0-9]/g, "");
    if (inputValue.length <= 11) {
      setMobileNumber(inputValue);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    // Mark the function as async
    event.preventDefault();

    try {
      const data = await sendLoginRequest();

      if (data.status === "true") {
        notifySuccess("Login successfully.");
        localStorage.setItem("lg_us_data", JSON.stringify(data.user_data));
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
      "https://api.rangsmotors.com?file_name=user_login&u_num=" +
        mobileNumber +
        "&u_pass=" +
        password,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
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

  useEffect(() => {
    const fetchCommonData = async () => {
      try {
        const response = await fetch(
          "https://api.rangsmotors.com?file_name=user_profile&u_id=" +
            userlogData.ID,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const res = await response.json();
        // console.log(res);
        if (res.status === "true") {
          setUserProfile(res.user_information);
        } else {
          console.error("API response status is not true:", res);
        }
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    fetchCommonData();
  });

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
                    <Link to="/profile" className="active">
                      <i className="far fa-user"></i> My Profile
                    </Link>
                  </li>

                  {/* <li>
                    <Link to="/new-vechile">
                      <i className="far fa-plus-circle"></i> New Vehicle For You
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/change-password">
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
                    <h4 className="user-profile-card-title">Profile Information</h4>
                    <div className="col-lg-12">
                      <div className="user-profile-form">
                        <form action="#">
                          <div className="form-group">
                            <label>User Name</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Your Full Name"
                            />
                          </div>
                         
                          <div className="form-group">
                            <label>Emial</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Your Email Address"
                            />
                          </div>
                          <button type="button" className="theme-btn my-3">
                            <span className="far fa-file"></span> Update Profile
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

export default Profile;
