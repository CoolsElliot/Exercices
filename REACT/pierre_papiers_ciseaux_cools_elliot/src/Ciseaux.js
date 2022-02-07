import React from "react"

class Ciseaux extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-center align-items-center" id="ciseaux">
                <img src="./images/icon-scissors.svg" alt="icone ciseaux" style={{width: "70px"}}/>
            </div>
        );
    }
}

export default Ciseaux