import React, { useEffect, useState } from 'react';
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import LandingScreen from './landingScreen';
import LogIn from './login/logIn'
import SignUp from './signup/signUp';
import jwt_decode from "jwt-decode";
import Profile from './profile/profile';
import NavBar from './navbar/navBar';

function App() {
    const [user, setUser] = useState()
        const jwt = localStorage.getItem('token');
            useEffect(() => {
                try{

                    const user = jwt_decode(jwt);
                    setUser(user)
                    console.log(user.name)
                }catch{
            }
        },[jwt])

  return (
    <div>
          <NavBar user ={user} />
        
            <Routes>
              <Route path="/profile" 
              render = {(props) => {
                if(!user){
                  return <Navigate to = "/login" replace={true} />;
                }else {
                  return<Profile {...props} user ={user} />
                }
              }}
              />
                <Route path="/" element = { <LandingScreen />} />
                <Route path = "/signup" element = { <SignUp />} /> 
                <Route path = "/login" element = {<LogIn />} /> 
            </Routes>
        
    </div>
  );
}

export default App;
