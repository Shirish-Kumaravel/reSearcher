import React from 'react';
import {useState} from "react";
import Axios from "axios";
import './AD.css';


function UpdateProj() {
    const [projID,setProjID]= useState(0);
    const [name,setName]= useState("");
    const [description,setDescription]= useState("");
    const [start_date,setStartDate]= useState("");
    const [end_date,setEndDate]= useState("");
    const [funding,setFunding]= useState(0);

    const updateProject = () => {
        Axios.post("http://localhost:3001/updateproject",{projID: projID, name: name, description: description,start_date: start_date,end_date: end_date,funding: funding}).then(()=>{
         console.log("Updated Project Successfully");
         alert("Updated Project");
        })
    
      };

    return(
        <div>
            <h1>Enter the new details of the Project</h1> 
            <div className="App">
    <div className="Info">
  <label>ID:</label>
  <input type="number" onChange={(event)=>{
    setProjID(event.target.value);
  }}/>
  <label>Name:</label>
  <input type="text" onChange={(event)=>{
    setName(event.target.value);
  }}/>
  <label>Description:</label>
  <input type="text" onChange={(event)=>{
    setDescription(event.target.value);
  }}/>
  <label>Start Date:</label>
  <input type="date" onChange={(event)=>{
    setStartDate(event.target.value);
  }}/>
  <label>End Date:</label>
  <input type="date" onChange={(event)=>{
    setEndDate(event.target.value);
  }}/>
  <label>Funding:</label>
  <input type="number" onChange={(event)=>{
    setFunding(event.target.value);
  }}/>
  <button  onClick={updateProject}>Update Project</button>
  </div>
  </div>
        </div>
    );
};

export default UpdateProj;