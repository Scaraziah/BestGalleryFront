import React, { useEffect, useState } from 'react';
import { useNavigate  } from "react-router-dom"
import axios from 'axios';
import "./profile.css"

function EditProfile(props) {
    const navigate = useNavigate();
    const [name, setName] = useState(props.user.name);
    const [user, setUser] = useState([])
    const [proPic, setProPic] = useState ("");
    const [text, setText] = useState("");
    const [userId, setUserId] = useState()
    const [bio, setBio] = useState([])

    useEffect(() => {
        setUser(props.user)
      },[props]);

    useEffect(() => {
    const name = user? user.name: "";
    axios
        .get(`http://localhost:5000/api/bio/${name}`)
        .then((response) => {
        setBio(response.data);
        console.log(response.data);
        });
    }, [user]);

    useEffect(() => {
        setProPic(bio.proPic)
        setText(bio.text)
        setUserId(bio._id)
      },[props]);


    const handleProLink = (event) => {
        setProPic(event.target.value);
    };

      const handleProInfo = (event) => {
          setText(event.target.value);
      };
  
      const handleSubmit = async(event)=>{
          event.preventDefault();
          const newBio={
            proPic: proPic,  
            text: text
             }
             console.log("Bio", bio)
             await axios.put(`http://localhost:5000/api/bio/${bio[0]._id}`, newBio)
             navigate(`/profile`)
          };   
   
      return (
          <body className = "profileBody">
            <div>
                <form onSubmit ={handleSubmit}>
                    <div className= " row form-group">
                        <div className = "col profileMargin profileDiv">
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <input type="proPic" placeholder="Update Pic" onChange={handleProLink} />
                            <br></br>
                            <input type="text" placeholder="Update Your Bio" onChange={handleProInfo} />
                            <br></br>
                            <button variant="primary" type="submit">Update Profile</button>
                            <br></br> 
                            <br/>
                            <br/>
                            <br/> 
                        </div>
                    </div>
                </form>
            </div>
          </body>  
    );
}

export default EditProfile;