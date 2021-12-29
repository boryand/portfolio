import { Switch, Route, Link, NavLink } from "react-router-dom";
import flat from '../pictures/flat.png'
import email from "../pictures/email.png"
import github from "../pictures/github.png"
import linkedin from "../pictures/linkedin.png"
import mail from "../pictures/email.png"

const Contacts = ()=> {

return (
    <div class="container3">
     
            <h1 className="for ">Do you  want to work with me or just ask me a question? <br/>  </h1>
            <h1 className="for1"> Here are my contacts : </h1>
            <div className="container4">
      <h3> <a className="link1"href="mailto:boryana.dimitrova789@gmail.com">   <img className="email"src={email}/> My Email </a> </h3>   
      
       <h3> <a className="link1" href="https://github.com/boryand">   <img className="github"src={github}/>My Github </a> </h3>
       <h3> <a className="link1" href="https://www.linkedin.com/in/boryana-dimitrova-2a9617220/">   <img className="email"src={linkedin}/> My LinkedIn </a> </h3>
       <img className="contact_image" src={flat}/>
       </div>
       

    </div>


)

}

export default Contacts