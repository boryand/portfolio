import beije from "../pictures/beije.jpg";
import gui from "../pictures/gui.gif";
import p1 from "../pictures/p1.png";
import p2 from "../pictures/p2.png";
import p3 from "../pictures/p3.png";

const Landing = () => {
  return (
    <>
      <div className="container1">
        <img alt="" className="gui" src={gui} />

        <div className="landing_1">
          <div className="landing_2">
            <img  className="pic124" src={p1} alt="" />
          </div>
          <div className="landing_3">
            {" "}
            <img className="pic124" src={p2} alt="" />
          </div>
          <div className="landing_4">
            {" "}
            <img className="pic124" src={p3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
