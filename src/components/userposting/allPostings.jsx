import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card, Button
} from 'react-bootstrap'
import GoogleMaps from '../googlemaps/GoogleMaps';


const  AllPostings = (props) => {
const [posts, setPost] = useState([]);
const jwt = localStorage.getItem('token');
const [user, setUser] = useState(null);
const [optionValue, setOptionValue] = useState("");

const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
};

const handleLikeClick = id =>  {
    axios.put(`http://localhost:5000/api/post/likes/${id}`);
    posts.like++
}

const handleDislikeClick = id =>  {
    axios.put(`http://localhost:5000/api/post/dislikes/${id}`);
    posts.dislike++
}

useEffect(() => {
    setUser(props.user)
    },[props]);

useEffect(() =>{
    axios.get(`http://localhost:5000/api/post/`)
    .then(response => { 
        setPost(response.data);
        console.log(response.data);
    })
},[user])
 
const filterPost = () => {
    console.log("Option Value",optionValue)
    let newFilterPost;
    if(posts){
        if(optionValue){
            newFilterPost = posts.filter(post=>{
    return(
        post.huntType === optionValue
        )
    })
        }else newFilterPost = posts
    return newFilterPost;
    }
}

const myFilter = filterPost();

    return(
    <form>  
        <div>
            <div>
            <div>
                <h1>Types of Adventure</h1>
                <select value={setOptionValue} onChange={handleSelect}>
                    <option selected value="">Filter</option>
                    <option value="Big Game">Big Game</option>
                    <option value="Birds">Birds</option>
                    <option value="Fishing">Fishing</option>
                    <option value="Lodge">Lodge</option>
                </select>
                </div>
                <ul>
                    {posts && myFilter.map((post) => {
                        return(
                            <li key={post._id}>
                                {post.name}
                                <br></br>
                                {post.huntType}
                                <br></br>
                                {post.text}
                                <br></br>
                                    <ul>
                                        {post.prisePic.map((pic) => {
                                            return(
                                                <li key={pic._id}>
                                                    <img style={{height:'auto',width:'100%'}} src = {pic} />
                                                </li>
                                            )
                                        })}
                                    </ul>
                                <br></br>
                                <GoogleMaps post = {post} />
                                <br></br>
                                Likes {post.likes}
                                <button type= "like" onClick= {() => handleLikeClick(post._id)}>Like Post</button>
                                <br/>
                                Dislikes {post.dislikes}
                                <button type= "dislike" onClick= {() => handleDislikeClick(post._id)}>Dislike Post</button>
                                <hr></hr>  
                                <br />
                            </li>
                        )
                    })}
                </ul>
            </div>           
        </div>
    </form>  
    );
}

export default AllPostings;