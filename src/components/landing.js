import { useEffect, useRef,  } from "react";
import M from "materialize-css";
import { Link, NavLink } from "react-router-dom";

const Landing = () => {
 

  return (
      <div className="container1">
        <img className="img2"src="https://scontent-frx5-1.xx.fbcdn.net/v/t1.18169-9/11017486_132202833787453_6126314620951935050_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=a4UrepjNKK0AX8BWH9d&_nc_ht=scontent-frx5-1.xx&oh=6a93e929a52ed540f331971886db0aa1&oe=61D471E0" />
          <h1 className='me'> Boryana Dimitrova </h1>
           <h3 className='me'> Front-end Developer </h3>
          <Link to="/aboutMe"> <a class="waves-effect waves-light btn #8d6e63 brown lighten-1"><i class="material-icons right">cloud</i>ABOUT ME</a> </Link>

          </div>
  )
};

export default Landing;
