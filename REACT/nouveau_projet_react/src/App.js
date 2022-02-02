import React from "react"
import Profile from "./Profile"
import Card from "./Card"
import {useState} from "react"


function App() {

  const data = require("../src/data.json");

  const cards = document.querySelector("#body");

  console.log(cards);

  return (
    <div id="body">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-3" id="jeremy">
            <Profile/>
          </div>
          <div className="col-lg-9" id="cards">
            <div className="container-fluid p-0 h-100">
              <div className="row pb-2 h-50">
                <Card/>
                <Card/>
                <Card/>
              </div>
              <div className="row pt-2 h-50">
                <Card/>
                <Card/>
                <Card/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
