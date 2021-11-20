import React, { useState } from 'react';
import { useNavigate  } from "react-router-dom"
import axios from 'axios';

function SignUp() {
    const navigate = useNavigate();
    const [name, setName] = useState ('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');
  
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

      const handleEmailChange = (event) => {
          setEmail(event.target.value);
      };
        
      const handlePasswordChange = (event) => {
          setPassword(event.target.value);
      };
  
      const handleSubmit = async(event)=>{
          event.preventDefault();
          const user={
            name: name,  
            email: email,
            password: password
             }
             await axios.post(`http://localhost:5000/api/users/`, user)
             .then(response => localStorage.setItem('token', response.data))
             navigate(`/profile`)
          };  
  
        
  
      return (
          <div>
            <form onSubmit ={handleSubmit}>
                <div className= " row form-group">
                    <div className = "col">
                      <input type="name" placeholder="Enter User Name" onChange={handleNameChange} />
                      <br></br>
                      <input type="email" placeholder="Enter email" onChange={handleEmailChange} />
                      <br></br>
                      <input type="password" placeholder="Password" onChange={handlePasswordChange}/>
                      <br></br>
                      <button variant="primary" type="submit">Create User</button>
                      <br></br>  
                    </div>
                  </div>
              </form>
          </div>
      
    );
}


export default SignUp;