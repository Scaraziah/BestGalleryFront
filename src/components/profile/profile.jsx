import React, {useEffect, useState} from "react";
import {
    Link
} from "react-router-dom";
import UserPostings from "../userposting/userPosting";
import Bio from "../bio/bio"
import "./profile.css"
import mix from '../images/mix.png'

const Profile = (props) => {
    const [user, setUser] = useState ();

    useEffect(() => {
        setUser(props.user)
    },[props]
    )

    return (
        <body className = "profileBody">
            <div>
                <div className= "row">
                    <div className= "col center">
                            <Link to="/newProfile">
                            <button className= "right btn btn-secondary btn-lg btn-block center">Create New Profile</button>{" "}
                            </Link>
                    </div>
                    <div className= "col center">
                            <Link to="/addPost">
                            <button className= "center btn btn-secondary btn-lg btn-block">Create A New Post</button>{" "}
                            </Link>
                    </div>
                </div>
                <hr />
                <div class="container">
                    <div class="row">
                        <div class="col">                    
                            <Bio user = {user}/>
                        </div>
                        <div class="col"> 
                            <img style={{height:'auto',width:'100%'}} src = {mix} alt= "" />
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col"> 
                        <UserPostings user = {user} />
                        </div>            
                    </div>
                </div>               
            </div>
        </body>
    );
}

export default Profile;