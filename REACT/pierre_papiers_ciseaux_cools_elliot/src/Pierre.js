import React from "react"

class Pierre extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-center align-items-center" id="pierre">
                <img src="./images/icon-rock.svg" alt="icone pierre" style={{width: "70px"}}/>
            </div>
        );
    }
}

export default Pierre