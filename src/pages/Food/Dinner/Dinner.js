import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import DinnerFood from "../DinnerFood/DinnerFood";

const Dinner = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/AL-AMIN-HUB/hot-onion/main/src/fakedata/dinner.json")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  return (
    <div>
      <>
        <Row className="container g-3 mx-auto my-5" xs={1} sm={1} md={3}>
          {food.map((foods) => (
            <DinnerFood key={foods.id} singleFood={foods}></DinnerFood>
          ))}
        </Row>
      </>
    </div>
  );
};

export default Dinner;
