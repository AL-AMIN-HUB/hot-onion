import React from "react";
import logo from "../../../Image/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className=" footer mt-5 row bg-dark px-5 pt-5">
      <div className="col-md-8 col-12">
        <div>
          <img style={{ width: "150px" }} src={logo} alt="" />
        </div>
      </div>
      <div className="col-md-2 col-6 text-white">
        <ul>
          <li>About Online food</li>
          <li>Read our blog</li>
          <li>Sign up to deliver</li>
          <li>Add your restaurant</li>
        </ul>
      </div>
      <div className="col-md-2 col-6 text-white">
        <ul>
          <li>Get help</li>
          <li>Read FAQs</li>
          <li>View all cities</li>
          <li>Restaurants near</li>
        </ul>
      </div>
      <div className="row pt-5">
        <div className="col-md-8">
          <p className="lead text-muted text-center text-md-start">
            <small> copyright &copy; 2021 online food</small>
          </p>
        </div>
        <div className="col-md-1 fs-5 text-center">
          <p className="text-white">Privacy Policy.</p>
        </div>
        <div className="col-md-1 fs-5 text-center">
          <p className="text-white">Terms of Use</p>
        </div>
        <div className="col-md-2 fs-5 text-center">
          <p className="text-white">Pricing</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
