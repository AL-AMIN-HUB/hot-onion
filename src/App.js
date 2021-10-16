import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import BreakFast from "./pages/Food/BreakFast/BreakFast";
import Dinner from "./pages/Food/Dinner/Dinner";
import Lunch from "./pages/Food/Lunch/Lunch";
import Footer from "./pages/Home/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import MenuBar from "./pages/Home/Manu/MenuBar";
import NotFounds from "./pages/NotFounds/NotFounds";
import Login from "./pages/shared/Login/Login";
import Map from "./pages/shared/Map/Map";
import Register from "./pages/shared/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar></MenuBar>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>{" "}
          <Route path="/breakfast">
            <BreakFast></BreakFast>
          </Route>{" "}
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>{" "}
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>{" "}
          <Route path="/login">
            <div className="login">
              <Login></Login>
            </div>
          </Route>{" "}
          <Route path="/register">
            <Register></Register>
          </Route>{" "}
          <Route path="/map">
            <Map></Map>
          </Route>
          <Route path="*">
            <NotFounds></NotFounds>
          </Route>
        </Switch>
        <div className="footer">
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;
