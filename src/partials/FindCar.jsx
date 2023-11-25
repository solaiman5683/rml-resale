import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Select2Dp from "../components/Select2Dp";
import Typewriter from "../components/Typewriter";

const BrandOptions = [
  { value: "1", label: "Eicher" },
  { value: "2", label: "Mahindra" },
  { value: "3", label: "Dongfeng" },
];
const ModelOptions = [
  { value: "Eicher Bus", label: "Eicher Bus" },
  { value: "Eicher Truck", label: "Eicher Truck" },
  { value: "3 Wheeler", label: "3 Wheeler" },
  { value: "Pick Up", label: "Pick Up" },
  { value: "Captain", label: "Captain" },
];

function FindCar() {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [modelList, setModelList] = useState([]);

  const handleBrandChange = async (brandId) => {
    setSelectedBrand(brandId);
    setSelectedCategory(null);
    setSelectedModel(null);
    setCategoryList([]);
    setModelList([]);
    try {
      const response = await fetch(
        "https://api.rangsmotors.com?file_name=cat_list&b_id=" + brandId,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.status === "true") {
        const transformedData = data.data.map(({ NAME }) => ({
          value: NAME,
          label: NAME,
        }));
        setCategoryList(transformedData);
      } else {
        console.error("API response status is not true:", data);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category);
    setSelectedModel(null); // Reset model when category changes
    setModelList([]); // Clear previous model list

    try {
      const response = await fetch(
        "https://api.rangsmotors.com?file_name=model_list&cat_name=" + category,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (data.status === "true") {
        const transformedData = data.data.map(({ NAME }) => ({
          value: NAME,
          label: NAME,
        }));
        setModelList(transformedData); // Update modelList state with fetched models
      } else {
        console.error("API response status is not true:", data);
      }
    } catch (error) {
      console.error("Error fetching models:", error);
    }
  };

  const handleModelChange = (model) => {
    setSelectedModel(model); // Handle selected model change here
  };

  const handleSearchData = async (event) => {
    // Mark the function as async
    event.preventDefault();
    setTimeout(async () => {
      Navigate("/searchable-product/"+selectedModel);
    }, 1000);
  };
  return (
    <div className="find-car">
      <div className="container">
        <div className="find-car-form">
          <Typewriter
            text="Hey! Let's Find Perfect Vehicle For You."
            delay={100}
            infinite
          />

          <form onSubmit={handleSearchData}>
            <div className="row justify-content-end">
              <div className="col-lg-3">
                <div className="form-group">
                  <name>Brand Name</name>
                  <Select2Dp
                    name="brand_id"
                    optionProps={BrandOptions}
                    onChange={handleBrandChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <name>Category</name>
                  <Select2Dp
                    name="category"
                    optionProps={categoryList}
                    onChange={handleCategoryChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="form-group">
                  <name>Model</name>
                  <Select2Dp
                    name="model"
                    optionProps={modelList}
                    onChange={handleModelChange}
                  />
                </div>
              </div>

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
