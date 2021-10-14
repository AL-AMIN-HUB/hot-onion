import React from "react";
import AllTabs from "../../Food/AllTabs/AllTabs";
import BreakFast from "../../Food/BreakFast/BreakFast";
import About from "../About/About";

import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllTabs></AllTabs>
      <BreakFast></BreakFast>
      <About></About>
    </div>
  );
};

export default Home;
