import React from 'react';
import {useState} from "react";
import Axios from "axios";
import './SEA.css';


function DeleteStud() {
    const [studID,setStudID]= useState(0);
    const deleteStudent = () => {
        Axios.post("http://localhost:3001/deletestudent",{studID: studID}).then(()=>{
         console.log("Deleted Student Successfully");
         alert("Deleted Student");
        })
    
      };

    return(
        <div>
            <h1>Enter the ID of the Student</h1> 
            <div className="App">
    <div className="Info">
  <input type="number" onChange={(event)=>{
    setStudID(event.target.value);
  }}/>
  
  <button  onClick={deleteStudent}>Delete Student</button>
  </div>
  </div>
        </div>
    );
};

export default DeleteStud;