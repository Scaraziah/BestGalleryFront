import React, { useState } from 'react';
import axios from 'axios';

const CreateReply = (props) => {
    const [text, setText] = useState('');

     const handleChange = (event) => {
        setText(event.target.value);
       };
 
     const handleSubmit = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        console.log("ReplyID", props.post._id)
         const replies={
             text: text
            }
             axios.post(`http://localhost:5000/api/post/reply/${props.post._id}`, replies) 
            .then(res => console.log(res));
    }
 
     return (
         <div>
             <form onSubmit ={event => handleSubmit(event)}>
                <input style={{width: '100%', height: '40px', borderRadius: '5px'}} name="text" placeholder="Add a reply" onChange={handleChange} />
                <br/>
                <button type = "submit" className="btn btn-secondary btn-sm">Add Reply</button>
             </form>   
         </div>
     )
 }

export default CreateReply;