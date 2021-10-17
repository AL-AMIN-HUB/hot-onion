import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import BreakFast from "../BreakFast/BreakFast";
import Dinner from "../Dinner/Dinner";
import Lunch from "../Lunch/Lunch";

const AllTabs = () => {
  const { path, url } = useRouteMatch();
  return (
    <>
      {" "}
      <div className="w-50 mx-auto mt-5">
        <Nav className="border-0" justify variant="tabs">
          <Nav.Item>
            <Link className="text-decoration-none fs-4 text-dark" to={`${path}/breakfast`}>
              BreakFast
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="text-decoration-none fs-4 text-dark" to={`${path}/lunch`}>
              Lunch
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="text-decoration-none fs-4 text-dark" to={`${path}/dinner`}>
              Dinner
            </Link>
          </Nav.Item>
        </Nav>
      </div>
      <Switch>
        <Route path={`${path}/breakfast`}>
          <BreakFast></BreakFast>
        </Route>{" "}
        <Route path={`${path}/lunch`}>
          <Lunch></Lunch>
        </Route>{" "}
        <Route path={`${path}/dinner`}>
          <Dinner></Dinner>
        </Route>{" "}
      </Switch>
    </>
  );
};

export default AllTabs;
