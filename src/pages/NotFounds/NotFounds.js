import React from "react";
import { Link } from "react-router-dom";

const NotFounds = () => {
  return (
    <div className="text-center mt-5">
      <img src="https://cdn.dribbble.com/users/992274/screenshots/7392790/media/95483df50a0a3324c4cf9ccb1094b825.jpg" alt="" />
      <Link to="/home">
        <button className="btn btn-outline-success fs-5 my-5">Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFounds;
