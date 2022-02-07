import React from "react"
import { render } from "react-dom";
import Info from "./Info"
import Pierre from "./Pierre"
import Papier from "./Papier"
import Ciseaux from "./Ciseaux"

class App extends React.Component {
  render(){
    return (
      <div id="body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
                <Info/> 
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 d-flex flex-wrap justify-content-center mt-6 position-relative">
              <img className="img-fluid position-absolute" id="bg-triangle" src="./images/bg-triangle.svg" alt="background triangle" />
              <div className="d-flex justify-content-center ps-7" style={{width: "50%"}}><Pierre/></div>
              <div className="d-flex justify-content-center pe-7" style={{width: "50%"}}><Papier/></div>
              <div className="d-flex justify-content-center pt-5" style={{width: "100%"}}><Ciseaux/></div>
            </div>
          </div>
          <div className="p-1 position-absolute" id="rules">
            <p className="ps-3 pe-3 m-0 fs-3 fw-bold text-uppercase text-light">Rules</p>
          </div>
        </div>
      </div>
        
      );
  }
}

export default App;
