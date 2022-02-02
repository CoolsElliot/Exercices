import React from "react"

class Card extends React.Component{
    render(){
        return(

            <div className="col-lg-4 text-secondary h-100">
                <div className="bg-light h-100" id="carddiv">
                    <div className="" id="carddiv2">
                        <div className="d-flex justify-content-between align-items-center pt-2 pb-3">
                            <p className="text-light m-0 ms-3">Work</p><i className="me-3 fas fa-ellipsis-h"></i>
                        </div>
                        <p className="fs-7 ms-3 text-light">32hrs</p>
                        <p className="fs-3 ms-3 lastpcard" >Last Week - 36hrs</p>
                    </div>
                </div>
            </div>
            
            
        );
    }
}

export default Card