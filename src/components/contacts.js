import { Switch, Route, Link, NavLink } from "react-router-dom";

import email from "../pictures/email.png"
import github from "../pictures/github.png"
import linkedin from "../pictures/linkedin.png"
import mail from "../pictures/email.png"
import g1 from "../pictures/g1.gif"
import g2 from "../pictures/g2.gif"

const Contacts = ()=> {

return (
    <div className="wrapper_contacts"> 
     <p className="abc1"> Do you want to work with me? Or just ask me a question? </p> 
    <p className="abc1">You can use these:  </p>  
        <div class="container3">
   
    <img alt="" className="img_contacts" src={g1}/>
 
        <div className="container4">
  <h3> <a className="link1"href="mailto:boryana.dimitrova789@gmail.com">   <img className="email"src={email}/> My Email </a> </h3>   
  
   <h3> <a className="link1" href="https://github.com/boryand">   <img className="github"src={github}/>My Github </a> </h3>
   <h3> <a className="link1" href="https://www.linkedin.com/in/boryana-dimitrova-2a9617220/">   <img className="email"src={linkedin}/> My LinkedIn </a> </h3>

   </div>
   <img alt="" className="img_contacts" src={g1}/>
   

</div></div>
 


)

}

export default Contacts