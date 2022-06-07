const AboutMe = () => {
  return (
    <div className=" container_1">


<h3 className="info"> Who am I ? </h3>
      <div className="p1">
       
        
        <p className="p11">
          My name is Boryana Dimitrova and I live in Germany. Four years ago (2018)
          I decided to learn how to code and my life has changed. After I felt in love with coding,
          I signed up for a bootcamp and learned a lot.
          Since then I have 5 finished projects and my main focus these days is building accessible and
          beautifully designed web applications.
        </p>
      </div>

      <h3 className="info3"> My Tech Skills: </h3>

      <div className="p2">
        

        <div className="info_card">
          <h5> FrontEnd </h5>

          <p>HTML5</p>
          <p>CSS3</p>
          <p>Sass</p>
          <p>Javascript</p>

          <p>React.js</p>
        </div>

        <div className="info_card2">
          <h5> Backend </h5>

          <p>Node.js</p>
          <p>Express</p>
        </div>
        <div className="info_card3">
          <h5> Databases </h5>
          <p>SQL</p>
          <p>MongoDB</p>
        </div>
       

        <div className="info_card4">
          <h5> Another</h5>
          <p>RESTful Api's</p>
          <p>DEVOPS(Hoisting, Deployment, Monitoring)</p>

          <p>Software Testing(TTD)</p>
          <p>Agile tools and methodologies</p>
          <p>Git/Github</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
