import { useEffect, useRef } from "react";

import { Link, NavLink } from "react-router-dom";
import programming from "../pictures/programming.gif";
import me from "../pictures/me.png";
import reccomendation from "../pictures/reccomendation.png";
import cv from "../pictures/cv.png"

const Landing = () => {
  return (
    <>
      <div className="container1">
      
          <h5 id="me"> Boryana Dimitrova <br/> Front-end Developer </h5>
      <p>[I will bring your ideas to life] </p>
         
          <img className="img3 " src={me} />
         
          
       

    
      </div>
      <div className="scroll">
      <div class="scroll-down1">
                <i class="fa fa-angle-down">🡙</i>
            </div>
      </div>
     


            <div className="cv_container">
              <h1 className="typing"> Take a look at my Cv </h1>
           <img src={cv} className="cv" />

            </div>
    </>
  );
};

export default Landing;
