import React, {useEffect, useState} from "react";
import {
    Navigate
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import UserPostings from "../userposting/userPosting";
import Bio from "../bio/bio"

const Profile = (props) => {
    const [user, setUser] = useState ();
    const [like, setLike] = useState()

    useEffect(() => {
        setUser(props.user)
    },[props]
    )

    return (
        
        <div>
            <Container>
            <Row>
                <Col><Bio user = {user}/></Col>
                <Col xs= {6} md= {8}><UserPostings user = {user} /></Col>
                <Col></Col>
    
            </Row>
            </Container>
            
        </div>
    );
}

export default Profile;