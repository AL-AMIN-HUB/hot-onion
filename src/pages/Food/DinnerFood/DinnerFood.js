import React from "react";
import { Card, Col } from "react-bootstrap";

const DinnerFood = (props) => {
  const { name, image, desc, price } = props.singleFood;

  return (
    <div>
      <Col>
        <Card className="h-100 border-0 card-foods">
          <Card.Img className="img-fluid w-75 mx-auto p-5 image-card" variant="top" src={image} />
          <Card.Body className="text-center">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{desc}</Card.Text> <Card.Text className="fs-5 fw-bold">$ {price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default DinnerFood;
