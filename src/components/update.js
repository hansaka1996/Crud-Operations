import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Update() {
const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ checkbox, setCheckbox] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
     setID(localStorage.getItem('ID'))
     setFirstName(localStorage.getItem('First Name'));
     setLastName(localStorage.getItem('Last Name'));
     setCheckbox(localStorage.getItem("Checkbox Value") === "true");
}, []);

  const updateAPIData = () =>{
     axios.put(`https://65a7777694c2c5762da6b85c.mockapi.io/fakedata/${id}`,{
          firstName,
          lastName,
          checkbox
     }).then(() =>{
          navigate('/read')
     })
  }



  return (
    <div>
     <div class="ui inverted secondary menu">
          <Link to="/">
            <a class="item ">
              <i class="home icon"></i> Create
            </a>
          </Link>
          <Link to="/read">
            <a class="item ">
              <i class="mail icon"></i> Read
            </a>
          </Link>
        </div>
      <div><h2>Update page</h2></div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
        </Form.Field>
        <Button type='submit' onClick={updateAPIData}>Update</Button>
      </Form>
    </div>
  );
}
