import React from "react";
import Select2Dp from "../components/Select2Dp";
import Typewriter from "../components/Typewriter";

const BrandOptions = [
  { 1: "Eicher", label: "Eicher" },
  { 2: "Mahindra", label: "Mahindra" },
  { 3: "Dongfeng", label: "Dongfeng" },
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
    <div className="find-car">
      <div className="container">
        <div className="find-car-form">
          <Typewriter text="Hey! Let's Find Perfect Vehicle For You." delay={100} infinite  />

          <form action="noaction">
            <div className="row justify-content-end">
              <div className="col-lg-3">
                <div className="form-group">
                  <label>Brand Name</label>
                  <Select2Dp name="brand" optionProps={BrandOptions} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>Category</label>
                  <Select2Dp name="model" optionProps={ModelOptions} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <label>Model</label>
                  <Select2Dp name="model" optionProps={ModelOptions} />
                </div>
              </div>
              {/*  */}

              <div className="col-lg-3 mt-3  align-self-end">
                <button className="theme-btn" type="submit">
                  <span className="far fa-search"></span> Find Your Vehicle
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
