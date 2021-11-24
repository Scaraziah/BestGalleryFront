import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card, Button
} from 'react-bootstrap'
import GoogleMaps from '../googlemaps/GoogleMaps';


const  UserPostings = (props) => {
    const [posts, setPost] = useState([]);
    const jwt = localStorage.getItem('token');
    const [user, setUser] = useState(null);

    useEffect(() => {
        setUser(props.user)
      },[props]);
    
    useEffect(() =>{
        const name = user? user.name: "";
        axios.get(`http://localhost:5000/api/post/${name}`)
        .then(response => { 
            setPost(response.data);
            console.log(response.data);
        })
    },[user])


    const handleClick = id =>  {
        axios.delete(`http://localhost:5000/api/post/${id}`);
    }

    const userName = user? user.name: "user";

    return(
        <div>
            <div>
                <ul>
                    {posts && posts.map((post) => {
                        return(
                            <li key={post.id}>
                                {post.name}
                                <br></br>
                                {post.text}
                                <br></br>
                                    <ul>
                                        {post.prisePic.map((pic) => {
                                            return(
                                                <li key={pic.id}>
                                                    <img style={{height:'auto',width:'100%'}} src = {pic} />
                                                </li>
                                            )
                                        })}
                                    </ul>
                                <br></br>
                                <GoogleMaps post = {post} />
                                <br></br>
                                Likes {post.likes}
                                <br></br>
                                <button type= "delete" onClick= {() => handleClick(post._id)}>Delete Post</button>
                                <hr></hr>     
                            </li>
                        )
                    })}
                </ul>
            </div>           
        </div>
    );
}

export default UserPostings;