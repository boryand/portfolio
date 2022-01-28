const AboutMe = () => {
  return (
    <div className=" container_1">
      <div className="p1">
      <img
          className="img1"
          src=" https://doodleipsum.com/700/avatar?i=8a55934bd31bad224d44b8f336a6ade9"
        />
      
        <h3 className="info"> Who am I ? </h3>
        <p className="p11">
          It’s hard to beat a person who never gives up, right? <br /> <br /> My
          name is Boryana Dimirova and I come originally from Bulgaria , but I
          live in Germany since 2018. <br />
          I can characterize myself like a motivated person , who likes to learn
          something new every day.
         Also adaptability , team spirit and  approachability comes naturally to me.
        
        </p>
      </div>

     
  

     
    
      <h3 className="info3"> My Tech Skills: </h3>

      <div className="p2">
        <img
          className="img1"
          src="https://doodleipsum.com/700/hand-drawn?i=0293217a2126d91159f5a6717396cbe4"
        />
            
        <div className="info_card">
   
        <h5> FrontEnd </h5>
   
        <p>HTML5</p>
        <p>CSS3</p>
        <p>Sass</p>
        <p>Javascript</p>

        <p>React.js</p>

        </div>
       
<div className="info_card2"><h5> Backend  </h5>
     
        <p>Node.js</p>
        <p>Express</p>
     
 
    </div>
    <div className="info_card3"><h5> Databases </h5>
        <p>SQL</p>
        <p>MongoDB</p>
 
    </div>
    <div className="info_card5"><h5> Version control systems </h5>
    <p>Git</p>
        <p>Github</p>
     
    </div>
        
    <div className="info_card4"><h5> Another</h5>
        <p>RESTful Api's</p>
        <p>DEVOPS(Hoisting, Deployment, Monitoring)</p>
       
        <p>Software Testing(TTD)</p>
        <p>Agile tools and methodologies</p>
 
    </div>
               

        
         
      </div>
    </div>
  );
};

export default AboutMe;
