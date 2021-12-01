import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from "react-bootstrap";
import "./bio.css"


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
      <Card className= "bioBody" style={{ width: "15rem" }}>
        <Card.Body className= "bioBody">
          <Card.Title>{userName}</Card.Title>
          <Card.Text >
            <div>
              <ul>
                {bio &&
                  bio.map((bio) => {
                    return (
                      <li key={bio.id}>
                        <div className= "bioText">
                        <img className="bioImg" style={{height:'30%',width:'55%'}} src = {bio.proPic} alt= "" />
                        {bio.text}
                        </div>
                        <br></br>
                        <button type= "delete" class="btn btn-secondary btn-sm" onClick= {() => handleClick(bio._id)}>Delete Bio</button>
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
