import React from "react"

class Card extends React.Component{
    render(){
        return(

            <div className="col-lg-4 text-secondary">
                <div className={this.props.className} id="carddiv">
                    <img src={this.props.img} className="position-absolute" alt="Image" />
                    <div className="position-relative" id="carddiv2">
                        <div className="d-flex justify-content-between align-items-center pt-2 pb-3">
                            <p className="text-light m-0 ms-3">{this.props.title}</p><i className="me-3 fas fa-ellipsis-h"></i>
                        </div>
                        <p className="fs-7 ms-3 text-light">{this.props.current}hrs</p>
                        <p className="fs-3 ms-3 lastpcard" >Last Week - {this.props.previous}hrs</p>
                    </div>
                </div>
            </div>
            
            
        );
    }
}

export default Card