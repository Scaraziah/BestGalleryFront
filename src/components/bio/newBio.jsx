import React, { useState } from 'react';
import axios from 'axios';

const CreateBio = (props) => {
    const [text, setText] = useState('');
 
     const handleChange = (event) => {
         setText(event.target.value);
       };
 
     const handleSubmit =(event)=>{
         event.preventDefault();
         const newBio={
             text: text,
             videoId: props.videoId
         }
     
         addNewBio(newBio);
     }
 
     const addNewBio = (newBio) => {
         axios.post('http://localhost:5000/api/bio/', newBio)   
       }
 
     return (
         <div className="comment">
             <h2>Add Bio</h2>
             <form onSubmit ={handleSubmit}>
                <input style={{width: '40%', height: '100px', borderRadius: '5px'}}name="text" placeholder="Say something..."onChange={handleChange}></input>
                <button type = "submit" className="btn btn-dark"> Add Bio</button>
             </form>  
         </div>
     )
 }

export default CreateBio