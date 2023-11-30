import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link, useParams } from "react-router-dom";
import ImgSrc from "../components/ImgSrc";
import RelatedCarArea from "../partials/RelatedCarArea";

function SearchableProduct(props) {
  const { selectedModel,selectedBrandId } = useParams();
  // console.log(selectedBrandId, 'selectedBrandId');
  const [carList, setCarList] = useState([]);
  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch(
          "https://api.rangsmotors.com?file_name=search_list&md_name=" +
            selectedModel,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (data.status === "true") {
          setCarList(data.data);
        } else {
          console.error("API response status is not true:", data);
        }
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCarData();
  }, [selectedModel]);
  const userlogData = JSON.parse(localStorage.getItem("lg_us_data"));
  return (
    <div className="car-area bg py-50">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="car-sidebar">
              <div className="car-widget">
                <h4 className="car-widget-title">Brands</h4>
                <ul>
                  {/*<li>
                     <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked=""
                        id="brand"
                      />
                      <label className="form-check-label" for="brand">
                        {" "}
                        All Brands
                      </label> 
                    </div>
                  </li>*/}
                  <li>
                    <div className="form-check">
                      <input
                        name="brand"
                        className="form-check-input"
                        type="radio"
                        id="brand1"
                      />
                      <label className="form-check-label" for="brand1">
                        Eicher{" "}
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        name="brand"
                        className="form-check-input"
                        type="radio"
                        id="brand2"
                      />
                      <label className="form-check-label" for="brand2">
                        {" "}
                        Mahindra
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        name="brand"
                        className="form-check-input"
                        type="radio"
                        id="brand3"
                      />
                      <label className="form-check-label" for="brand3">
                        {" "}
                        DongFeng
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {carList.length === 0 ? (
                <>
                  <strong
                    style={{ color: "rgb(239, 29, 38)" }}
                    class="shadow p-3 mb-5 bg-body rounded"
                  >
                    We appreciate your interest ! Unfortunately, the requested
                    product is currently unavailable. Please explore our current
                    product list as referred below :-
                  </strong>
                  <RelatedCarArea brand_id={selectedBrandId} />
                </>
              ) : (
                carList.map((carItem, index) => {
                  let currentStatus;

                  if (carItem.INVOICE_STATUS === "Y") {
                    currentStatus = {
                      text: "Sold",
                      color: "status-1", // red color
                    };
                  } else if (carItem.BOOKED_STATUS === "Y") {
                    currentStatus = {
                      text: "Booked",
                      color: "status-3", // yellow color
                    };
                  } else {
                    currentStatus = {
                      text: "Available",
                      color: "status-2", // green color
                    };
                  }

                  return (
                    <div key={index} className="col-md-6 col-lg-4">
                      <div
                        className={`car-item  ${
                          props.scrollDirection === "down"
                            ? "animate__animated animate__fadeInUp"
                            : ""
                        }`}
                      >
                        <div className="car-img">
                          <span className={`car-status ${currentStatus.color}`}>
                            {currentStatus.text}
                          </span>

                          <ImgSrc src={carItem.PIC_URL} />
                        </div>
                        <div className="car-content">
                          <div className="car-top">
                            <h4>
                              <Link to="/Product">{carItem.MODEL}</Link>
                            </h4>
                            <div className="car-rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <span>5.0 (Review)</span>
                            </div>
                          </div>
                          <ul className="car-list">
                            <li>
                              <i className="fa-solid fa-engine"></i>Engine :{" "}
                              {carItem.ENG_NO}
                            </li>
                            <li>
                              <i className="fa-brands fa-slack"></i> Chass :{" "}
                              {carItem.CHS_NO}
                            </li>
                            <li>
                              <i className="far fa-file-pen"></i>Reg :{" "}
                              {carItem.REG_NO}
                            </li>
                          </ul>
                          <div className="car-footer">
                            <span className="car-price">
                              <NumericFormat
                                value={carItem.DISPLAY_PRICE}
                                displayType={"text"}
                                thousandSeparator=","
                                allowLeadingZeros
                                decimalScale={2}
                                fixedDecimalScale={true}
                                prefix={"TK "}
                              />
                            </span>

                            <Link
                              to={`/product/${carItem.ID}/${
                                userlogData?.ID || 0
                              }`}
                              className="theme-btn"
                            >
                              <span className="far fa-eye"></span>Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchableProduct;
