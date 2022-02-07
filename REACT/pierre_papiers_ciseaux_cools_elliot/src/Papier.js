import React from "react"

class Papier extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-center align-items-center" id="papier">
                <img src="./images/icon-paper.svg" alt="icone papier" style={{width: "70px"}}/>
            </div>
        );
    }
}

export default Papier