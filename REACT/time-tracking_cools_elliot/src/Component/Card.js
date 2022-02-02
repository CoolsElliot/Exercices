import React from "react"

class Card extends React.Component{
    render(){
        return(
            <div className="col-lg-4">
                <div className="mx-5 my-3">
                    <div className="d-flex flex-column bg-white" id="divCard">
                        <div className="py-3 mt-5" id="card">
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="m-0 ms-4 py-2 text-light">Work</p>
                                <i className="me-4 fas fa-ellipsis-h"></i>
                            </div>
                            <h1 className="ms-4 text-light">32hrs</h1>
                            <p className="ms-4 text-light">Last Week - 36hrs</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card