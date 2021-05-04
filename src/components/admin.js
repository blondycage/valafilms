import {React,useEffect,useState} from 'react'
import firebase from "./firebase"
import Upload from "./upload"
export default function admin() {

    const HOMEPAGE_VID_URL=firebase.database().ref()
    return (
        <div>
            <h1 style={{color:"white",textAlign:"center"}}>welcome admin</h1>
            <div className="adcon">
                <h3>HOMEPAGE SETTINGS</h3>
                <div className="set">
                    <form action="">
                    <label htmlFor="p1">videolink</label>
                    <input type="text" name='p1'/>
                    <button>upload</button>
                    </form>
                   
                </div>
                <h3>FILM PAGE SETTINGS</h3>
                <div className="set">
                    <div>
                    <form action="">
                    <label htmlFor="p2">videolink</label>
                    <input type="text" name='p2'/>
                    <button>upload</button>
                    </form>
                    </div>
                   
                    <div>
                        <h3>ADD NEW SLIDE</h3>
                        <Upload path="filmpages"/>
                  

                    </div>
                   
                </div>
                <h3>COLLAB PAGE SETTINGS</h3>
                <div className="set">
                    <div>
                    <form action="">
                    <label htmlFor="p2">videolink</label>
                    <input type="text" name='p2'/>
                    <button>upload</button>
                    </form>
                    </div>
                   
                    <div>
                        <h3>ADD NEW SLIDE</h3>
                        <Upload path="collabpages"/>
                  

                    </div>
                   
                </div>
                <h3>AD PAGE SETTINGS</h3>
                <div className="set">
                    <div>
                    <form action="">
                    <label htmlFor="p2">videolink</label>
                    <input type="text" name='p2'/>
                    <button>upload</button>
                    </form>
                    </div>
                   
                    <div>
                        <h3>ADD NEW SLIDE</h3>
                        <Upload path="adpages"/>
                  

                    </div>
                   
                </div>
            </div>
        </div>
    )
}
