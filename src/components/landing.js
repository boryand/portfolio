import me from "../pictures/me.png";

const Landing = () => {
  return (
    <>
      <div className="container1">
        <h5 id="me">
          Boryana Dimitrova <br /> Full Stack Developer
        </h5>

        <img className="img3 " alt="picture_of_me" src={me} />
      </div>
    </>
  );
};

export default Landing;
