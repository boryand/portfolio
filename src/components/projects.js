
import logo from "../pictures/logo.png";
import logo1 from "../pictures/logo1.gif";
import rina from "../pictures/rina.jpg";
import Slide from "react-reveal/Slide";

const Projects = () => {
  const url2 = "https://main.d395u6ndg1stgh.amplifyapp.com/";
  const url3 = "https://main.d2jd8gki5jhbu3.amplifyapp.com/";
 
  const url5 = "https://www.zu-bar-and-dinner.com/";
  return (
    <div className="container5">
      <div className="container6">
        <Slide top cascade>
          <a href={url2} target="_blank">
            {" "}
            <img src={logo} alt="" className="project_img" />
          </a>
          <a href={url3} target="_blank">
            <img src={rina} alt="" className="project_img" />
          </a>
          <a href={url5} target="_blank">
            <img src={logo1} alt="" className="project_img" />
          </a>
        </Slide>
      </div>
      <div className="container6"></div>
    </div>
  );
};

export default Projects;
