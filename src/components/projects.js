import comming from "../pictures/comming.gif"
import pika from "../pictures/pika.gif"


const Projects = ()=> {
    const url = "https://pokefight123.herokuapp.com/"
    return (
        <div className="container5">
         

   <h1> Click on a card to see the project</h1>










         <div class="card">
    <div class="image">
      <img src={pika}/>
    </div>
    <div class="details">
      <div class="center">
        <h1>Pokefight<br /></h1>
        <p>This project is not my first , but one of <br/>
        my favorites.  There was an API <br />
        provided for me and my colleague and we mainly did the front-end.
        The game mechanism is really effortless - the winning pokemon <br/>
        is the one with the biggest HP.
      </p>
        <a className="project_link" href={url}><span>Check it out</span></a>
       
      </div>
    </div>
  </div>










        </div>






    )
}

export default Projects;