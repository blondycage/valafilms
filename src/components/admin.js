import {React,useEffect,useState} from 'react'
import firebase from "./firebase"
import Upload from "./upload"
export default function Admin() {

    const HOMEPAGE_VID_URL=firebase.database().ref()
    const [home,sethome]=useState()
    const [ad,setad]=useState()
    const [collab,setcollab]=useState()
    const [film,setfilm]=useState()
   const[filmsettings,setfilms]=useState(false)
   const[homesettings,sethomes]=useState(true)
   const[adsettings,setads]=useState(false)
   const[collabsettings,setcollabs]=useState(false)

    return (
        <div className='adminform'>
            <h1 style={{color:"white",textAlign:"center"}}>welcome admin</h1>
            <div className="adcon">
                <h3 onClick={()=>{setfilms(false);setads(false);sethomes(true);setcollabs(false)}} className="hib">SHOW HOMEPAGE SETTINGS</h3>
              {homesettings &&  <div className="set">
                    <form action="">
                    <label htmlFor="p1">videolink</label>
                    <input type="text" name='p1'required onChange={(e)=>{
sethome(e.target.value)

                    }}/>
                    <button type='submit' onClick={()=>{
firebase.database().ref('/vala/settings/homepage/landingvideo').set(home).then(()=>{
    alert('homepage video changed successfully')
})



                    }}>upload</button>
                    </form>
                   
                </div>}
                <h3 onClick={()=>{setfilms(true);setads(false);sethomes(false);setcollabs(false)}}className="hib">SHOW FILM PAGE SETTINGS</h3>
              { filmsettings && <div className="set">
                    <div>
                    <form action="">
                    <label htmlFor="p2">videolink</label>
                    <input type="text" name='p2' required  onChange={(e)=>{
setfilm(e.target.value)

                    }}/>
                    <button type='submit' onClick={()=>{
firebase.database().ref('/vala/settings/film/landingvideo').set(film).then(()=>{
    alert('filmpage video changed successfully')
})



                    }} >upload</button>
                    </form>
                    </div>
                   
                    <div>
                        <h3>ADD NEW SLIDE</h3>
                        <Upload path="filmpages"/>
                  

                    </div>
                   
                </div>}
                <h3 onClick={()=>{setfilms(false);setads(false);sethomes(false);setcollabs(true)}}className="hib">SHOW COLLAB PAGE SETTINGS</h3>
                { collabsettings &&<div className="set">
                    <div>
                    <form action="">
                    <label htmlFor="p2">videolink</label>
                    <input type="text" name='p2'required  onChange={(e)=>{
setcollab(e.target.value)

                    }}/>
                    <button type='submit' onClick={()=>{
firebase.database().ref('/vala/settings/collab/landingvideo').set(collab).then(()=>{
    alert('collaboration video changed successfully')
})



                    }}>upload</button>
                    </form>
                    </div>
                   
                    <div>
                        <h3>ADD NEW SLIDE</h3>
                        <Upload path="collab"/>
                  

                    </div>
                   
                </div>}
                <h3 onClick={()=>{setfilms(false);setads(true);sethomes(false);setcollabs(false)}}className="hib">SHOW AD PAGE SETTINGS</h3>
                {adsettings && <div className="set">
                    <div>
                    <form action="">
                    <label htmlFor="p2">videolink</label>
                    <input type="text" name='p2' required  onChange={(e)=>{
setad(e.target.value)

                    }}/>
                    <button type='submit'onClick={()=>{
firebase.database().ref('/vala/settings/ads/landingvideo').set(ad).then(()=>{
    alert('ads video changed successfully')
})



                    }}>upload</button>
                    </form>
                    </div>
                   
                    <div>
                        <h3>ADD NEW SLIDE</h3>
                        <Upload path="ad"/>
                  

                    </div>
                   
                </div>}
            </div>
        </div>
    )
}
