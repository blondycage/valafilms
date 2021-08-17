import logo from './files/Logo_Low.png';
import React from 'react';
import ReactDOM from 'react-dom';

import Vid from '../src/files/video.mp4'
import Vid2 from '../src/files/vid.mp4'
import Vid3 from '../src/files/ad2.mp4'
import {useState,useEffect  } from "react";
import Home from "../src/components/homepage";
import Projects from "../src/components/projects"
import Collabs from "../src/components/collab"
import Admin from "../src/components/admin"
import Ad from "../src/components/Ad"
import Ab from "../src/main"

import './App.css';
import rad from "../src/files/radar.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useWindowScroll } from "react-use";
function App() {
  const { y: pageYOffset } = useWindowScroll();
 const [styleCondition,setstyle]=useState(true);
 const [styleCondition2,setstyle2]=useState(true);
 const [styleCondition3,setstyle3]=useState(true);
 const [visible, setVisiblity] = useState("");
const[view,setview]=useState('home');

 

  return (
    <div >
       <Router>
         <Switch>
         <Route path="/" exact component={Ab}/>
       <Route path="/admin" component={Admin}/>

           
        

         
  </Switch>
       
  </Router>
    </div>
  );
}

export default App;
