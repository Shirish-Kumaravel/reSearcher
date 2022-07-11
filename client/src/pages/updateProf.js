import React from 'react';
import {useState} from "react";
import Axios from "axios";
import './SEA.css';


function UpdateProf() {
    const [profID,setProfID]= useState(0);
    const [name,setName]= useState("");
    const [department,setDepartment]= useState("");
    const [field,setField]= useState("");
    const [phone,setPhone]= useState(0);
    const [chamber,setChamber]= useState("");
    const [website,setWebsite]= useState("");

    const updateProfessor = () => {
        Axios.post("http://localhost:3001/updateprofessor",{profID: profID, name: name, department: department,field: field,phone: phone,chamber: chamber,website: website}).then(()=>{
         console.log("Updated Professor Successfully");
         alert("Updated Professor");
        })
    
      };

    return(
        <div>
            <h1>Enter the new details of the Professor</h1> 
            <div className="App">
    <div className="Info">
  <label>ID:</label>
  <input type="number" onChange={(event)=>{
    setProfID(event.target.value);
  }}/>
  <label>Name:</label>
  <input type="text" onChange={(event)=>{
    setName(event.target.value);
  }}/>
  <label>Department:</label>
  <input type="text" onChange={(event)=>{
    setDepartment(event.target.value);
  }}/>
  <label>Field:</label>
  <input type="text" onChange={(event)=>{
    setField(event.target.value);
  }}/>
  <label>Phone:</label>
  <input type="text" onChange={(event)=>{
    setPhone(event.target.value);
  }}/>
  <label>Chamber:</label>
  <input type="text" onChange={(event)=>{
    setChamber(event.target.value);
  }}/>
  <label>Website:</label>
  <input type="text" onChange={(event)=>{
    setWebsite(event.target.value);
  }}/>
  <button  onClick={updateProfessor}>Update Professor</button>
  </div>
  </div>
        </div>
    );
};

export default UpdateProf;