import React from 'react';
import {useState} from "react";
import Axios from "axios";
import './SEA.css';


function DeleteProf() {
    const [profID,setProfID]= useState(0);
    const deleteProfessor = () => {
        Axios.post("http://localhost:3001/deleteprofessor",{profID: profID}).then(()=>{
         console.log("Deleted Professor Successfully");
         alert("Deleted Professor");
        })
    
      };

    return(
        <div>
            <h1>Enter the ID of the Professor</h1> 
            <div className="App">
    <div className="Info">
  <input type="number" onChange={(event)=>{
    setProfID(event.target.value);
  }}/>
  
  <button  onClick={deleteProfessor}>Delete Professor</button>
  </div>
  </div>
        </div>
    );
};

export default DeleteProf;