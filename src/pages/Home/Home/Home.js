import React from "react";
import AllTabs from "../../Food/AllTabs/AllTabs";
import BreakFast from "../../Food/BreakFast/BreakFast";

import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllTabs></AllTabs>
      <BreakFast></BreakFast>
    </div>
  );
};

export default Home;
