import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
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

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
const myFilter = filterPost();

    return(
        <body className="allPostBody">   
            <div>  
                <div>
                    <div>
                        <div>
                            <h5 className="myPostTitle">Types of Adventure</h5>
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
                                                    User: {post.name}
                                                    <br></br>
                                                    Adventure Type: {post.huntType}
                                                    <br></br>
                                                </div>
                                                <div className="col">    
                                                    About: {post.text}
                                                    <br></br>
                                                    Date of Post: {formatDate(post.timeStamp)}
                                                </div>
                                            </div>
                                        </li>
                                            <div className="row">
                                                <div className="col">                                   
                                                {post.prisePic.map((pic) => {
                                                    return(
                                                        <Link to= {`/photoGallery/${post._id}`}>
                                                        <li key={pic}>
                                                            <img style={{height:'auto',width:'50%'}} src = {pic} alt="" />
                                                        </li>
                                                        </Link>
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
                                                                <hr className="halfBr"/>
                                                            </li>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        <hr className="lineColor" />
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