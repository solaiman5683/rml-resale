import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Dashboard(props) {
  const userlogData = JSON.parse(localStorage.getItem("lg_us_data"));
  const notifySuccess = (msg) => {
    toast.success(msg);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    // Clear user session data upon logout
    localStorage.removeItem("lg_us_data");
    notifySuccess("Logout successfully.");
    setTimeout(async () => {
      navigate("/");
    }, 1000);
    // window.location.href = "/login"; // Redirect to login page
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
                    class="far solid fa-phone"
                    style={{ color: "#EF1D26" }}
                  ></i>{" "}
                  <span>{userlogData.USER_MOBILE} </span>
                </p>
              </div>
              <ul className="user-profile-sidebar-list">
                <ul class="user-profile-sidebar-list">
                  <li>
                    <Link to="/dashboard" class="active">
                      <i class="far fa-gauge-high"></i> Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile">
                      <i class="far fa-user"></i> My Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/biddinglist">
                      <i class="far fa-layer-group"></i> My Bidding Listing
                    </Link>
                  </li>
                  <li>
                    <Link to="/new-vechile">
                      <i class="far fa-plus-circle"></i> New Vehicle For You
                    </Link>
                  </li>
                  <li>
                    <Link to="/change-password">
                      <i class="far fa-gear"></i> Change Password
                    </Link>
                  </li>

                  <li>
                    <Link onClick={handleLogout}>
                      <i class="far fa-sign-out"></i> Logout
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="user-profile-wrapper">
              <div className="row">
                <div className="col-md-6 col-lg-4">
                  <div class="dashboard-widget dashboard-widget-color-1">
                    <div class="dashboard-widget-info">
                      <h1>0</h1>
                      <span>Total Bidding</span>
                    </div>
                    <div class="dashboard-widget-icon">
                      <i class="fal fa-list"></i>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div class="dashboard-widget dashboard-widget-color-3">
                    <div class="dashboard-widget-info">
                      <h1>0</h1>
                      <span>Accepted Bid</span>
                    </div>
                    <div class="dashboard-widget-icon">
                      <i class="fal fa-layer-group"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="user-profile-card">
                    <h4 className="user-profile-card-title">Bidding Listing</h4>
                    <div className="table-responsive">
                      <table className="table text-nowrap">
                        {/* Your table content */}
                      </table>
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

export default Dashboard;
