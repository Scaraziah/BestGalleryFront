import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import GoogleMaps from '../googlemaps/GoogleMaps';
import "./posting.css"

const  UserPostings = (props) => {
    const [posts, setPost] = useState([]);
    const [user, setUser] = useState(null);
    const [url, setUrl] = useState();

    useEffect(() => {
        setUser(props.user)
      },[props]);
    
    useEffect(() =>{
        const name = user? user.name: "";
        axios.get(`http://localhost:5000/api/post/name/${name}`)
        .then(response => { 
            setPost(response.data);
            console.log("Res",response.data);
        })
    },[user])

    const handlePic = (event) => {
        console.log(event.target.value)
        setUrl(event.target.value);
    }; 
    
    const handleClick = id =>  {
        axios.delete(`http://localhost:5000/api/post/${id}`);
    }

    const handleClickPic = id =>  {
        const newUrl = {url: url}
        axios.put(`http://localhost:5000/api/post/prisePic/${id}`, newUrl);
    }

    return(
        <div>
            <div>
                <ul>
                    {posts && posts.map((post) => {
                        return(
                            <div className="container">
                                <li key={post._id}>
                                    <div className="row">
                                        <div className="col myPostText">
                                            Type:
                                            <br/>
                                            {post.huntType}
                                        </div>
                                        <div className="col myPostText">
                                            Adventure:
                                            <br/>
                                            {post.text}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col">
                                            <ul>
                                                {post.prisePic.map((pic) => {
                                                    return(
                                                        <Link to= {`/photoGallery/${post._id}`}>
                                                        <li key={pic._id}>
                                                            <img style={{height:'auto',width:'50%'}} src = {pic} alt=""/>
                                                        </li>
                                                        </Link>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div class="col">
                                            <GoogleMaps post = {post} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col myPostText">
                                            Likes ({post.likes})
                                            <br />
                                            Disikes ({post.dislikes})
                                            <br />
                                            <input className= "postRightMar" type="url" placeholder="Add anouther pic." onChange={(event) => handlePic(event)} />
                                            <br />
                                            <button className= "btn btn-secondary btn-sm postRightMar" type= "update" onClick= {() => handleClickPic(post._id)}>Add Pic</button>
                                        <button className= "btn btn-secondary btn-sm postRightMar" type= "delete" onClick= {() => handleClick(post._id)}>Delete Post</button>
                                        <br />
                                        <Link to= {`/editPost/${post._id}`}>
                                            <button className= "btn btn-secondary btn-sm postRightMar">Edit Post</button>
                                        </Link>
                                        </div>                                 
                                    <hr></hr>
                                    </div> 
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </div>           
        </div>
    );
}

export default UserPostings;