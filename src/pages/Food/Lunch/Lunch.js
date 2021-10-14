import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Row } from "react-bootstrap";
import LunchFood from "../LunchFood/LunchFood";

const Lunch = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/AL-AMIN-HUB/hot-onion/main/src/fakedata/lunch.json")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  return (
    <>
      <Row className="container g-3 mx-auto my-5" xs={1} sm={1} md={3}>
        {food.map((foods) => (
          <LunchFood key={foods.id} singleFood={foods}></LunchFood>
        ))}
      </Row>
    </>
  );
};

export default Lunch;
