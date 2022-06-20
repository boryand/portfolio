import Wobble from "react-reveal/Wobble";

const AboutMe = () => {
  return (
    <div className=" container_1">
      <section className="aboutme_1">
        <Wobble>
          <h1>Who am I ?</h1>
        </Wobble>
        <p>
          Hi, I am <span title="name">Bobby</span> and I am Web Developer with a
          strong passion for web design.I felt in love with coding back in 2018
          and after that my mission is to design and develop a website that you
          and your audience will love.
        </p>
      </section>
      <section className="aboutme_1">
        <Wobble>
          <h1>My skills</h1>
        </Wobble>
      </section>

      <section className="aboutme_2">
        <section className="sub_1">
          {" "}
          <h3>Technical Skills</h3>
          <p> HTML5</p>
          <p>CSS3</p>
          <p>Javascript</p>
          <p>Sass</p>
          <p>React</p>
          <p>Node.Js</p>
          <p>Express</p>
          <p>SQL</p>
          <p>MongoDB</p>
          <p>Git/Github</p>
          <p>DevOps (Hosting,Deploying)</p>
          <p>GSAP</p>
        </section>

        <section className="sub_2">
          <h3>Soft Skills</h3>

          <p>
            I'm <span title="skill">smart</span> 📚
          </p>
          <p>Kinda fast ⚡</p>
          <p>
            Strong communication skills ( I can listen without interupting)💬{" "}
          </p>
          <p>Persuasion (Identify what other people care about) 🧐</p>
          <p>Empathy (I won't judge you and I will be supportive) 😊</p>
          <p>Emotionally Intelligent ( I never act impulsively) 🧠 </p>
          <p>Time management (I've learned to prioritize and delegate) ⏱️</p>
          <p>Prefers burgers to pizza 🍔</p>
        </section>
      </section>
    </div>
  );
};

export default AboutMe;
