import comming from "../pictures/comming.gif";
import pika from "../pictures/pika.png";
import logo from "../pictures/logo.png";
import logo1 from "../pictures/logo1.gif";
import rina from "../pictures/rina.jpg";

const Projects = () => {
  const url2 = "https://res-design.d2tpgv3psqdgl.amplifyapp.com/";
  const url3 = "https://main.d2jd8gki5jhbu3.amplifyapp.com/";
  const url4 =
    "https://www.linkedin.com/posts/boryana-dimitrova94_restaurant-menu-activity-6933023908413489152-_Gj-?utm_source=linkedin_share&utm_medium=member_desktop_web";
  const url5 = "https://www.zu-bar-and-dinner.com/";
  return (
    <div className="container5">
      <div className="container6">
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
      </div>
      <div className="container6"></div>
    </div>
  );
};

export default Projects;
