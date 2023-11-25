import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ModelList({ category}) {
  const [modelList, setModelList] = useState([]);
  useEffect(() => {
    const fetchCarData = async () => {
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
            setModelList(data.data);
        } else {
          console.error("API response status is not true:", data);
        }
      } catch (error) {
        console.error("Error fetching car model data:", error);
      }
    };

    fetchCarData();
  },[category]);

    return (
      <div>
        {modelList.map((modelList, index) => {
          return (
            <li key={index}>
              <Link className="dropdown-item"  to={`/searchable-product/${modelList.NAME}`} >
               {modelList.NAME}
              </Link>
            </li>
          );
        })}
      </div>
    );
  }


export default ModelList;
