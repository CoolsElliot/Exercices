import React from "react"
import Profile from "./Component/Profile"
import Card from "./Component/Card"
import {useState} from "react"



function App() {

  const data = require("./data.json");
  const [monState, setMonState] = useState("modifie ce texte");
  const modifyState = () =>{
    setMonState(20);
  };

  return (
    <body>
      <div className="container-fluid">
        <div className="row h-50">
          <div className="col-lg-12 d-flex">
            <Profile/>
            <div className="col-lg-9 d-flex flex-wrap">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
        </div>
      </div>
    </body>
    
  );
}

/* <h2>Test</h2>
        <button onClick={modifyState} className="bg-primary text-light mt-4">Clique ici pour modifier</button>
        <p className="mt-4">{monState}</p> */

export default App;
