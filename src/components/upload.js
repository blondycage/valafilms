import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import { v4 as uuid } from 'uuid';
export default function UploadImage({path}) {
  const [imageUrl, setImageUrl] = useState([]);
  const [posterurl,setsposter]= useState("")
  const [slide,setslide]= useState()
  var slideobject={}
  const [caption,setcaption]=useState("")
  const [title,settitle]=useState("")
  const [trailerlink,settrailer]=useState("")
  const[supporting,setsupporting]=useState("")
  const readImages = async (e) => {
    const file = e.target.files[0];
    const id = uuid();
   
    const storageRef = firebase.storage().ref('images').child(id);
    const imageRef = firebase.database().ref('filmpage').child(id);
    await storageRef.put(file);
    storageRef.getDownloadURL().then((url) => {
      imageRef.set(url);
      const newState = [...imageUrl, { id, url }];
      setImageUrl(newState);
    });
  };
  const save =async () => {
   const si={supprtingimages:imageUrl}
  const id=uuid()
  const slideref = firebase.database().ref(path).child("slides").child(id);
   
    const slideobject=Object.assign({poster:posterurl,TITLE:title,CAPTION:caption,vidlink:trailerlink},si)
    
    
     await slideref.set(slideobject);
     alert('done')
  
  };
  const readposter = async (e) => {
    const file = e.target.files[0];
    const id = uuid();
    const storageRef = firebase.storage().ref('poster').child(id);
    const imageRef = firebase.database().ref('poster').child(id);
    await storageRef.put(file);
    storageRef.getDownloadURL().then((url) => {
      setsposter(url)
     
    });
  };

  
  const deleteImage = (id) => {
    
    const imageRef =     firebase.database().ref('filmpage').child(id);
    
      imageRef.remove();
      console.log(imageUrl)
    
       const newstate=imageUrl.filter(person => person.id != id);
       console.log(newstate)
     //  if(index!=-1)
       setImageUrl(newstate)
    

  }
  
  return (
    <div>
        <div style={{display:"flex",flexDirection:'column'}}><h1>Upload poster</h1>
        <input type="file" accept="image/*" onChange={readposter} />
        
        </div>
        <br/>
        <label htmlFor="title">TITLE</label><br/>
<input type="text" name='title' placeholder='enter title' onChange={(e)=>{
settitle(e.target.value)
}}/> <br/>
<label htmlFor="title">Trailer/video</label><br/>
<input type="text" name='title' placeholder='enter youtube embed id' onChange={(e)=>{
settrailer(e.target.value)
}}/> <br/>
<label htmlFor="desc">DESCRIPTION</label> <br/>
<textarea name="desc" id="" cols="30" rows="10" onChange={(e)=>{
setcaption(e.target.value)
}}></textarea> <br/>
      <h1>Upload images (one by one)</h1>
      <input type="file" accept="image/*" onChange={readImages} />
      {imageUrl
        ? imageUrl.map(({ id, url }) => {
            return (
              <div key={id}>
                <img style={{maxWidth:"50px"}} src={url} alt="" />
               
                <button onClick={() => deleteImage(id)}>Delete</button>
              </div>
            );
          })
        : ''}
        
        {
       
        console.log(slideobject)
        }
        <button onClick={()=>{save()}}>Save slide</button>
    </div>
  );
}