import React from 'react'

export default function ad({vid}) {
    return (
        <div>
                 <div className="vidcon">
                 <div className="ic">
                 <a href="#" className="fa fa-facebook"></a>
<a href="#" className="fa fa-twitter"></a>
<a href="#" className="fa fa-google"></a>
<a href="#" className="fa fa-linkedin"></a>
<a href="#" className="fa fa-youtube"></a>
<a href="#" className="fa fa-instagram"></a>
</div>
      <video autoPlay muted loop id="myVideo">
  <source src={vid} type="video/mp4"/>
</video>
<div className="video-overlay"></div>
<div className="vidwriteup">
  <h1 className="slideup">ADS <br/>
  COMMERCIALS AND MORE 
</h1>
</div>

</div>
<div className="content"> 
<h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem adipisci delectus.</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, atque distinctio dolor blanditiis natus asperiores explicabo quo sequi quod at deleniti aspernatur vel possimus dolores aliquam, velit tempore, quidem odio error debitis voluptas. Velit doloribus adipisci numquam, tenetur hic labore?</p>
</div>
<div className="projects">
<div className="linearcont">
  <div className="pcard">
  <img src="//unsplash.it/705/705" alt="img"/>
  <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, error!</h3>
</div>
<div className="pcard">
  <img src="//unsplash.it/350/350" alt="img"/>
  <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
</div>
</div>

<div className="linearcont"><div className="pcard">
  <img src="//unsplash.it/700/700" alt="img"/>
  <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, error!</h3>
</div>
<div className="pcard">
  <img src="//unsplash.it/600/600" alt="img"/>
  <h3>Lorem ipsum dolor sit amet.</h3>
</div>
</div>

</div>
        </div>
    )
}
