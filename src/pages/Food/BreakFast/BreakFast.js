import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import BreakFasts from "../BreakFasts/BreakFasts";

const BreakFast = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/AL-AMIN-HUB/hot-onion/main/src/fakedata/breakfast.json")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  return (
    <>
      <Row className="container g-4 mx-auto my-5" xs={1} sm={1} md={3}>
        {food.map((foods) => (
          <BreakFasts key={foods.id} singleFood={foods}></BreakFasts>
        ))}
      </Row>
      <div className="text-center">
        <button className="btn btn-outline-warning fs-5">Checkout your food</button>
      </div>
    </>
  );
};

export default BreakFast;
