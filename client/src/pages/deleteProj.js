import React from 'react';
import {useState} from "react";
import Axios from "axios";
import './SEA.css';


function DeleteProj() {
    const [projID,setProjID]= useState(0);
    const deleteProject = () => {
        Axios.post("http://localhost:3001/deleteproject",{projID: projID}).then(()=>{
         console.log("Deleted Project Successfully");
         alert("Deleted Project");
        })
    
      };

    return(
        <div>
            <h1>Enter the ID of the Project</h1> 
            <div className="App">
    <div className="Info">
  <input type="number" onChange={(event)=>{
    setProjID(event.target.value);
  }}/>
  
  <button  onClick={deleteProject}>Delete Project</button>
  </div>
  </div>
        </div>
    );
};

export default DeleteProj;