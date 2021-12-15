import { Switch, Route, Link, NavLink } from "react-router-dom";
import flat from '../pictures/flat.png'

const Contacts = ()=> {

return (
    <div class="container3">
     
            <h1 className="for "> You want to work with me or just ask me a question? <br/>  </h1>
            <h1 className="for1"> Here are my contacts : </h1>
            <div className="container4">
       <h3> <a className="link1"href="mailto:boryana.dimitrova789@gmail.com">My Email </a> </h3>   
      
       <h3> <a className="link1" href="https://github.com/boryand">My Github </a> </h3>
       <h3> <a className="link1" href="https://www.linkedin.com/in/boryana-dimitrova-2a9617220/"> My LinkedIn </a> </h3>
       <img className="contact_image" src={flat}/>
       </div>
    </div>
)

}

export default Contacts