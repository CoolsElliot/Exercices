import React from "react"
import Jeremy from "../src/images/image-jeremy.png"

class Profile extends React.Component{
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
                        <button className="ms-4 mb-3 mt-3 fs-3">Daily</button>
                    </li>
                    <li>
                        <button className="ms-4 mb-3 fs-3">Weekly</button>
                    </li>
                    <li>
                        <button className="ms-4 fs-3">Monthly</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Profile