import React from "react"

class Footer extends React.Component{
    render(){
        return(
            <footer className="d-flex justify-content-between bg-dark">
                <h2 className="text-light">Mon Footer</h2>
                <ul className="d-flex list-unstyled">
                    <li className=""><i class="fab fa-facebook-square text-light fs-6"></i></li>
                    <li className=""><i class="fab fa-facebook-square text-light fs-6"></i></li>
                    <li className=""><i class="fab fa-facebook-square text-light fs-6"></i></li>
                    <li className=""><i class="fab fa-facebook-square text-light fs-6"></i></li>
                </ul>
            </footer>
        );
    }
}

export default Footer