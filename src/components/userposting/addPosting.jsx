import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom"
import axios from 'axios';

function AddPost(props) {
    
const navigate = useNavigate();
    const [name, setName] = useState(props.user.name)
    const [lat, setLat] = useState ();
    const [lng, setLng] = useState ();
    const [text, setText] = useState('');
    const [prisePic, setPrisePic] = useState([]);
  
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
        setPrisePic([...prisePic, event.target.value]);
    };
  
      const handleSubmit = async(event)=>{
          event.preventDefault();
          const newPost={
            name:  name,
            prisePic: prisePic,
            lat: lat,
            lng: lng, 
            text: text
             }
             console.log(newPost)
             await axios.post(`http://localhost:5000/api/post/`, newPost)
             .then(response => console(response.data))
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
                      <input type="prisePic" placeholder="Link to First Picture" onChange={handlePic} />
                      <br></br>
                      <button variant="primary" type="submit">Add Trip!</button>
                      <br></br>  
                    </div>
                  </div>
              </form>
          </div>
      
    );
}


export default AddPost;