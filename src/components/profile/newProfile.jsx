import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom"
import axios from 'axios';

function NewProfile(props) {
    const navigate = useNavigate();
    const [name, setName] = useState(props.user.name)
    const [lat, setLat] = useState ();
    const [lng, setLng] = useState ();
    const [text, setText] = useState('');
    const [picLink, setPicLink] = useState('');
  
    const handleLat = (event) => {
        setLat(event.target.value);
    };
    
    const handleLng = (event) => {
        setLng(event.target.value);
    };

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handlePic = (event) => {
        setPicLink(event.target.value);
    };
  
      const handleSubmit = async(event)=>{
          event.preventDefault();
          const post={
            name:  name,
            picLink: picLink,
            lat: lat,
            lng: lng, 
            text: text
             }
             console.log(post)
             await axios.post(`http://localhost:5000/api/post/`, post)
             navigate(`/profile`)
          };  
  
        
  
      return (
          <div>
            <form onSubmit ={handleSubmit}>
                <div className= " row form-group">
                    <div className = "col">
                      <input type="lat" placeholder="Latitude " onChange={handleLat} />
                      <br></br>
                      <input type="lng" placeholder="Longitude " onChange={handleLng} />
                      <br></br>
                      <input type="text" placeholder="About your adventure!" onChange={handleText} />
                      <br></br>
                      <input type="picLink" placeholder="Link to Picture" onChange={handlePic} />
                      <br></br>
                      <button variant="primary" type="submit">Add Trip!</button>
                      <br></br>  
                    </div>
                  </div>
              </form>
          </div>
      
    );
}


export default NewProfile;