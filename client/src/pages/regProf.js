import React from 'react';
import {useState} from "react";
import Axios from "axios";
import './SEA.css';


function RegProf() {
    const [profID,setProfID]= useState(0);
    const [projID,setProjID]= useState(0);

    const regProfessor = () => {
        Axios.post("http://localhost:3001/regprofessor",{profID: profID, projID: projID}).then(()=>{
         console.log("Registered Professor Successfully");
         alert("Registered Professor");
        })
    
      };

    return(
        <div>
            <h1>Enter the details of the Professor and Project</h1> 
            <div className="App">
    <div className="Info">
  <label>Professor ID:</label>
  <input type="number" onChange={(event)=>{
    setProfID(event.target.value);
  }}/>
  <label>Project ID:</label>
  <input type="number" onChange={(event)=>{
    setProjID(event.target.value);
  }}/>
  <button  onClick={regProfessor}>Register Professor</button>
  </div>
  </div>
        </div>
    );
};

export default RegProf;