"use client";
import React, { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-area py-120">
      <div className="container">
        <div className="contact-content">
          <div className="row">
            <div className="col-md-3">
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i className="fal fa-map-location-dot"></i>
                </div>
                <div className="contact-info-content">
                  <h5>Office Address</h5>
                  <p>
                    427/A, Tejgaon Industrial Area, Tejgoan, Dhaka-1205,
                    Bangladesh.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i className="fal fa-phone-volume"></i>
                </div>
                <div className="contact-info-content">
                  <h5>Call Us</h5>
                  <p>16758</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i className="fal fa-envelopes"></i>
                </div>
                <div className="contact-info-content">
                  <h5>Email Us</h5>
                  <p>
                    <a
                      href="/cdn-cgi/l/email-protection"
                      className="__cf_email__"
                      data-cfemail="aac3c4ccc5eacfd2cbc7dac6cf84c9c5c7"
                    >
                      info@rangsgroup.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="contact-info">
                <div className="contact-info-icon">
                  <i className="fal fa-alarm-clock"></i>
                </div>
                <div className="contact-info-content">
                  <h5>Open Time</h5>
                  <p>Sun - Thu (09AM - 06PM)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-wrapper">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="contact-img">
                <img
                  src="https://www.rangsgroup.com/media/images/2O1A9118.2e16d0ba.fill-1255x878-c0.format-webp.webp"
                  alt="thumb"
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="contact-form">
                <div className="contact-form-header">
                  <h2 className="text-center">Get In Touch with us</h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page randomised
                    words which don't look even slightly when looking at its
                    layout.{" "}
                  </p>
                </div>
                <form
                  method="post"
                  action=""
                  id="contact-form"
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="Your Name"
                          required=""
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                          required=""
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Your Subject"
                      required=""
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols="30"
                      rows="5"
                      className="form-control"
                      placeholder="Write Your Message"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-md-12 text-right">
                    <button
                      type="submit"
                      className="theme-btn"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}{" "}
                      <i className="far fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
