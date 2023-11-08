import React from "react";
import Select2Dp from "../components/Select2Dp";
const BrandOptions = [
  { value: "Eicher", label: "Eicher" },
  { value: "Mahindra", label: "Mahindra" },
  { value: "Dongfeng", label: "Dongfeng" },
];
const ModelOptions = [
  { value: "Eicher Bus", label: "Eicher Bus" },
  { value: "Eicher Truck", label: "Eicher Truck" },
  { value: "3 Wheeler", label: "3 Wheeler" },
  { value: "Pick Up", label: "Pick Up" },
  { value: "Captain", label: "Captain" },
];
const ConditionOptions = [
  { value: "New Vehicle", label: "New Vehicle" },
  { value: "Used Vehicle", label: "Used Vehicle" },
];
const PriceRangeOptions = [
  { value: "TK 1,00,000", label: "TK 1,00,000 - TK 5,00,000" },
  { value: "TK 5,00,000", label: "TK 5,00,000 - TK 10,00,000" },
  { value: "TK 15,00,000", label: "TK 15,00,000 - TK 20,00,000" },
  { value: "TK 20,00,000", label: "TK 20,00,000 - TK 25,00,000" },
  { value: "TK 25,00,000", label: "TK 25,00,000 - TK 30,00,000" },
];

function FindCar() {
  return (
    <div class="find-car">
      <div class="container">
        <div class="find-car-form">
          <h4 class="find-car-title" style={{ color: "#EF1D26" }}></h4>
          <form action="noaction">
            <div class="row justify-content-end">
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Brand Name</label>
                  <Select2Dp name="brand" optionProps={BrandOptions} />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Model</label>
                  <Select2Dp name="model" optionProps={ModelOptions} />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Condition</label>
                  <Select2Dp name="condition" optionProps={ConditionOptions} />
                </div>
              </div>
              <div class="col-lg-3">
                <div class="form-group">
                  <label>Price Range</label>
                  <Select2Dp name="price_range" optionProps={PriceRangeOptions} />
                </div>
              </div>

              <div class="col-lg-3 mt-3  align-self-end">
                <button class="theme-btn" type="submit">
                  <span class="far fa-search"></span> Find Your Vehicle
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FindCar;
