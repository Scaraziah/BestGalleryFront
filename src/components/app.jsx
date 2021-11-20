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
          {user && <div>Welcome {user.name}</div>}
        
            <Routes>
              {/* <Route path="/profile" 
              render = {() => {
                if(user){
                  return <Navigate to = "/test" replace={true} />;
                }else {
                  return <Navigate to = "/login" replace={true} />;
                }
              }}
              /> */}
                <Route path="/" element = { <LogIn />} />
                <Route path = "/signup" element = { <SignUp />} /> 
                <Route path = "/login" element = {<LogIn />} /> 
                <Route path = "/test" element = {<Profile user ={user}/>} />
            </Routes>
        
    </div>
  );
}

export default App;
