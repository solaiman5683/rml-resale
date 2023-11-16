import companyLogo from "../assets/img/logo/logo.png";

export default function Sidebar({ isSidebarOpen, handleSidebarClose }) {
  return (
    <div className={`sidebar-popup ${isSidebarOpen ? "open" : ""}`}>
      <div className={`sidebar-wrapper ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <button
            type="button"
            className="close-sidebar-popup"
            onClick={handleSidebarClose}
          >
            <i className="far fa-xmark"></i>
          </button>
          <div className="sidebar-logo">
            <img src={companyLogo} alt="logo" />
          </div>
          <div className="sidebar-about">
            <h4>About Us</h4>
            <p>
              There are many variations of passages available sure there
              majority have suffered alteration in some form by injected humour
              or randomised words which don't look even slightly believable.
            </p>
          </div>
          <div className="sidebar-contact">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <h6>Email</h6>
                <a rel="noopener" href="noreferrer">
                  <i className="far fa-envelope"></i>
                  <span className="__cf_email__">info@rangsgroup.com</span>
                </a>
              </li>
              <li>
                <h6>Phone</h6>
                <a href="tel:+21236547898">
                  <i className="far fa-phone"></i>16758
                </a>
              </li>
              <li>
                <h6>Address</h6>
                <a rel="noopener" href="noreferrer">
                  <i className="far fa-location-dot"></i> 117/A, Level-04, Old
                  Air Port Road Bijoy Sarani, Tejgaon, Dhaka-1212.
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-social">
            <h4>Follow Us</h4>
            <a
              href="https://www.facebook.com/rangsmotorsbd"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/rangsmotorslimited "
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a rel="noopener" href="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a rel="noopener" href="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
