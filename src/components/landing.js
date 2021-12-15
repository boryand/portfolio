import { useEffect, useRef } from "react";

import { Link, NavLink } from "react-router-dom";
import programming from "../pictures/programming.gif";
import me from "../pictures/me.png";

const Landing = () => {
  return (
    <>
      <div className="container1">
       
          <img className="img3 " src={programming} />
          <h1 className="me"> Front-end Developer </h1>
          <h3 className="me"> Boryana Dimitrova </h3>
        
      </div>
    </>
  );
};

export default Landing;
