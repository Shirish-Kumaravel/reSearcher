import React from 'react';
import {useState} from "react";
import Axios from "axios";
import './SEA.css';


function RegStud() {
    const [studID,setStudID]= useState(0);
    const [projID,setProjID]= useState(0);
    const [date,setDate]=useState("");

    const regStudent = () => {
        Axios.post("http://localhost:3001/regstudent",{studID: studID, projID: projID,date: date}).then(()=>{
         console.log("Registered Student Successfully");
         alert("Registered Student");
        })
    
      };

    return(
        <div>
            <h1>Enter the details of the Student and Project</h1> 
            <div className="App">
    <div className="Info">
  <label>Student ID:</label>
  <input type="number" onChange={(event)=>{
    setStudID(event.target.value);
  }}/>
  <label>Project ID:</label>
  <input type="number" onChange={(event)=>{
    setProjID(event.target.value);
  }}/>
  <label>Joining Date:</label>
  <input type="date" onChange={(event)=>{
    setDate(event.target.value);
  }}/>
  <button  onClick={regStudent}>Register Student</button>
  </div>
  </div>
        </div>
    );
};

export default RegStud;