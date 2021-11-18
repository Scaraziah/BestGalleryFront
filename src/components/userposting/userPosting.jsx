import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card, Button
} from 'react-bootstrap'


const  UserPostings = (props) => {
    const [posts, setPost] = useState([]);
    const jwt = localStorage.getItem('token');

    console.log(props.user)

    useEffect(() =>{
        console.log(props.user.name);
        axios.get(`http://localhost:5000/api/post/${props.user.name}`)
        .then(response => { 
            setPost(response.data);
            console.log(response.data);
        })
    },[props.user])


    const handleClick = id =>  {
        axios.delete(`http://localhost:5000/api/post/${id}`);
    }

    return(
        <Card>
    {/******* LOGIC FOR THE USER WHO MADE POST ******/}
        <Card.Header as="h5">User Name</Card.Header>
        <Card.Body>
    {/****** LOGIC FOR USERS POST ******/}
            <Card.Title>Post Subject</Card.Title>
            <Card.Text>
                <div>
                    <ul>
                        {posts && posts.map((post) => {
                            return(
                                <li key={post.id}>
                                    {post.name}
                                    <br></br>
                                    {post.text}
                                    <br></br>
                                    Likes {post.likes}
                                    <br></br>
                                    <Button variant="danger" type= "delete" onClick={() => handleClick(post.id)}>Delete Post</Button>
                                    <hr></hr>     
                                </li>
                            )
                        })}
                    </ul>
                </div>
           </Card.Text>
            
        </Card.Body>
        </Card>
    );
}

export default UserPostings;