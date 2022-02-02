import React from "react"
import Profile from "./Profile"
import Card from "./Card"
import Data from "./data.json"
import Img1 from "../src/images/icon-work.svg"
import Img2 from "../src/images/icon-play.svg"
import Img3 from "../src/images/icon-study.svg"
import Img4 from "../src/images/icon-exercise.svg"
import Img5 from "../src/images/icon-social.svg"
import Img6 from "../src/images/icon-self-care.svg"

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {cequejeveux:"weekly"};
  }

  onTempsParent = (x) =>{
    this.setState({cequejeveux: x})
  }
  

  render(){
  
    return (
      <div id="body">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-3" id="jeremy">
              <Profile onTemps={this.onTempsParent}/>
            </div>
            <div className="col-lg-9" id="cards">
              <div className="container-fluid p-0 h-100">
                <div className="row pb-2 h-50">
                  <Card className="bg_orange" img={Img1} title="Work" current={Data[0].timeframes[this.state.cequejeveux].current} previous={Data[0].timeframes[this.state.cequejeveux].previous}/>
                  <Card className="bg_blue" img={Img2} title="Play" current={Data[1].timeframes[this.state.cequejeveux].current} previous={Data[1].timeframes[this.state.cequejeveux].previous}/>
                  <Card className="bg_rouge" img={Img3} title="Study" current={Data[2].timeframes[this.state.cequejeveux].current} previous={Data[2].timeframes[this.state.cequejeveux].previous}/>
                </div>
                <div className="row pt-2 h-50">
                  <Card className="bg_green" img={Img4} title="Exercise" current={Data[3].timeframes[this.state.cequejeveux].current} previous={Data[3].timeframes[this.state.cequejeveux].previous}/>
                  <Card className="bg_mauve" img={Img5} title="Social" current={Data[4].timeframes[this.state.cequejeveux].current} previous={Data[4].timeframes[this.state.cequejeveux].previous}/>
                  <Card className="bg_yellow" img={Img6} title="Self Care" current={Data[5].timeframes[this.state.cequejeveux].current} previous={Data[5].timeframes[this.state.cequejeveux].previous}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
