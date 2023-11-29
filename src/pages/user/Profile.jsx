import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Select2Dp from "../../components/Select2Dp";

function Profile(props) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userProfile, setUserProfile] = useState([]);

  const navigate = useNavigate();

  const notifySuccess = (msg) => {
    toast.success(msg);
  };
  const notifyError = (msg) => {
    toast.warning(msg);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserEmailChange = (event) => {
    setUserEmail(event.target.value);
  };
  const handleUserAddressChange = (event) => {
    setUserAddress(event.target.value);
  };

  const handleSubmit = async (event) => {
    // Mark the function as async
    event.preventDefault();

    try {
      const data = await sendUpdateRequest();

      if (data.status === "true") {
        notifySuccess("Porfile successfully.");
        localStorage.setItem("lg_us_data", JSON.stringify(data.user_data));
      } else {
        notifyError(data.message);
      }
    } catch (error) {
      notifyError("Error :", error);
    }
  };

  const sendUpdateRequest = async () => {
    // const response = await fetch(
    //   "https://api.rangsmotors.com?file_name=user_login&u_num=" +
    //     mobileNumber +
    //     "&u_pass=" +
    //     password,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );
    // return response.json();
  };

  const handleLogout = () => {
    // Clear user session data upon logout
    localStorage.removeItem("lg_us_data");
    notifySuccess("Logout successfully.");
    setTimeout(async () => {
      navigate("/");
    }, 1000);
  };
  const userlogData = JSON.parse(localStorage.getItem("lg_us_data"));
  useEffect(() => {
    const fetchCommonData = async () => {
      try {
        const response = await fetch(
          "https://api.rangsmotors.com?file_name=user_profil_update&u_id=" +
            userlogData.ID,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const res = await response.json();
        if (res.status === "true") {
          setUserProfile(res.user_information);
          setUserName(res.user_information.USER_NAME);
          setUserEmail(res.user_information.USER_EMAIL);
          setUserAddress(res.user_information.USER_ADDRESS);
        } else {
          console.error("API response status is not true:", res);
        }
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    fetchCommonData();
  }, [userlogData]);

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
                    <h4 className="user-profile-card-title">
                      Profile Information
                    </h4>
                    <div className="col-lg-12">
                      <div className="user-profile-form">
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              type="text"
                              value={userName}
                              className="form-control"
                              placeholder="Your Full Name"
                              onChange={handleUserNameChange}
                            />
                          </div>

                          <div className="form-group">
                            <label>Email</label>
                            <input
                              type="email"
                              value={userEmail}
                              className="form-control"
                              placeholder="Your Email Address"
                              onChange={handleUserEmailChange}
                            />
                          </div>
                          <div className="form-group">
                            <label>Address</label>
                            <input
                              type="text"
                              value={userAddress}
                              className="form-control"
                              placeholder="Your Adress"
                              onChange={handleUserAddressChange}
                            />
                          </div>
                          <div className="form-group">
                            <label>District</label>
                            <Select2Dp
                              name="district_id"
                              // optionProps={BrandOptions}
                              // onChange={handleBrandChange}
                            />
                          </div>

                          <div className="form-group">
                            <label>Upazila</label>
                            <Select2Dp
                              name="upazila_id"
                              // optionProps={BrandOptions}
                              // onChange={handleBrandChange}
                            />
                          </div>

                          <button type="submit" className="theme-btn my-3">
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
