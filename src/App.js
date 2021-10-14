import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import BreakFast from "./pages/Food/BreakFast/BreakFast";
import Dinner from "./pages/Food/Dinner/Dinner";
import Lunch from "./pages/Food/Lunch/Lunch";
import Home from "./pages/Home/Home/Home";
import MenuBar from "./pages/Home/Manu/MenuBar";

function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar></MenuBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>{" "}
          <Route exact path="/breakfast">
            <BreakFast></BreakFast>
          </Route>{" "}
          <Route exact path="/lunch">
            <Lunch></Lunch>
          </Route>{" "}
          <Route exact path="/dinner">
            <Dinner></Dinner>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
