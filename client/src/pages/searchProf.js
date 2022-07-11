import React from 'react';
import {useState} from "react";
import Axios from "axios";
import BasicTable from '../components/basictable.js';
import { profTable } from '../components/profTable.js';

import './SEA.css';


function SearchProf() {
    
    const [profID,setProfID]= useState(0);
    const [name,setName]= useState("");
    const [department,setDepartment]= useState("");
    const [field,setField]= useState("");
    const [phone,setPhone]= useState(0);
    const [chamber,setChamber]= useState("");
    const [website,setWebsite]= useState("");
    const [profSearchName,setProfSearchName]= useState("");
    const [profSearchNameList,setProfSearchNameList]= useState([]);

    const searchProfessor = () => {
        Axios.get("http://localhost:3001/searchprofessor",{
            params:
            {name: profSearchName}
        }).then((response)=>{
         setProfSearchNameList(response.data);
        });
    
      };
      const searchProfData = React.useMemo(()=>profSearchNameList);

    return(
        <div>
            <h1>Enter the details of the Professor</h1> 
            <div className="App">
                <div className="Info">
                    <label>Name:</label>
                            <input 
                                type="text" 
                                name="profSearchName"
                                placeholder = "Enter the professor's name"
                                onChange={(event)=>{
                                    setProfSearchName(event.target.value);
                                }}
                            />
  
                        <button  onClick={searchProfessor}>Search Professor</button>
                        <br></br>
                        <BasicTable columns={profTable} data= {searchProfData}/>

                </div>
            </div>
        </div>
    );
};

export default SearchProf;