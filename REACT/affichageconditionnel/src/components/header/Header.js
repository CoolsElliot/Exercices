import {Component} from "react"

class Header extends Component{
    render(){
        return(
            <header>
            <nav className="d-flex justify-content-between bg-primary">
                <h1>Ma Navbar</h1>
                <i class="fas fa-bars fs-6 p-2"></i>
            </nav>
        </header>
        );
    }
}

export default Header