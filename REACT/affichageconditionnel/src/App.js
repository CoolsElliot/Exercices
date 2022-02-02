import {Component} from "react"
import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"

class App extends Component{
  render(){
    return(
      <div className="body">
        <Header/>
        <Footer/>
      </div>
      
    );
  }
}

export default App;
