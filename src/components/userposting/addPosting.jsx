import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom"
import axios from 'axios';

function AddPost() {
    const navigate = useNavigate();
    const [name, setName] = useState(props.user.name)
    const [proPic, setProPic] = useState ('');
    const [text, setText] = useState('');
  
    const handleProLink = (event) => {
        setProPic(event.target.value);
    };

      const handleProInfo = (event) => {
          setText(event.target.value);
      };
  
      const handleSubmit = async(event)=>{
          event.preventDefault();
          const bio={
            name:  name,
            proPic: proPic,  
            text: text
             }
             console.log(bio)
             await axios.post(`http://localhost:5000/api/bio/`, bio)
             navigate(`/profile`)
          };  
  
        
  
      return (
          <div>
            <form onSubmit ={handleSubmit}>
                <div className= " row form-group">
                    <div className = "col">
                      <input type="proPic" placeholder="Pic Link" onChange={handleProLink} />
                      <br></br>
                      <input type="text" placeholder="About You" onChange={handleProInfo} />
                      <br></br>
                      <button variant="primary" type="submit">Update Profile</button>
                      <br></br>  
                    </div>
                  </div>
              </form>
          </div>
      
    );
}


export default AddPost;