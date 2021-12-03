import React, { useEffect, useState } from 'react';
import {
    Routes,
    Route
} from "react-router-dom";
import LogIn from './login/logIn'
import SignUp from './signup/signUp';
import jwt_decode from "jwt-decode";
import Profile from './profile/profile';
import EditProfile from './profile/editProfile';
import NavBar from './navbar/navBar';
import NewProfile from './profile/newProfile';
import AddPost from './userposting/addPosting';
import AllPostings from './userposting/allPostings';
import EditPost from './userposting/editPost';

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
                <Route path="/" element = { <LogIn />} />
                <Route path = "/signup" element = { <SignUp />} /> 
                <Route path = "/login" element = {<LogIn />} /> 
                <Route path = "/profile" element = {<Profile user ={user}/>} />
                <Route path = "/newProfile" element = {<NewProfile user ={user}/>} />
                <Route path = "/editProfile" element = {<EditProfile user ={user}/>} />
                <Route path = "/addPost" element = {<AddPost user = {user}/>} />
                <Route path = "/allPostings" element = {<AllPostings user = {user}/>} />
                <Route path = "/editPost/:id" element = {<EditPost />} />
            </Routes>
        
    </div>
  );
}

export default App;
