import { Switch, Route, Link, NavLink } from "react-router-dom";

const Contacts = ()=> {

return (
    <div class="container3">
        <div className="network">
            <h1 className="for"> You want to work with me or just ask me a question? <br/> Here are my contacts : </h1>
       <h3> <a href="mailto:boryana.dimitrova789@gmail.com">My Email </a> <i class="material-icons">email</i> </h3>   
     
       <h3> <a href="https://github.com/boryand">My Github </a> <i class="material-icons">developer_mode</i> </h3>
       <h3> <a href="https://www.linkedin.com/in/boryana-dimitrova-2a9617220/"> My LinkedIn </a><i class="material-icons">laptop_mac</i> </h3>
       </div>
    </div>
)

}

export default Contacts