import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AllTabs = () => {
  return (
    <div className="w-50 mx-auto mt-5">
      <Nav className="border-0" justify variant="tabs">
        <Nav.Item>
          <NavLink
            activeStyle={{
              border: "1px solid red",
              fontWeight: "bold",
              color: "red",
            }}
            className="text-decoration-none fs-4 text-dark"
            to="/breakfast"
          >
            BreakFast
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            activeStyle={{
              border: "1px solid red",
              fontWeight: "bold",
              color: "red",
            }}
            className="text-decoration-none fs-4 text-dark"
            to="/lunch"
          >
            Lunch
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink
            activeStyle={{
              border: "1px solid red",
              fontWeight: "bold",
              color: "red",
            }}
            className="text-decoration-none fs-4 text-dark"
            to="/dinner"
          >
            Dinner
          </NavLink>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default AllTabs;
