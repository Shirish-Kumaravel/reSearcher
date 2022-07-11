import React from 'react';
import {useState} from "react";
import Axios from "axios";
import BasicTable from '../components/basictable.js';
import { projTable } from '../components/projTable.js';

import './SEA.css';

function SearchProj() {
    
    const [projID,setProjID]= useState(0);
    const [name,setName]= useState("");
    const [description,setDescription]= useState("");
    const [start_date,setStartDate]= useState("");
    const [end_date,setEnddate]= useState("");
    const [funding,setFunding]= useState(0);
    const [projSearchName,setProjSearchName]= useState("");
    const [projSearchNameList,setProjSearchNameList]= useState([]);

    const searchProject = () => {
        Axios.get("http://localhost:3001/searchproject",{
            params:
            {name: projSearchName}
        }).then((response)=>{
         setProjSearchNameList(response.data);
        });
    
      };
      const searchProjData = React.useMemo(()=>projSearchNameList);

    return(
        <div>
            <h1>Enter the details of the Project</h1> 
            <div className="App">
                <div className="Info">
                    <label>Name:</label>
                            <input 
                                type="text" 
                                name="projSearchName"
                                placeholder = "Enter the project's name"
                                onChange={(event)=>{
                                    setProjSearchName(event.target.value);
                                }}
                            />
  
                        <button  onClick={searchProject}>Search Project</button>
                        <br></br>
                        <BasicTable columns={projTable} data= {searchProjData}/>

                </div>
            </div>
        </div>
    );
};

export default SearchProj;