import React, { useEffect, useState } from 'react';
import {
    Link,
    useNavigate,
    useParams
} from "react-router-dom";
import axios from 'axios';
import "./photoGallery.css"

const  PhotoGallery = (props) => {
    const getId = useParams();
    const navigate = useNavigate();
    const [posts, setPost] = useState([]);
    const myPost = posts

    console.log("Photo", getId)
    console.log("Posts", posts)

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/post/editPost/${getId.id}`)
            .then((response) => {
            setPost([response.data]);
            });
        }, [getId]);

    return(
        <body className="photoBody">
            <div className= "postText">                
                {myPost && myPost.map((post) => {
                    return(
                        <div className="container">                               
                            <div className="row">
                                <div className="col">
                                    Hunters Name:
                                    <br/>
                                    {post.name}
                                </div>
                            </div>
                            <hr />                          
                            <div className="container">
                                <div className="row">
                                    <div className="col1-2-3">                                                       
                                        {post.prisePic.map((pic) => {
                                            return(                                                        
                                                <img className="thumbnail" src = {pic} alt=""/>                                                                                                              
                                                );
                                            })}                               
                                    </div>                                       
                                </div>
                            </div>                           
                        </div>
                    );
                })} 
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div> 
        </body>          
    );
}

export default PhotoGallery;