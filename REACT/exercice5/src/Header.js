import React,{Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component{
    render(){
        return(
            <div className="container-fluid">
                <header className= "row bg-primary">
                <nav className= "col-lg-12 d-flex align-item-center">
                    <h1 className= "text-light w-25 fs-1 me-5">Ma Navbar</h1>
                    <ul className="d-flex justify-content-around list-unstyled w-50 mt-2">
                        <li className="text-light fs-4 me-4">Home</li>
                        <li className="text-light fs-4 me-4">Shop</li>
                        <li className="text-light fs-4 me-4">About</li>
                        <li className="text-light fs-4 me-4">Contact</li>
                    </ul>
                    <div className="w-25">
                        <button className="btn-light mt-3 ms-5">Subscribe</button>
                    </div>
                    
                </nav>
            </header>
            </div>
            
        );
    }
}

export default Header