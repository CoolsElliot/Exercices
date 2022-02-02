import React from "react"
import Jeremy from "../src/images/image-jeremy.png"
import Data from "./data.json"

class Profile extends React.Component{

    temps = (x) =>{
        this.props.onTemps(x)
    }

    render(){
        return(
            <div className="text-secondary h-100" id="jeremydiv">
                <div className="d-flex flex-column" id="jeremydiv2">
                    <img className="img-fluid ms-4 mt-4" src={Jeremy} alt="Jeremy" id="imgjeremy" />
                    <p className="m-O ms-4 pt-4 fs-3" id="firstpjeremy">Report for</p>
                    <p className="m-0 ms-4 fs-5 text-light">Jeremy Robson</p>
                </div>
                <ul className="d-flex flex-column list-unstyled">
                    <li>
                        <button className="ms-4 mb-3 mt-3 fs-3" onClick={() => this.temps("daily")}>Daily</button>
                    </li>
                    <li>
                        <button className="ms-4 mb-3 fs-3" onClick={() => this.temps("weekly")}>Weekly</button>
                    </li>
                    <li>
                        <button className="ms-4 fs-3" onClick={() => this.temps("monthly")}>Monthly</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Profile