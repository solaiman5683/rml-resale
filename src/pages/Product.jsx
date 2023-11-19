import "owl.carousel/dist/assets/owl.carousel.min.css";
import React from "react";
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



  return (
    <div class="shop-item-single bg pt-20">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="car-single-widget">
              <h4 class="mb-4 text-center">Key Information</h4>
              <div class="car-key-info">
                <ul>
                  <li>
                    <div class="d-flex gap-2 align-items-center">
                      <i class="flaticon-drive" style={KeyStyles}></i>
                      <span>Body :</span>
                      <span>Straight Frame</span>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex gap-2 align-items-center">
                      <i
                        class="fa-solid fa-gauge fa-spin-pulse"
                        style={KeyStyles}
                      ></i>
                      <span>Mileage :</span>
                      <span>10.15km / 1-litre</span>
                    </div>
                  </li>

                  <li>
                    <div class="d-flex gap-2 align-items-center">
                      <i class="fa-solid fa-gear fa-spin" style={KeyStyles}></i>
                      <span>Transmission :</span>
                      <span>Autometic</span>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex gap-2 align-items-center">
                      <i class="flaticon-gas-station" style={KeyStyles}></i>
                      <span> Fuel Type :</span>
                      <span>Diesel</span>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex gap-2 align-items-center">
                      <i
                        class="fa-solid fa-fire-flame-simple fa-beat-fade"
                        style={KeyStyles}
                      ></i>
                      <span>Color :</span>
                      <span>White</span>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex gap-2 align-items-center">
                      <i
                        class="fa-solid fa-door-open fa-flip"
                        style={KeyStyles}
                      ></i>
                      <span>Door :</span>
                      <span>2</span>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex gap-2 align-items-center">
                      <i
                        class="fa-solid fa-mask-ventilator fa-spin"
                        style={KeyStyles}
                      ></i>
                      <span>Cylinder :</span>
                      <span>Metallic(250L)</span>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex gap-2 align-items-center">
                      <i
                        class="fa-solid fa-engine fa-beat"
                        style={KeyStyles}
                      ></i>
                      <span>Engine Size :</span>
                      <span>5.9L/5900 (cc)</span>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex gap-2 align-items-center">
                      <i class="fa-solid fa-car fa-beat" style={KeyStyles}></i>
                      <span>Weight :</span>
                      <span>16200 GVW (kg)</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="item-gallery mb-2">
              
              {/* <div class="flexslider-thumbnails">
                <ul class="slides">
                  <li
                    data-thumb="../assets/img/car/Eicher20_15.png"
                    rel="adjustX:10, adjustY:"
                  >
                    <img src="../assets/img/car/Eicher20_15.png" alt="" />
                  </li>
                  <li data-thumb="../assets/img/car/Eicher20_15_2.png">
                    <img src="../assets/img/car/Eicher20_15_2.png" alt="" />
                  </li>
                  <li data-thumb="https://cms.eichertrucksandbuses.com/uploads/ib/img/f62ceecbc6e7c4f40fcbd25170610a38.png">
                    <img
                      src="https://cms.eichertrucksandbuses.com/uploads/ib/img/f62ceecbc6e7c4f40fcbd25170610a38.png"
                      alt=""
                    />
                  </li>
                  <li data-thumb="../assets/img/car/Eicher20_15_4.png">
                    <img src="../assets/img/car/Eicher20_15_4.png" alt="" />
                  </li>
                </ul>
              </div> */}
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-3 text-center" style={{ color: "#EF1D26" }}>
                  <i class="fas fa-gavel"></i> Bidding/Auction Here
                </h5>
              </div>
              <div class="countdown-area" style={countdownStyles.countdownArea}>
                <ul
                  className="countdown sidebar-countdown"
                  style={countdownStyles.countdown}
                >
                  <CountdownTimer countdownStyles={countdownStyles.Strong} />
                </ul>
              </div>
            </div>
            <div class="car-single-widget text-black mt-2">
              <p>
                <i
                  class="fa-solid fa-money-bill-1"
                  style={{ color: "#EF1D26" }}
                ></i>{" "}
                Min Bid : 8,00,000 TK
              </p>
              <p>
                <i class="fa-brands fa-contao" style={{ color: "#EF1D26" }}></i>{" "}
                Total Bid : 15
              </p>
              <p>
                <i
                  class="fa-solid fa-money-bill-trend-up"
                  style={{ color: "#EF1D26" }}
                ></i>{" "}
                Highest Bid : 9,12,500 TK
              </p>
              <div class="car-single-form">
                <form action="#">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">
                      TK
                    </span>
                    <input
                      type="number"
                      class="form-control"
                      style={{ padding: "1%" }}
                      placeholder="Bid Amount (EX:8,00,000)"
                      aria-label="amount"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div class="text-center">
                    <button
                      type="submit"
                      class="theme-btn"
                      style={{ padding: "3%" }}
                    >
                      Bid Submit<i class="fas fa-arrow-right-long"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="d-flex  justify-content-start  align-items-center gap-2">
            <div class="col-lg-3 car-single-widgets">
              <div class="car-single-top text-center">
                <span class="car-status status-1">Reconditional</span>
              </div>
              <ul class="text-center car-single-meta">
                <li>
                  <i class="far fa-clock"></i> Listed On: Sat, Jan 25, 2023
                </li>
              </ul>
            </div>
            <div class="col-lg-6 ">
              <div class="p-10">
                <div class="card  text-center">
                  <div class="card-body">
                    <h3 class="">Eicher 20.15 Skyline 180HP Air Suspension</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="single-item-details">
          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-tab1"
                data-bs-toggle="tab"
                data-bs-target="#tab1"
                type="button"
                role="tab"
                aria-controls="tab1"
                aria-selected="true"
              >
                <i class="fa-brands fa-slack fa-spin"></i> Vehicle Features
              </button>
              <button
                class="nav-link"
                id="nav-tab2"
                data-bs-toggle="tab"
                data-bs-target="#tab2"
                type="button"
                role="tab"
                aria-controls="tab2"
                aria-selected="false"
                tabindex="-1"
              >
                <i
                  style={{ color: "EF1D26" }}
                  class="fa-regular fa-rectangle-list"
                ></i>
                Description
              </button>
              <button
                class="nav-link"
                id="nav-tab3"
                data-bs-toggle="tab"
                data-bs-target="#tab3"
                type="button"
                role="tab"
                aria-controls="tab3"
                aria-selected="false"
                tabindex="-1"
              >
                <i
                  style={{ color: "EF1D26" }}
                  class="fa-solid fa-clock-rotate-left fa-spin"
                ></i>
                Vehicle History
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade active show"
              id="tab1"
              role="tabpanel"
              aria-labelledby="nav-tab1"
            >
              <div class="row mb-3">
                <div class="col-lg-4">
                  <ul class="car-single-list">
                    <li>
                      <i class="far fa-check-circle"></i> Multi-zone A/C
                    </li>
                    <li>
                      <i class="far fa-check-circle"></i> Heated front seats
                    </li>
                    <li>
                      <i class="far fa-check-circle"></i> Navigation system
                    </li>
                    <li>
                      <i class="far fa-check-circle"></i> Leather seats
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul class="car-single-list">
                    <li>
                      <i class="far fa-check-circle"></i> Premium sound system
                    </li>
                    <li>
                      <i class="far fa-check-circle"></i> Bluetooth
                    </li>
                    <li>
                      <i class="far fa-check-circle"></i> Andriod Auto
                    </li>
                    <li>
                      <i class="far fa-check-circle"></i> Intermittent wipers
                    </li>
                  </ul>
                </div>
                <div class="col-lg-4">
                  <ul class="car-single-list">
                    <li>
                      <i class="far fa-check-circle"></i> Memory seat
                    </li>
                    <li>
                      <i class="far fa-check-circle"></i> Adaptive Cruise
                      Control
                    </li>
                    <li>
                      <i class="far fa-check-circle"></i> Cooled Seats
                    </li>
                    <li>
                      <i class="far fa-check-circle"></i> Keyles Start
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="tab2"
              role="tabpanel"
              aria-labelledby="nav-tab2"
            >
              <div class="single-additional-info">
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
              class="tab-pane fade"
              id="tab3"
              role="tabpanel"
              aria-labelledby="nav-tab3"
            >
              <ul class="car-single-list">
                <li>
                  <i class="far fa-check-circle"></i> It is a long established
                  fact that a reader will be distracted
                </li>
                <li>
                  <i class="far fa-check-circle"></i> Sed perspic unde omnis
                  iste natus sit voluptatem accusantium
                </li>
                <li>
                  <i class="far fa-check-circle"></i> Explain to you how all
                  this mistaken idea of denouncing pleasure
                </li>
                <li>
                  <i class="far fa-check-circle"></i> Praising pain was born
                  will give account of the system
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="related-item">
          <div class="row">
            <div class="col-12 mx-auto">
              <div class="site-heading">
                <h2 class="site-title">Related Items</h2>
              </div>
            </div>
          </div>
          <div class="shop-item-wrapper">
            <div class="row">
              <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="car-item wow fadeInUp" data-wow-delay=".25s">
                  <div class="car-img">
                    <span class="car-status status-1">Used</span>
                    <img src="../assets/img/car/terra16xp.jpg" alt="" />

                    <div class="car-btns">
                      <a href="#">
                        <i class="far fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="far fa-arrows-repeat"></i>
                      </a>
                    </div>
                  </div>
                  <div class="car-content">
                    <div class="car-top">
                      <h4>
                        <a href="#">Terra16 XP Tipper</a>
                      </h4>
                      <div class="car-rate">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>5.0 (58.5k Review)</span>
                      </div>
                    </div>
                    <ul class="car-list">
                      <li>
                        <i class="far fa-steering-wheel"></i>Automatic
                      </li>
                      <li>
                        <i class="far fa-road"></i>10.15km / 1-litre
                      </li>
                      <li>
                        <i class="far fa-car"></i>Eng. Model : JE493ZLQ3A ISUZU
                      </li>
                      <li>
                        <i class="far fa-gas-pump"></i>Eicher
                      </li>
                    </ul>
                    <div class="car-footer">
                      <span class="car-price">TK 6,40,000</span>
                      <a href="#" class="theme-btn">
                        <span class="far fa-eye"></span>Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="car-item wow fadeInUp" data-wow-delay=".50s">
                  <div class="car-img">
                    <span class="car-status status-2">New</span>
                    <img src="../assets/img/car/terra16xp.jpg" />
                    <div class="car-btns">
                      <a href="#">
                        <i class="far fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="far fa-arrows-repeat"></i>
                      </a>
                    </div>
                  </div>
                  <div class="car-content">
                    <div class="car-top">
                      <h4>
                        <a href="#">Terra16 XP Tipper</a>
                      </h4>
                      <div class="car-rate">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>5.0 (58.5k Review)</span>
                      </div>
                    </div>
                    <ul class="car-list">
                      <li>
                        <i class="far fa-steering-wheel"></i>Automatic
                      </li>
                      <li>
                        <i class="far fa-road"></i>10.15km / 1-litre
                      </li>
                      <li>
                        <i class="far fa-car"></i>Eng. Model : JE493ZLQ3A ISUZU
                      </li>
                      <li>
                        <i class="far fa-gas-pump"></i>Eicher
                      </li>
                    </ul>
                    <div class="car-footer">
                      <span class="car-price">TK 5,70,000</span>
                      <a href="#" class="theme-btn">
                        <span class="far fa-eye"></span>Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="car-item wow fadeInUp" data-wow-delay=".25s">
                  <div class="car-img">
                    <span class="car-status status-1">Used</span>
                    <img src="../assets/img/car/terra16xp.jpg" alt="img" />

                    <div class="car-btns">
                      <a href="#">
                        <i class="far fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="far fa-arrows-repeat"></i>
                      </a>
                    </div>
                  </div>
                  <div class="car-content">
                    <div class="car-top">
                      <h4>
                        <a href="#">Terra16 XP Tipper</a>
                      </h4>
                      <div class="car-rate">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>5.0 (58.5k Review)</span>
                      </div>
                    </div>
                    <ul class="car-list">
                      <li>
                        <i class="far fa-steering-wheel"></i>Automatic
                      </li>
                      <li>
                        <i class="far fa-road"></i>10.15km / 1-litre
                      </li>
                      <li>
                        <i class="far fa-car"></i>Eng. Model : JE493ZLQ3A ISUZU
                      </li>
                      <li>
                        <i class="far fa-gas-pump"></i>Eicher
                      </li>
                    </ul>
                    <div class="car-footer">
                      <span class="car-price">TK 6,40,000</span>
                      <a href="#" class="theme-btn">
                        <span class="far fa-eye"></span>Details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="car-item wow fadeInUp" data-wow-delay=".50s">
                  <div class="car-img">
                    <span class="car-status status-2">New</span>
                    <img src="../assets/img/car/terra16xp.jpg" alt="img" />
                    <div class="car-btns">
                      <a href="#">
                        <i class="far fa-heart"></i>
                      </a>
                      <a href="#">
                        <i class="far fa-arrows-repeat"></i>
                      </a>
                    </div>
                  </div>
                  <div class="car-content">
                    <div class="car-top">
                      <h4>
                        <a href="#">Terra16 XP Tipper</a>
                      </h4>
                      <div class="car-rate">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>5.0 (58.5k Review)</span>
                      </div>
                    </div>
                    <ul class="car-list">
                      <li>
                        <i class="far fa-steering-wheel"></i>Automatic
                      </li>
                      <li>
                        <i class="far fa-road"></i>10.15km / 1-litre
                      </li>
                      <li>
                        <i class="far fa-car"></i>Eng. Model : JE493ZLQ3A ISUZU
                      </li>
                      <li>
                        <i class="far fa-gas-pump"></i>Eicher
                      </li>
                    </ul>
                    <div class="car-footer">
                      <span class="car-price">TK 5,70,000</span>
                      <a href="#" class="theme-btn">
                        <span class="far fa-eye"></span>Details
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
