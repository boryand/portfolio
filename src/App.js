import "./App.css";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import AboutMe from "./components/about_me";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/aboutMe">
          <AboutMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
