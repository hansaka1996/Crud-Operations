import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://65a7777694c2c5762da6b85c.mockapi.io/fakedata`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);
  
  const setData = (data) => {
     let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };



  return (
    <div>
     <div class="ui inverted secondary menu">
          <Link to="/">
            <a class="item ">
              <i class="home icon"></i> Create
            </a>
          </Link>
          <Link to="/read">
            <a class="item active">
              <i class="mail icon"></i> Read
            </a>
          </Link>
        </div>
      <div><h2>Read page</h2></div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checkbox Value</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.checkbox ? "Checked" : "Unchecked"}</Table.Cell>
                
                  <Table.Cell><Link to="/update"><Button color="green" onClick={() => setData(data)}>Update</Button></Link></Table.Cell>
                  
                
               
                  <Table.Cell> <Link 
                to="/delete"
                ><Button color="red" onClick={() => setData(data)}>Delete</Button>
                  </Link></Table.Cell>
                
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}