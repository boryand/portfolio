import comming from "../pictures/comming.gif";
import pika from "../pictures/pika.png";
import logo from "../pictures/logo.png";
import logo1 from "../pictures/logo1.gif";
import rina from "../pictures/rina.jpg";


const Projects = () => {
  const url = "https://pokefight123.herokuapp.com/";
  const url2 = "https://max-lounge.herokuapp.com/";
  const url3 = "https://rina-beauty.herokuapp.com/";
  const url4 =
    "https://www.linkedin.com/posts/boryana-dimitrova94_restaurant-menu-activity-6933023908413489152-_Gj-?utm_source=linkedin_share&utm_medium=member_desktop_web";
  return (
    <div className="container5">
      
     <a href={url2}> <img src={logo} alt="" className="project_img" /></a> 
<a href={url3}><img src={rina} alt="" className="project_img"/></a>
<a href={url4}><img src={logo1} alt="" className="project_img"/></a>
    
      

    </div>
  );
};

export default Projects;
