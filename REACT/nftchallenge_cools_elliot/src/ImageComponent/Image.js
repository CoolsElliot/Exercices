import React from "react"
import Equilibrium from "../img/image-equilibrium.jpg"

class Image extends React.Component{
    render(){
        return(
            <div id="image">
                <img className="img-fluid" id="image" src={Equilibrium} alt="Equilibrium" />
            </div>
        );
    }
}

export default Image