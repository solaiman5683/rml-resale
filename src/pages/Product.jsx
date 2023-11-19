import "owl.carousel/dist/assets/owl.carousel.min.css";
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CountdownTimer from "../components/CountdownTimer";
const Product = () => {
  // Create a styles object with the variables
  const KeyStyles = {
    color: "#EF1D26",
    fontSize: "24px",
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

  const images = [
    {
      original: "../assets/img/car/Eicher20_15.png",
      thumbnail: "../assets/img/car/Eicher20_15.png",
    },
    {
      original: "../assets/img/car/Eicher20_15_2.png",
      thumbnail: "../assets/img/car/Eicher20_15_2.png",
    },
    {
      original:
        "https://cms.eichertrucksandbuses.com/uploads/ib/img/f62ceecbc6e7c4f40fcbd25170610a38.png",
      thumbnail:
        "https://cms.eichertrucksandbuses.com/uploads/ib/img/f62ceecbc6e7c4f40fcbd25170610a38.png",
    },
  ];

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
                      <span>Body :</span>
                      <span>Straight Frame</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i
                        className="fa-solid fa-gauge fa-spin-pulse"
                        style={KeyStyles}
                      ></i>
                      <span>Mileage :</span>
                      <span>10.15km / 1-litre</span>
                    </div>
                  </li>

                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i
                        className="fa-solid fa-gear fa-spin"
                        style={KeyStyles}
                      ></i>
                      <span>Transmission :</span>
                      <span>Autometic</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i className="flaticon-gas-station" style={KeyStyles}></i>
                      <span> Fuel Type :</span>
                      <span>Diesel</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i
                        className="fa-solid fa-fire-flame-simple fa-beat-fade"
                        style={KeyStyles}
                      ></i>
                      <span>Color :</span>
                      <span>White</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i
                        className="fa-solid fa-door-open fa-flip"
                        style={KeyStyles}
                      ></i>
                      <span>Door :</span>
                      <span>2</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i
                        className="fa-solid fa-mask-ventilator fa-spin"
                        style={KeyStyles}
                      ></i>
                      <span>Cylinder :</span>
                      <span>Metallic(250L)</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i
                        className="fa-solid fa-engine fa-beat"
                        style={KeyStyles}
                      ></i>
                      <span>Engine Size :</span>
                      <span>5.9L/5900 (cc)</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex gap-2 align-items-center">
                      <i
                        className="fa-solid fa-car fa-beat"
                        style={KeyStyles}
                      ></i>
                      <span>Weight :</span>
                      <span>16200 GVW (kg)</span>
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
                <form action="#">
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
                  <i className="far fa-clock"></i> Listed On: Sat, Jan 25, 2023
                </li>
              </ul>
            </div>
            <div className="col-lg-6 ">
              <div className="p-10">
                <div className="card  text-center">
                  <div className="card-body">
                    <h3 className="">
                      Eicher 20.15 Skyline 180HP Air Suspension
                    </h3>
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
                ></i>
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
                ></i>
                Vehicle History
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
                      <i className="far fa-check-circle"></i> Multi-zone A/C
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Heated front seats
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Navigation system
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Leather seats
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul className="car-single-list">
                    <li>
                      <i className="far fa-check-circle"></i> Premium sound
                      system
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Bluetooth
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Andriod Auto
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Intermittent
                      wipers
                    </li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <ul className="car-single-list">
                    <li>
                      <i className="far fa-check-circle"></i> Memory seat
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Adaptive Cruise
                      Control
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Cooled Seats
                    </li>
                    <li>
                      <i className="far fa-check-circle"></i> Keyles Start
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
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit.
                </p>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="tab3"
              role="tabpanel"
              aria-labelledby="nav-tab3"
            >
              <ul className="car-single-list">
                <li>
                  <i className="far fa-check-circle"></i> It is a long
                  established fact that a reader will be distracted
                </li>
                <li>
                  <i className="far fa-check-circle"></i> Sed perspic unde omnis
                  iste natus sit voluptatem accusantium
                </li>
                <li>
                  <i className="far fa-check-circle"></i> Explain to you how all
                  this mistaken idea of denouncing pleasure
                </li>
                <li>
                  <i className="far fa-check-circle"></i> Praising pain was born
                  will give account of the system
                </li>
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
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="car-item wow fadeInUp" data-wow-delay=".25s">
                  <div className="car-img">
                    <span className="car-status status-1">Used</span>
                    <img src="../assets/img/car/terra16xp.jpg" alt="" />

                    <div className="car-btns">
                      <a href="#">
                        <i className="far fa-heart"></i>
                      </a>
                      <a href="#">
                        <i className="far fa-arrows-repeat"></i>
                      </a>
                    </div>
                  </div>
                  <div className="car-content">
                    <div className="car-top">
                      <h4>
                        <a href="#">Terra16 XP Tipper</a>
                      </h4>
                      <div className="car-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>5.0 (58.5k Review)</span>
                      </div>
                    </div>
                    <ul className="car-list">
                      <li>
                        <i className="far fa-steering-wheel"></i>Automatic
                      </li>
                      <li>
                        <i className="far fa-road"></i>10.15km / 1-litre
                      </li>
                      <li>
                        <i className="far fa-car"></i>Eng. Model : JE493ZLQ3A
                        ISUZU
                      </li>
                      <li>
                        <i className="far fa-gas-pump"></i>Eicher
                      </li>
                    </ul>
                    <div className="car-footer">
                      <span className="car-price">TK 6,40,000</span>
                      <a href="#" className="theme-btn">
                        <span className="far fa-eye"></span>Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="car-item wow fadeInUp" data-wow-delay=".50s">
                  <div className="car-img">
                    <span className="car-status status-2">New</span>
                    <img src="../assets/img/car/terra16xp.jpg" />
                    <div className="car-btns">
                      <a href="#">
                        <i className="far fa-heart"></i>
                      </a>
                      <a href="#">
                        <i className="far fa-arrows-repeat"></i>
                      </a>
                    </div>
                  </div>
                  <div className="car-content">
                    <div className="car-top">
                      <h4>
                        <a href="#">Terra16 XP Tipper</a>
                      </h4>
                      <div className="car-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>5.0 (58.5k Review)</span>
                      </div>
                    </div>
                    <ul className="car-list">
                      <li>
                        <i className="far fa-steering-wheel"></i>Automatic
                      </li>
                      <li>
                        <i className="far fa-road"></i>10.15km / 1-litre
                      </li>
                      <li>
                        <i className="far fa-car"></i>Eng. Model : JE493ZLQ3A
                        ISUZU
                      </li>
                      <li>
                        <i className="far fa-gas-pump"></i>Eicher
                      </li>
                    </ul>
                    <div className="car-footer">
                      <span className="car-price">TK 5,70,000</span>
                      <a href="#" className="theme-btn">
                        <span className="far fa-eye"></span>Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="car-item wow fadeInUp" data-wow-delay=".25s">
                  <div className="car-img">
                    <span className="car-status status-1">Used</span>
                    <img src="../assets/img/car/terra16xp.jpg" alt="img" />

                    <div className="car-btns">
                      <a href="#">
                        <i className="far fa-heart"></i>
                      </a>
                      <a href="#">
                        <i className="far fa-arrows-repeat"></i>
                      </a>
                    </div>
                  </div>
                  <div className="car-content">
                    <div className="car-top">
                      <h4>
                        <a href="#">Terra16 XP Tipper</a>
                      </h4>
                      <div className="car-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>5.0 (58.5k Review)</span>
                      </div>
                    </div>
                    <ul className="car-list">
                      <li>
                        <i className="far fa-steering-wheel"></i>Automatic
                      </li>
                      <li>
                        <i className="far fa-road"></i>10.15km / 1-litre
                      </li>
                      <li>
                        <i className="far fa-car"></i>Eng. Model : JE493ZLQ3A
                        ISUZU
                      </li>
                      <li>
                        <i className="far fa-gas-pump"></i>Eicher
                      </li>
                    </ul>
                    <div className="car-footer">
                      <span className="car-price">TK 6,40,000</span>
                      <a href="#" className="theme-btn">
                        <span className="far fa-eye"></span>Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="car-item wow fadeInUp" data-wow-delay=".50s">
                  <div className="car-img">
                    <span className="car-status status-2">New</span>
                    <img src="../assets/img/car/terra16xp.jpg" alt="img" />
                    <div className="car-btns">
                      <a href="#">
                        <i className="far fa-heart"></i>
                      </a>
                      <a href="#">
                        <i className="far fa-arrows-repeat"></i>
                      </a>
                    </div>
                  </div>
                  <div className="car-content">
                    <div className="car-top">
                      <h4>
                        <a href="#">Terra16 XP Tipper</a>
                      </h4>
                      <div className="car-rate">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>5.0 (58.5k Review)</span>
                      </div>
                    </div>
                    <ul className="car-list">
                      <li>
                        <i className="far fa-steering-wheel"></i>Automatic
                      </li>
                      <li>
                        <i className="far fa-road"></i>10.15km / 1-litre
                      </li>
                      <li>
                        <i className="far fa-car"></i>Eng. Model : JE493ZLQ3A
                        ISUZU
                      </li>
                      <li>
                        <i className="far fa-gas-pump"></i>Eicher
                      </li>
                    </ul>
                    <div className="car-footer">
                      <span className="car-price">TK 5,70,000</span>
                      <a href="#" className="theme-btn">
                        <span className="far fa-eye"></span>Details
                      </a>
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
};

export default Product;
