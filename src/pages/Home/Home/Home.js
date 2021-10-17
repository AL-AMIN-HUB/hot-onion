import React from "react";
import AllTabs from "../../Food/AllTabs/AllTabs";

import About from "../About/About";

import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllTabs></AllTabs>
      <About></About>
    </div>
  );
};

export default Home;
