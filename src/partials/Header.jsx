import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TosterNotify from "../components/TosterNotify";

import Sidebar from "./Sidebar";
export default function Header() {
  const router = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const notifySuccess = (msg) => {
    toast.success(msg);
  };
  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };
  const userlogData = JSON.parse(localStorage.getItem("lg_us_data"));
  const handleLogout = () => {
    // Clear user session data upon logout
    localStorage.removeItem("lg_us_data");
    notifySuccess("Logout successfully.");
    setTimeout(async () => {
      navigate("/");
    }, 1000);
    // window.location.href = "/login"; // Redirect to login page
  };
  console.log(userlogData, 'userlogData');
  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div className="header-top-wrapper">
              <div className="header-top-left">
                <div className="header-top-contact">
                  <ul>
                    <li>
                      <a href="noreferrer">
                        <i className="far fa-envelopes"></i>{" "}
                        <span className="__cf_email__">
                          info@rangsgroup.com
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="noreferrer">
                        <i className="far fa-fax"></i> +88 02 9130895{" "}
                      </a>
                    </li>
                    <li>
                      <a href="noreferrer">
                        <i className="far fa-alarm-clock"></i> Sun - Thu (09AM -
                        06PM)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-top-right">
                {userlogData && (
                  <div className="header-top-link">
                    <Link to="/">
                      <i className="fa-solid fa-circle-user"></i>{" "}
                      <span style={{ color: "#EF1D26" }}>
                        {" "}
                        {userlogData.USER_NAME}{" "}
                      </span>
                    </Link>
                  </div>
                )}
                <div className="header-top-social">
                  <span>Follow Us: </span>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/rangsmotorsbd"
                    target="_blank"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a rel="noopener" href="noreferrer">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/rangsmotorslimited "
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a rel="noopener " href="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a rel="noopener " href="noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navigation">
          <nav className="navbar navbar-expand-lg">
            <div className="container position-relative">
              <Link to="/" className="navbar-brand">
                <img
                  src={window.location.origin + "/assets/img/logo/logo.png"}
                  alt="logo"
                />
              </Link>
              <div className="mobile-menu-right">
                {!userlogData && (
                  <div className="">
                    <Link
                      to="/login"
                      type="button"
                      className="nav-right-link"
                      style={{ color: "white", backgroundColor: "red" }}
                    >
                      <i className="far fa-user-vneck"></i> Login
                    </Link>
                  </div>
                )}
                {userlogData && (
                  <div className="nav-right-account">
                    <div className="dropdown">
                      <div data-bs-toggle="dropdown" aria-expanded="false">
                        <img
                          src={
                            userlogData.PICTURE_LINK ||
                            "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
                          }
                          alt="user-img"
                        />
                      </div>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <Link className="dropdown-item" to="/dashboard">
                            <i className="far fa-gauge-high"></i> Dashboard
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={handleLogout}
                            className="dropdown-item"
                          >
                            <i className="far fa-sign-out"></i> Log Out
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main_nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-mobile-icon">
                    <i className="far fa-bars"></i>
                  </span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="main_nav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home{" "}
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="noreferrer"
                      data-bs-toggle="dropdown"
                    >
                      Eicher
                    </a>
                    <ul className="dropdown-menu fade-down">
                      <li className="dropdown-submenu">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="noreferrer"
                        >
                          Eicher Bus
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              10.60 G Bus
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              10.60 H BUS
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              10.90 L Bus Chassis
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              20.15 Air Suspension
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              20.15 Gold Bus New
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              20.15 (180HP) DIESEL BUS
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="noreferrer"
                        >
                          Eicher Truck
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              Terra 16 XP Tipper (10 CBM)
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              PRO 5016 MCBC TRUCK
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              PRO 5016 KCBC TRUCK
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              PRO 5016 HD MCBC TRUCK
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              PRO 5016 HD KCBC TRUCK
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="noreferrer"
                      data-bs-toggle="dropdown"
                    >
                      Mahindra
                    </a>
                    <ul className="dropdown-menu fade-down">
                      <li className="dropdown-submenu">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="noreferrer"
                        >
                          3 Wheeler
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              Alfa 3 Wheeler Vehiclego Diesel
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              Alfa 3 Wheeler DX BS3 Delux
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              Alfa 3 Wheeler Passenger Diesel
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown-submenu">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="noreferrer"
                        >
                          PICUK UP
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              Big Bolero
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              Bolero City Pickup
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              Bolero Maxxi Truck Plus
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              JEETO X7-16
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              Maxximo HSD
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              MAXXIMO VX HD
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              Supro T4 PS
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="noreferrer"
                      data-bs-toggle="dropdown"
                    >
                      Dongfeng
                    </a>
                    <ul className="dropdown-menu fade-down">
                      <li className="dropdown-submenu">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="noreferrer"
                        >
                          Captain
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              Captain E-94 10 Feet
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              Captain E-96 12 Feet
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              Captain E-97 14 Feet
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              Captain C-751 14 Feet
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="listing-grid.html"
                            >
                              Captain C-851 16 Feet
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/about-us" className="nav-link">
                      {" "}
                      About Us{" "}
                    </Link>
                  </li>

                  <li className="nav-item">
                    {/* <a className="nav-link" href="service.html">
                    Service
                  </a> */}
                    <Link to="/service" className="nav-link">
                      {" "}
                      Service{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="contact.html">
                    Contact
                  </a> */}
                    <Link to="/contact" className="nav-link">
                      {" "}
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
                <div className="nav-right">
                  {!userlogData && (
                    <div className="nav-right-btn mt-2">
                      <Link to="/login" className="theme-btn">
                        <span className="far fa-user-vneck"></span> Login
                      </Link>
                    </div>
                  )}
                  {userlogData && (
                    <div className="nav-right-account">
                      <div className="dropdown">
                        <div data-bs-toggle="dropdown" aria-expanded="false">
                          <img
                            src={
                              userlogData.PICTURE_LINK ||
                              "https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
                            }
                            alt="user"
                          />

                          {/* <img src={userlogData.PICTURE_LINK} alt="user" /> */}
                        </div>
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li>
                            <Link to="/dashboard" className="dropdown-item">
                              <i className="far fa-gauge-high"></i> Dashboard
                            </Link>
                          </li>
                          <li>
                            <button
                              className="dropdown-item"
                              onClick={handleLogout}
                            >
                              <i className="far fa-sign-out"></i> Log Out
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="sidebar-btn" onClick={handleSidebarToggle}>
                    <button type="button" className="nav-right-link">
                      <i className="far fa-bars-sort"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        handleSidebarClose={handleSidebarClose}
      />
      <TosterNotify />
    </>
  );
}
