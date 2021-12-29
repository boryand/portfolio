
import mail from "../pictures/mail.png"

import linkeddin from "../pictures/linkeddin.png"

import git from "../pictures/git.png"

import phone from "../pictures/phone.png"



const Side = ()=> {



    return (
        <div className="utility">
           <a href="mailto:boryana.dimitrova789@gmail.com">  <img className="img999"src={mail}/> </a>
           <a href="tel:015237763510">  <img className="img999"src={phone}/></a>
           <a  href="https://github.com/boryand">  <img className="img999"src={git}/> </a>
            <a  href="https://www.linkedin.com/in/boryana-dimitrova-2a9617220/">   <img className="img999"src={linkeddin}/> </a>
        </div>

    )
}

export default Side