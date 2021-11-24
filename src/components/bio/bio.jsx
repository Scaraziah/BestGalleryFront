import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
// import ProfilePic from './profilepic/profilePic';
import NewProfile from '../profile/newProfile';


function Bio(props) {
  const [user, setUser] = useState (null);
  const [bio, setBio] = useState([]);
//   const jwt = localStorage.getItem("token");

  console.log(props.user);

  useEffect(() => {
    setUser(props.user)
  },[props]);

  useEffect(() => {
    const name = user? user.name: "";
    axios
      .get(`http://localhost:5000/api/bio/${name}`)
      .then((response) => {
        setBio(response.data);
        console.log(response.data);
      });
  }, [user]);

  const handleClick = (id) => {
    axios.delete(`http://localhost:5000/api/bio/${id}`)
  };

  const userName = user? user.name: "user";

  return (
    <Card style={{ width: "18rem" }}>
      {/* <ProfilePic /> */}
      <Card.Body>
        {/*********** PROFILE NAME LOGIC GOES HERE ***********/}
        <Card.Title>{userName}</Card.Title>
        <p>Bio:</p>
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
                        onClick={() => handleClick(bio._id)}
                      >
                        Delete Bio
                      </Button>
                      <hr></hr>
                    </li>
                  );
                })}
            </ul>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Bio;
