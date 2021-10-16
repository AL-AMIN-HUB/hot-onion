import React from "react";

import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div>
          <h1 className="header">Best food waiting for your belly</h1>
          <div className="text-center d-flex justify-content-center mt-3 flex-md-row flex-column">
            <div className=" text-center">
              <input
                className="form-control"
                style={{ width: "25rem", padding: "5px", fontSize: "1.5rem" }}
                type="text"
                name="text"
                placeholder="Search food items"
              />
            </div>
            <div className="text-center mt-md-0 mt-3">
              <button className="btn btn-danger fs-4">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
