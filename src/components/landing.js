import { useEffect, useRef,  } from "react";
import M from "materialize-css";
import { Link, NavLink } from "react-router-dom";

const Landing = () => {
 

  return (
      <div className="container1">
          <h1 className='me'> Boryana Dimitrova </h1>
           <h3 className='me'> Front-end Developer </h3>
          <Link to="/aboutMe"> <a class="waves-effect waves-light btn #8d6e63 brown lighten-1"><i class="material-icons right">cloud</i>ABOUT ME</a> </Link>

          </div>
  )
};

export default Landing;
