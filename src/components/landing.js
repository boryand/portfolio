import { useEffect, useRef } from "react";

import { Link, NavLink } from "react-router-dom";
import programming from "../pictures/programming.gif";
import me from "../pictures/me.png";
import reccomendation from "../pictures/reccomendation.png";

const Landing = () => {
  return (
    <>
      <div className="container1">
        <div>
          <h3 className="me"> Boryana Dimitrova </h3>
          <h1 className="me"> Front-end Developer </h1>
          <img className="img3 " src={programming} />
        </div>

        <div className="con2">
    
          <img className="img4 " src={reccomendation} />
        </div>
      </div>
    </>
  );
};

export default Landing;
