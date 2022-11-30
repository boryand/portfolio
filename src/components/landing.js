import gui from "../pictures/gui.png";
import Pulse from "react-reveal/Pulse";

const Landing = () => {
  return (
    <>
      <div className="container1">
        <Pulse>
          <img alt="" className="mine" src={gui} />
        </Pulse>
      </div>
    </>
  );
};

export default Landing;
