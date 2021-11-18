import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Button, } from "react-bootstrap";
require("./navbar.css");

const NavBar = ({ user }) => {
    
  const handleClick = id =>  {
    const jwt = localStorage.removeItem('token')
    window.location.reload(false);
}

    return (
    <nav>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              scr="../images/deerBarn.png"
              width="150"
              // height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <div>
            {user && <h4 class = "text-primary" >Welcome {user.name}</h4>}
            <ul>
              {!user && (
                <React.Fragment>
                  <li>
                    <Link to="/login">
                      <Button variant="light">Login</Button>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup">
                      <Button variant="light">Sign Up</Button>{" "}
                    </Link>
                  </li>
                </React.Fragment>
              )}
              {user && (
                  <React.Fragment>
                  <li>
                    <Link to="/profile">
                      <Button variant="light">Profile</Button>{" "}
                    </Link>
                  </li>
                <li>
                  <Link to="/login">  
                  <Button variant="light" onClick = {handleClick}>Logout</Button>{" "}
                  </Link>
                </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </Container>
      </Navbar>
    </nav>
  );
};

export default NavBar;
