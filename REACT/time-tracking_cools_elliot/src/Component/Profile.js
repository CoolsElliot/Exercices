import React from "react"
import Profileimg from "../images/image-jeremy.png"



class Profile extends React.Component{
    render(){
        return(
            <div className="col-lg-3">
                <div className="mx-5 my-5" id="firstItem">
                    <div className="d-flex flex-column" id="jeremy">
                        <img className="mt-5 ms-5" src={Profileimg} alt="Image de Jeremy"/>
                        <p className="mt-4 ms-5">Report for</p>
                        <h2 className="mb-5 ms-5 fw-normal">Jeremy<br/> Robson</h2>
                    </div>
                    <div className="" id="buttonslist">
                        <ul className="d-flex flex-column list-unstyled">
                            <li>
                            <button className="mt-4 mb-3 ms-5">Daily</button>
                            </li>
                            <li>
                            <button className="mb-3 ms-5">Weekly</button>
                            </li>
                            <li>
                            <button className="mb-3 ms-5">Monthly</button>
                            </li>
                        </ul>
                    </div>
                </div>    
            </div>
        );
    }
}

export default Profile