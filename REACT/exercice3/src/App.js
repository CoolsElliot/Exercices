import React, {Component} from "react"

let dateCourante = new Date();

class App extends Component{
  render(){
    return(
      <div>
        <p>Date actuelle: {dateCourante.getDate()}/{dateCourante.getMonth()+1}/{dateCourante.getFullYear()} </p>
        <p>Heure actuelle: {dateCourante.getHours()}:{dateCourante.getMinutes()}:{dateCourante.getSeconds()}</p>
      </div> 
    );
  }
}

export default App