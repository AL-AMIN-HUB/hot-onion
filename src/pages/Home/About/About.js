import { faArrowRight, faBell, faBusAlt, faCaravan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Image1 from "../../../Image/adult-blur-blurred-background-687824.png";
import Image2 from "../../../Image/chef-cook-food-33614.png";
import Image3 from "../../../Image/architecture-building-city-2047397.png";

const About = () => {
  return (
    <div className="w-75 mx-auto py-5 mt-5">
      <h2>Why you choose us</h2>
      <p className="w-50 text-muted">
        Barton waited twenty always repair in within we do. An delighted offending curiosity my is dash woods at. Boy prosperous increasing
        surrounded.
      </p>

      <div className="about-card">
        <Row xs={1} sm={1} md={3} className="g-3">
          <Col>
            <Card className="border-0 h-100 shadow-sm">
              <Card.Img variant="top" src={Image1} />
              <Card.Body className="d-flex justify-content-center mt-3">
                <div className="me-3">
                  <small className="bg-danger p-3 fs-5 text-white rounded-circle">
                    {" "}
                    <FontAwesomeIcon icon={faBusAlt} />
                  </small>
                </div>
                <div>
                  <Card.Title>Fast Delivery</Card.Title>
                  <Card.Text>
                    Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.
                  </Card.Text>
                  <Card.Text>
                    <p className="text-primary">
                      See more{" "}
                      <small className="bg-success py-1 px-2 text-white rounded-circle">
                        {" "}
                        <FontAwesomeIcon icon={faArrowRight} />{" "}
                      </small>{" "}
                    </p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 h-100 shadow-sm">
              <Card.Img variant="top" src={Image2} />
              <Card.Body className="d-flex justify-content-center mt-3">
                <div className="me-3">
                  <small className="bg-danger py-2 px-3 fs-5 text-white rounded-circle">
                    {" "}
                    <FontAwesomeIcon icon={faBell} />
                  </small>
                </div>
                <div>
                  <Card.Title>A Good Auto Responder</Card.Title>
                  <Card.Text>
                    Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.
                  </Card.Text>
                  <Card.Text>
                    <p className="text-primary">
                      See more{" "}
                      <small className="bg-success py-1 px-2 text-white rounded-circle">
                        {" "}
                        <FontAwesomeIcon icon={faArrowRight} />{" "}
                      </small>{" "}
                    </p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 h-100 shadow-sm">
              <Card.Img variant="top" src={Image3} />
              <Card.Body className="d-flex justify-content-center mt-3">
                <div className="me-3">
                  <small className="bg-danger fs-5 p-3 text-white rounded-circle">
                    {" "}
                    <FontAwesomeIcon icon={faCaravan} />
                  </small>
                </div>
                <div>
                  <Card.Title>Fast Delivery</Card.Title>
                  <Card.Text>
                    Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.
                  </Card.Text>
                  <Card.Text>
                    <p className="text-primary">
                      See more{" "}
                      <small className="bg-success py-1 px-2 text-white rounded-circle">
                        {" "}
                        <FontAwesomeIcon icon={faArrowRight} />{" "}
                      </small>{" "}
                    </p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
