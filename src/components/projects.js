import comming from "../pictures/comming.gif";
import pika from "../pictures/pika.png";
import logo from "../pictures/logo.png"
import { LOADING } from "@blueprintjs/core/lib/esm/common/classes";

const Projects = () => {
  const url = "https://pokefight123.herokuapp.com/";
  const url2 = "https://max-lounge.herokuapp.com/"
  return (
    <div className="container5">
      {/* <h1> Click on a card to see the project</h1> */}

      <div class="card">
        <div class="image">
          <img src={pika} />
        </div>
        <div class="details">
          <div class="center">
            <h1>
              Pokefight
              <br />
            </h1>
            <p>What I used: <br />🌟 HTML/CSS <br /> 🌟 Javascript <br /> 🌟React</p>
            <a className="project_link" href={url}>
              <span>Check it out</span>
            </a>
          </div>
        </div>
      </div>


      <div class="card">
        <div class="image">
          <img src={logo} />
        </div>
        <div class="details">
          <div class="center">
            <h1>
              Max Lounge
              <br />
            </h1>
            <p>What I used: <br />🌟 HTML/Sass <br /> 🌟 Javascript <br /> 🌟React</p>
            <a className="project_link" href={url2}>
              <span>Check it out</span>
            </a>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Projects;
