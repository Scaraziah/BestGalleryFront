import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
// import ProfilePic from './profilepic/profilePic';
import CreateBio from './newBio';


function Bio(props) {
    const [user] = useState (props.user);
  const [bio, setBio] = useState([]);
//   const jwt = localStorage.getItem("token");

  console.log(props.user);

  useEffect(() => {
    console.log(props.user.name);
    axios
      .get(`http://localhost:5000/api/bio/${props.user.name}`)
      .then((response) => {
        setBio(response.data);
        console.log(response.data);
      });
  }, [props.user]);

  const handleClick = (id) => {
    axios.delete(`http://localhost:5000/api/bio/${id}`)
  };

  return (
    <Card style={{ width: "18rem" }}>
      {/* <ProfilePic /> */}
      <Card.Body>
        {/*********** PROFILE NAME LOGIC GOES HERE ***********/}
        <Card.Title>Profile Name</Card.Title>
        <Card.Title>Bio:</Card.Title>
        {/*********** BIO LOGIC GOES HERE ***********/}
        <Card.Text>
          <div>
            <ul>
              {bio &&
                bio.map((bio) => {
                  return (
                    <li key={bio.id}>
                      {bio.text}
                      <br></br>
                      <Button
                        variant="danger"
                        type="delete"
                        onClick={() => handleClick(bio.id)}
                      >
                        Delete Bio
                      </Button>
                      <hr></hr>
                    </li>
                  );
                })}
            </ul>
            <CreateBio user = {user}/>
          </div>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Age:</ListGroupItem>
        <ListGroupItem>City:</ListGroupItem>
        {/*********** LOG OUT LOGIC GOES HERE ***********/}
        <Button onClick={handleClick}>Log Out</Button>
      </ListGroup>
    </Card>
  );
}

export default Bio;
