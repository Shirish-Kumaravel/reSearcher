import React from 'react';
import {useState} from "react";
import Axios from "axios";
import BasicTable from '../components/basictable.js';
import { regProfTable } from '../components/regProfTable.js';

import './SEA.css';


function SearchRegProf() {
    
    const [projID,setProjID]= useState(0);
    const [regProfSearchNameList,setRegProfSearchNameList]= useState([]);

    const searchRegProfessor = () => {
        Axios.get("http://localhost:3001/searchregprofessor",{
            params:
            {proj_id: projID}
        }).then((response)=>{
         setRegProfSearchNameList(response.data);
        });
    
      };
      const searchRegProfData = React.useMemo(()=>regProfSearchNameList);

    return(
        <div>
            <h1>Enter the Project ID</h1> 
            <div className="App">
                <div className="Info">
                            <input 
                                type="number" 
                                name="prof_id"
                                placeholder = "Enter the projectID"
                                onChange={(event)=>{
                                    setProjID(event.target.value);
                                }}
                            />
  
                        <button  onClick={searchRegProfessor}>Search Professors</button>
                        <br></br>
                        <BasicTable columns={regProfTable} data= {searchRegProfData}/>

                </div>
            </div>
        </div>
    );
};

export default SearchRegProf;