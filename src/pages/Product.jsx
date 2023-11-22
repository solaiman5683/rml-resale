import "owl.carousel/dist/assets/owl.carousel.min.css";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { NumericFormat } from "react-number-format";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import DateFormatter from "../components/DateFormatter";
const Product = () => {
  const { product_id } = useParams();
  const [carData, setCarData] = useState([]);
  const [carImage, setCarImage] = useState([]);
  const [relatedcarData, setRelatedcarData] = useState([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch(
          "http://202.40.181.98:9090/resale/web_api/version_1_0_1/product_details.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              sis_id: "1",
              product_id: product_id,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch car data");
        }

        const data = await response.json();
        if (data.status === "true") {
          setCarData(data.data);
          setCarImage(data.product_images);
          setRelatedcarData(data.product_related);
        } else {
          console.error("API response status is not true:", data);
        }
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };
    fetchCarData();
  }, []);


  // Create a styles object with the variables
  const KeyStyles = {
    color: "#EF1D26",
    fontSize: "18px",
    lineHeight: 1,
  };
  // Create a styles object for countdown styles
  const countdownStyles = {
    countdownArea: {
      borderRadius: "5px",
    },
    countdown: {
      display: "flex",
      justifyContent: "space-between",
    },
    strong: {
      color: "#e40303",
    },
  };
  let images = [];
  carImage.forEach((element) => {
    images.push({
      original: element.URL,
      thumbnail: element.URL,
    });
  });
  // const images = [
  //   {
  //     original: "../assets/img/car/Eicher20_15.png",
  //     thumbnail: "../assets/img/car/Eicher20_15.png",
  //   },
  //   {
  //     original: "../assets/img/car/Eicher20_15_2.png",
  //     thumbnail: "../assets/img/car/Eicher20_15_2.png",
  //   },
  //   {
  //     original:
  //       "https://cms.eichertrucksandbuses.com/uploads/ib/img/f62ceecbc6e7c4f40fcbd25170610a38.png",
  //     thumbnail:
  //       "https://cms.eichertrucksandbuses.com/uploads/ib/img/f62ceecbc6e7c4f40fcbd25170610a38.png",
  //   },
  // ];

  return (
    <div className="shop-item-single bg pt-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="car-single-widget">
              <h4 className="mb-4 text-center">Key Information</h4>
              <div className="car-key-info">
                <ul>
                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i className="flaticon-drive" style={KeyStyles}></i>
                      <span>Model :</span>
                      <span>{carData.MODEL}</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i
                        className="fa-solid fa-file-pen fa-beat"
                        style={KeyStyles}
                      ></i>
                      <span>Reg :</span>
                      <span>{carData.REG_NO}</span>
                    </div>
                  </li>

                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i
                        className="fa-solid fa-gear fa-spin"
                        style={KeyStyles}
                      ></i>
                      <span>Ref Code :</span>
                      <span>{carData.REF_CODE}</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i
                        className="fa-solid fa-engine fa-beat"
                        style={KeyStyles}
                      ></i>
                      <span> Engine :</span>
                      <span>{carData.ENG_NO}</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i
                        className="fa-brands fa-slack fa-spin"
                        style={KeyStyles}
                      ></i>
                      <span> Chasis :</span>
                      <span>{carData.CHS_NO}</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i
                        className="fa-solid fa-car fa-beat-fade"
                        style={KeyStyles}
                      ></i>
                      <span>Body /Sit :</span>
                      <span>{carData.BODY_SIT}</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i
                        className="fa-solid fa-fire-flame-simple fa-beat-fade"
                        style={KeyStyles}
                      ></i>
                      <span>Color :</span>
                      <span>{carData.COLOR}</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i className="flaticon-gas-station" style={KeyStyles}></i>
                      <span>Fuel Type :</span>
                      <span>{carData.FUEL_TYPE}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="item-gallery mb-2">
              <div className="flexslider-thumbnails">
                <ImageGallery
                  autoPlay={true}
                  useTranslate3D={true}
                  infinite={true}
                  showNav={false}
                  showPlayButton={true}
                  items={images}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-3 text-center" style={{ color: "#EF1D26" }}>
                  <i className="fas fa-gavel"></i> Bidding/Auction Here
                </h5>
              </div>
              <div
                className="countdown-area"
                style={countdownStyles.countdownArea}
              >
                <ul
                  className="countdown sidebar-countdown"
                  style={countdownStyles.countdown}
                >
                  <CountdownTimer countdownStyles={countdownStyles.Strong} />
                </ul>
              </div>
            </div>
            <div className="car-single-widget text-black mt-2">
              <p>
                <i
                  className="fa-solid fa-money-bill-1"
                  style={{ color: "#EF1D26" }}
                ></i>{" "}
                Min Bid : 8,00,000 TK
              </p>
              <p>
                <i
                  className="fa-brands fa-contao"
                  style={{ color: "#EF1D26" }}
                ></i>{" "}
                Total Bid : 15
              </p>
              <p>
                <i
                  className="fa-solid fa-money-bill-trend-up"
                  style={{ color: "#EF1D26" }}
                ></i>{" "}
                Highest Bid : 9,12,500 TK
              </p>
              <div className="car-single-form">
                <form >
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      TK
                    </span>
                    <input
                      type="number"
                      className="form-control"
                      style={{ padding: "1%" }}
                      placeholder="Bid Amount (EX:8,00,000)"
                      aria-label="amount"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="theme-btn"
                      style={{ padding: "3%" }}
                    >
                      Bid Submit<i className="fas fa-arrow-right-long"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="d-flex  justify-content-start  align-items-center gap-2">
            <div className="col-lg-3 car-single-widgets">
              <div className="car-single-top text-center">
                <span className="car-status status-1">Reconditional</span>
              </div>
              <ul className="text-center car-single-meta">
                <li>
                  <i className="far fa-clock"></i> Listed On:{" "}
                  <DateFormatter dateString="19-NOV-23" />
                </li>
              </ul>
            </div>
            <div className="col-lg-6 ">
              <div className="p-10">
                <div className="card  text-center">
                  <div className="card-body">
                    <h3 className="">{carData.MODEL}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-item-details">
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-tab1"
                data-bs-toggle="tab"
                data-bs-target="#tab1"
                type="button"
                role="tab"
                aria-controls="tab1"
                aria-selected="true"
              >
                <i className="fa-brands fa-slack fa-spin"></i> Vehicle Features
              </button>
              <button
                className="nav-link"
                id="nav-tab2"
                data-bs-toggle="tab"
                data-bs-target="#tab2"
                type="button"
                role="tab"
                aria-controls="tab2"
                aria-selected="false"
                tabIndex="-1"
              >
                <i
                  style={{ color: "EF1D26" }}
                  className="fa-regular fa-rectangle-list"
                ></i>{" "}
                Description
              </button>
              <button
                className="nav-link"
                id="nav-tab3"
                data-bs-toggle="tab"
                data-bs-target="#tab3"
                type="button"
                role="tab"
                aria-controls="tab3"
                aria-selected="false"
                tabIndex="-1"
              >
                <i
                  style={{ color: "EF1D26" }}
                  className="fa-solid fa-clock-rotate-left fa-spin"
                ></i> Vehicle History
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade active show"
              id="tab1"
              role="tabpanel"
              aria-labelledby="nav-tab1"
            >
              <div className="row mb-3">
                <div className="col-lg-4">
                  <ul className="car-single-list">
                    <li>
                      <i className="far fa-check-circle"></i> Model :{" "}
                      {carData.MODEL}
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Registation No. :{" "}
                      {carData.REG_NO}
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Reference Code :{" "}
                      {carData.REF_CODE}
                    </li>
                   
                    
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul className="car-single-list">
                  <li>
                      <i className="far fa-check-circle"></i> Engine No. :{" "}
                      {carData.ENG_NO}
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Chasis No.:{" "}
                      {carData.CHS_NO}
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Fuel Type :{" "}
                      {carData.FUEL_TYPE}
                    </li>
                    
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul className="car-single-list">
                    {/* <li>
                      <i className="far fa-check-circle"></i>Fuel Type :{" "}
                      {carData.FUEL_TYPE}
                    </li> */}
                    <li>
                      <i className="far fa-check-circle"></i>Body / Sit :{" "}
                      {carData.BODY_SIT}
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i>Color :{" "}
                      {carData.COLOR}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab2"
              role="tabpanel"
              aria-labelledby="nav-tab2"
            >
              <div className="single-additional-info">
                <p>{carData.DESCRIPTION}</p>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab3"
              role="tabpanel"
              aria-labelledby="nav-tab3"
            >
              <ul className="car-single-list">
                  {carData.HISTORY}
              </ul>
            </div>
          </div>
        </div>
        <div className="related-item">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="site-heading">
                <h2 className="site-title">Related Items</h2>
              </div>
            </div>
          </div>
          <div className="shop-item-wrapper">
            <div className="row">
              {relatedcarData.map((relatedcar, index) => {
                let currentStatus;

                if (relatedcar.INVOICE_STATUS === "Y") {
                  currentStatus = {
                    text: "Sold",
                    color: "status-1", // red color
                  };
                } else if (relatedcar.BOOKED_STATUS === "Y") {
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
                  <div key={index} className="col-md-6 col-lg-4 col-xl-3">
                    <div className={`car-item`}>
                      <div className="car-img">
                        <span className={`car-status ${currentStatus.color}`}>
                          {currentStatus.text}
                        </span>
                        <img src={relatedcar.PIC_URL} alt="images" />
                      </div>
                      <div className="car-content">
                        <div className="car-top">
                          <h4>
                            <Link to="/Product">{relatedcar.MODEL}</Link>
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
                            {relatedcar.ENG_NO}
                          </li>
                          <li>
                            <i className="fa-brands fa-slack"></i> Chass :{" "}
                            {relatedcar.CHS_NO}
                          </li>
                          <li>
                            <i className="far fa-car"></i>Brand :{" "}
                            {relatedcar.CATEGORY}
                          </li>
                        </ul>
                        <div className="car-footer">
                          <span className="car-price">
                            <NumericFormat
                              value={relatedcar.DISPLAY_PRICE}
                              displayType={"text"}
                              thousandSeparator=","
                              allowLeadingZeros
                              decimalScale={2}
                              fixedDecimalScale={true}
                              prefix={"TK "}
                            />
                          </span>
                          {/* <Link to="/product/" className="theme-btn"> */}
                          <Link
                            to={`/product/${relatedcar.ID}`}
                            className="theme-btn"
                          >
                            <span className="far fa-eye"></span>Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
