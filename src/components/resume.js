import cv1 from "../pictures/cv1.png";
import cv2 from "../pictures/cv2.png";

const Resume = () => {
  return (
    <div className="resume">
      <img className="my_cv"src={cv1} alt="my_cv" />
      <img   className="my_cv" src={cv2} alt="my_cv1" />
    </div>
  );
};

export default Resume;
