import React, {useState} from "react";
import axios from "axios";
import "./login.css"
import { useNavigate } from "react-router-dom"


function LogIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
      
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const user={
            email: email,
            password: password
           }
           await axios.post(`http://localhost:5000/api/auth/`, user)
           .then(response => {
               localStorage.setItem('token', response.data);
               navigate('../profile', {replace: true});
           })
        };  

      

    return (
        <body className= "loginBody">
            <div>
                <form onSubmit ={handleSubmit}>
                    <div className= " row form-group">
                        <div className = "col loginMargin loginDiv">
                            <br/>
                            <h3 className=" col navTitleText"> Best of the Outdoors
                            <br />
                            The Outdoor Gallery
                            </h3>
                            <br/>
                            <input type="email" placeholder="Enter email" onChange={handleEmailChange} />
                            <br></br>
                            <input type="password" placeholder="Password" onChange={handlePasswordChange}/>
                            <br></br>
                            <button variant="primary" type="submit">LogIn</button>
                            <br></br>  
                        </div>
                    </div>
                </form>
            </div>
        </body>
    );
}

export default LogIn;