import "../src/styles/style.css";
import "semantic-ui-css/semantic.min.css";
import { Switch, Route, } from "react-router-dom";
import Navbar from "./components/navbar";
import Landing from "./components/landing";
import AboutMe from "./components/about_me";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
import Projects from "./components/projects";

import Resume from "./components/resume";

function App() {
  return (
    <div className="wrapper">
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route exact path="/about_me">
          <AboutMe />
        </Route>

        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
