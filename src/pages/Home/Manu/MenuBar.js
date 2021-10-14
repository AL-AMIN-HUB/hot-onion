import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import logo from "../../../Image/logo2.png";

const MenuBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="text-md-start text-center">
            <img className="w-25 " src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
            <Nav className="d-flex align-items-center justify-content-center">
              <NavLink className="text-decoration-none text-dark fs-4 ms-4" to="/home">
                Home
              </NavLink>
              <NavLink className="text-decoration-none text-dark fs-4 ms-4" to="/detailsCart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
              <NavLink className="text-decoration-none text-dark fs-4 ms-4" to="/login">
                Log in
              </NavLink>
              <NavLink className="ms-4 " to="/register">
                <Button className="fs-5 rounded-pill px-5" variant="danger">
                  Sign up
                </Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MenuBar;
