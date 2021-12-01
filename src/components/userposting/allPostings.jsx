import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GoogleMaps from '../googlemaps/GoogleMaps';
import CreateReply from '../reply/reply'; 
import "./posting.css";

const  AllPostings = (props) => {
const [posts, setPost] = useState([]);
const [user, setUser] = useState(null);
const [optionValue, setOptionValue] = useState("");

const handleSelect = (e) => {
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
    })
},[user])
 
const filterPost = () => {
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
        <body className="postBody">   
            <div>  
                <div>
                    <div>
                        <div>
                            <h5>Types of Adventure</h5>
                            <select value={optionValue} onChange={handleSelect}>
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
                                    <div className="container postText">
                                        <li key={post._id}>
                                            <div className="row">
                                                <div className="col">
                                                    {post.name}
                                                    <br></br>
                                                    {post.huntType}
                                                    <br></br>
                                                </div>
                                                <div className="col">    
                                                    {post.text}
                                                    <br></br>
                                                </div>
                                            </div>
                                        </li>
                                            <div className="row">
                                                <div className="col">                                   
                                                {post.prisePic.map((pic) => {
                                                    return(
                                                        <li key={pic}>
                                                            <img style={{height:'auto',width:'50%'}} src = {pic} alt="" />
                                                        </li>
                                                    )
                                                })}
                                                </div>
                                                <div className="col">                                     
                                                    <GoogleMaps post = {post} />
                                                    <br />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col"> 
                                                    Likes ({post.likes})
                                                    <br/>
                                                    Dislikes ({post.dislikes})
                                                </div>
                                                <div className="col">
                                                    <button type= "like" onClick= {() => handleLikeClick(post._id)}>Like Post</button>
                                                    <button type= "dislike" onClick= {() => handleDislikeClick(post._id)}>Dislike Post</button>
                                                    <br/>
                                                    <CreateReply post = {post} />
                                                </div>
                                                <div className="row">  
                                                    {post.replies && post.replies.map((reply) =>{
                                                        return(
                                                            <li key={reply._id}>
                                                                {reply.text}
                                                                <hr/>
                                                            </li>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        <hr />
                                    </div>
                                    )
                                })
                            }
                        </ul>
                    </div>           
                </div>
            </div>
        </body>   
    );
}

export default AllPostings;