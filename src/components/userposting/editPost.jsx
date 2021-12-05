import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios';
import "./posting.css"

function EditPost(props) {
    const navigate = useNavigate();
    const getId = useParams();
    const [lat, setLat] = useState ();
    const [lng, setLng] = useState ();
    const [text, setText] = useState('');
    const [post, setPost] = useState();
  
    useEffect(() => {
        setPost(props.post)
      },[props]);  

    const handleLat = (event) => {
        setLat(event.target.value);
    };
    
    const handleLng = (event) => {
        setLng(event.target.value);
    };

    const handleText = (event) => {
        setText(event.target.value);
    };

    useEffect(() => {
    axios
        .get(`http://localhost:5000/api/post/editPost/${getId.id}`)
        .then((response) => {
        setPost(response.data);
        console.log("Res", response.data);
        });
    }, [getId]);
  
    const handleSubmit = async(event)=>{
        event.preventDefault();
        const newPost={
        lat: lat,
        lng: lng,  
        text: text
            }
            console.log("Post", post)
            await axios.put(`http://localhost:5000/api/post/${post._id}`, newPost)
            navigate(`/profile`)
        };   
   
      return (
        <body className="postBody">
        <div>
            <form onSubmit ={handleSubmit}>
                <div className= " row form-group">
                    <div className = "col postMargin postDiv">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <input type="lat" placeholder="Latitude " onChange={handleLat} />
                        <br></br>
                        <input type="lng" placeholder="Longitude " onChange={handleLng} />
                        <br></br>
                        <input type="text" placeholder="About your adventure!" onChange={handleText} />
                        <br></br>
                        <button variant="primary" type="submit">Update Post</button>
                    </div>
                </div>
            </form>
        </div>
    </body>     
);
}

export default EditPost;