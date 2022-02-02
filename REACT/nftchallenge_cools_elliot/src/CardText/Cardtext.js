import React from "react"
import Avatar from "../img/image-avatar.png"

class Cardtext extends React.Component{
    render(){
        return(
            <div>
                <h3 className="fs-4 text-light mt-3">Equilibrium #3429</h3>
                <p className="text-secondary fs-3 mt-3">Our Equilibrium Collection promotes<br/>balance and calm.</p>
                <div className="d-flex justify-content-between pb-4 border-bottom">
                    <div className="d-flex align-items-center" id="price">
                        <i className="fab fa-ethereum me-2"></i><p className="m-0 fw-bold">0.041ETH</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="fas fa-clock text-secondary me-2"></i><p className="m-0 text-secondary">3 days left</p>
                    </div>
                </div>
                <div className="d-flex align-items-center pt-3">
                    <img className="img-fluid me-3" id="avatar" src={Avatar} alt="Avatar" /><p className="text-secondary m-0">Creation of <span className="text-light">Jules Wyvern</span></p>
                </div>
                
            </div>
        );
    }
}

export default Cardtext 