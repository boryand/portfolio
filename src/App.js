
import './App.css';
import { Switch, Route, Link, NavLink } from "react-router-dom";
import Navbar from './components/navbar';

function App() {
  return (
    <div className="wrapper">
      <div className="navbar">
        <ul className="navbar1">
          <li className="navbar2"> <button className="neonShadow"> <span>HOME </span> </button></li>
          {/* <li className="navbar2"> <button className="neonShadow"> <span> HOME </span> </button> </li> */}
          <li className="navbar2"> <button className="neonShadow"> <span> HOME </span> </button> </li>
          </ul>
      
      </div>
      {/* <Switch>
      <Route path="/home">
              <Navbar />
            </Route>
      </Switch> */}
     
    </div>
  );
}

export default App;
