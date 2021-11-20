import React, {useState} from "react";
import {
    Navigate
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Bio from "../bio/bio";
import UserPostings from "../userposting/userPosting";
import ReactFirebaseFileUpload from "../profilepic/profilePic"

const Profile = (props) => {
    //const [user] = useState (props.user);
    // const [userId, setUserId] = useState (props.user.id);
    // const [like, setLike] = useState()

    return (
        
        <div>
            {/* <ReactFirebaseFileUpload /> */}
            {props.user && <div>Welcome to profile {props.user.name}</div>}
            {/* <Container>
            <Row>
                <Col><Bio user = {user}/></Col>
                <Col xs= {6} md= {8}><UserPostings user = {user} /></Col>
                <Col></Col>
    
            </Row>
            </Container> */}
            
        </div>
    );
}

export default Profile;