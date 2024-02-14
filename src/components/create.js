import axios from 'axios';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


export default function Create () {
     let navigate = useNavigate();
     const [firstName, setFirstName] = useState('');
     const [lastName, setLastName] = useState('');
     const [checkbox, setCheckbox] = useState(false);


     const postData = () => {
          axios.post(`https://65a7777694c2c5762da6b85c.mockapi.io/fakedata`,{
               firstName,
               lastName,
               checkbox

          }).then(() => {
               navigate('/read')
          })
     }
     
return(
     <div>
       
       <div class="ui inverted secondary menu">
          <Link to="/">
            <a class="item active">
              <i class="home icon"></i> Create
            </a>
          </Link>
          <Link to="/read">
            <a class="item">
              <i class="mail icon"></i> Read
            </a>
          </Link>
        </div>
          <div><h2>Create new record</h2></div>
     <Form className="create-form">
     <Form.Field>
         <label>First Name</label>
         <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
     </Form.Field>
     <Form.Field>
         <label>Last Name</label>
         <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
     </Form.Field>
     <Form.Field>
         <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)} />
     </Form.Field>
     <Button onClick={postData} type='submit'>Submit</Button>
 </Form>
 </div>
);
}

