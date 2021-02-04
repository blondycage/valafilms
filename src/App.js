import logo from './files/Logo_Low.png';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Vid from '../src/files/video.mp4'
import Vid2 from '../src/files/vid.mp4'

import {useState,useEffect  } from "react";
import Home from "../src/components/homepage";
import Projects from "../src/components/projects"

function App() {

 const [styleCondition,setstyle]=useState(true);
 const [styleCondition2,setstyle2]=useState(true);
 const [styleCondition3,setstyle3]=useState(true);
const[view,setview]=useState('home');
 function setviews(role) {
  
  switch(role) {
    case 'home':
      return <Home vid={Vid}/>
    case 'projects':
    return <Projects vid={Vid2} />
    case 'moderator':
      return <p>Your ongoing events</p>
    default:
      return <p>Your current feed</p>
  }

}

  return (
    <div className="App">
    
      <div className="homecon">
        <img src={logo} alt=""/>
        <h1>V A L A F I L M S</h1>
      </div>
    {setviews(view)}
        
        <div id="nav-icon2" className={styleCondition2 ? "spin circle": "spin circle open"} onClick={(e)=>{ e.preventDefault();setstyle2(!styleCondition2);setstyle3(!styleCondition3);
        setstyle(!styleCondition)}}>
  <span ></span>
  <span ></span>
  <span ></span>
  <span ></span>
  <span ></span>
  <span></span>


      </div>

  <div className={styleCondition ? "nav" : "nav show"}>
  <p className="cp-text">
    © Copyright 2021 Valafilms. All rights reserved.
</p>
    <div className="navcontent">

<div className="nav-content-container">

<h1 className={styleCondition3 ? "slidedown" : "slideup"}onClick={()=>{setview('home');setstyle2(!styleCondition2);setstyle(!styleCondition);;setstyle3(!styleCondition3)}} >home </h1>
<h1 className={styleCondition3 ? "slidedown" : "slideup"} onClick={()=>{setview('projects');setstyle2(!styleCondition2);setstyle(!styleCondition);;setstyle3(!styleCondition3)}}>project</h1>
<h1 className={styleCondition3 ? "slidedown" : "slideup"}>something</h1>
<h1 className={styleCondition3 ? "slidedown" : "slideup"}>something</h1>
<h1 className={styleCondition3 ? "slidedown" : "slideup"}>something</h1>

</div>


      
    </div>
  </div>
 
    </div>
  );
}

export default App;
