import "./App.css";
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import AboutMe from "./components/about_me";
import Contacts from "./components/contacts";
import Footer from "./components/footer";


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
        <Route exact path="/contacts">
          <Contacts />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
