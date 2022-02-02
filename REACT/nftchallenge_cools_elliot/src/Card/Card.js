import React from "react"
import Image from "../ImageComponent/Image"
import Cardtext from "../CardText/Cardtext"

class Card extends React.Component{
    render(){
        return( 
                <section className="row justify-content-center align-items-center">
                    <div className="col-lg-3 mt-4 p-4" id="card">
                        <Image/>
                        <Cardtext/>
                    </div>
                </section>
        );
    }
}

export default Card 