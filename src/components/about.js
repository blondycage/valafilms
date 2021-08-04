import React from 'react'
import img1 from "../files/Guzape1.jpeg"
import img2 from "./ololcover.png"
import img3 from "./Seun.jpg"
import img4 from "./Saraya.jpg"
import img5 from "./Chavala.jpg"
import Button from '@material-ui/core/Button';
export default function about () {
    return (
        <div className="aboutus ">
          <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          <div className="flexdivider">
<div className="teamflex">
<div className="teanrow">
  <div><img src={img5} alt=""  height='250px'/>
  <div className="lk"><h4>Chavala Yaduma: <br /> creative director</h4></div><div className='lk'> <a href="#" className="fa fa-facebook"></a>
<a href="#" className="fa fa-twitter"></a>
<a href="#" className="fa fa-google"></a></div></div>
  <div><img src={img4} alt=""  height='250px'/>  <div className="lk"><h4>Saraya Yaduma: <br /> director/writer</h4></div><div className='lk'> <a href="#" className="fa fa-facebook"></a>
<a href="#" className="fa fa-twitter"></a>
<a href="#" className="fa fa-google"></a></div>
</div> 
</div>
<div className="teanrow">
  <div><img src={img3} alt=""  height='250px'/>
 <div className="lk"><h4>Oluwaseun Oke: <br /> Videographer/editor</h4></div> <div className='lk'> <a href="#" className="fa fa-facebook"></a>
<a href="#" className="fa fa-twitter"></a>
<a href="#" className="fa fa-google"></a></div></div>
  <div><img src={img2} alt=""  height='250px'/> 
<div className="lk"><h4>Boyett Truman: <br /> Project Manager/writer</h4></div><div className='lk'>  <a href="#" className="fa fa-facebook"></a>
<a href="#" className="fa fa-twitter"></a>
<a href="#" className="fa fa-google"></a></div>
</div>  
</div>
</div>
<div className="teamdesc">
  
  <h2>OUR TEAM</h2>
    <h1> amet, consectetur adipisicing elit. Aliquid error delectus repudiandae quasi voluptates omnis temporibus. Sapiente, dolor.</h1>

    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum necessitatibus quo aperiam adipisci labore debitis quidem, sapiente alias laborum sunt similique soluta odit aspernatur illum quasi ullam rerum minima fugit!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis odit ipsam modi natus ea similique iure! Iure itaque asperiores saepe.</p>

 
   </div>
          </div>
          </div>
        </div>
    )
}
