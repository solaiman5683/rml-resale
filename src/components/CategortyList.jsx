import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModelList from "./ModelList";

function CategortyList({ brand_id }) {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch(
          "https://api.rangsmotors.com?file_name=cat_list&b_id=" + brand_id,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (data.status === "true") {
          setCategoryList(data.data);
        } else {
          console.error("API response status is not true:", data);
        }
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCarData();
  },[brand_id]);

    return (
      <div>
        {categoryList.map((catItem, index) => {
          return (
            <li key={index} className="dropdown-submenu">
              <Link className="dropdown-item dropdown-toggle" >
                {catItem.NAME}
              </Link>

              <ul className="dropdown-menu">
                <ModelList category={catItem.NAME} />
              </ul>
            </li>
          );
        })}
      </div>
    );
  
}

export default CategortyList;
