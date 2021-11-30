import React, {useEffect, useState} from "react";
import {
    Link
} from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import UserPostings from "../userposting/userPosting";
import Bio from "../bio/bio"
import "./profile.css"

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
                            <Button className= "right btn btn-secondary btn-lg btn-block center">Create New Profile</Button>{" "}
                            </Link>
                    </div>
                    <div className= "col center">
                            <Link to="/addPost">
                            <Button className= "center btn btn-secondary btn-lg btn-block">Create A New Post</Button>{" "}
                            </Link>
                    </div>
                </div>
                <Container>
                    <Row>
                    
                        <Col><Bio user = {user}/></Col>
                    
                        <Col xs= {6} md= {8}><UserPostings user = {user} /></Col>
                    
            
                    </Row>
                </Container>
                
            </div>
        </body>
    );
}

export default Profile;