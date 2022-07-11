import React from 'react';
import {useState} from "react";
import Axios from "axios";
import BasicTable from '../components/basictable.js';
import { regStudTable } from '../components/regStudTable.js';

import './SEA.css';

function SearchRegStud() {
    
    const [projID,setProjID]= useState(0);

    const [regStudSearchNameList,setRegStudSearchNameList]= useState([]);

    const searchRegStudent = () => {
        Axios.get("http://localhost:3001/searchregstudent",{
            params:
            {proj_id: projID}
        }).then((response)=>{
         setRegStudSearchNameList(response.data);
        });
    
      };
      const searchRegStudData = React.useMemo(()=>regStudSearchNameList);

    return(
        <div>
            <h1>Enter the project ID</h1> 
            <div className="App">
                <div className="Info">
                            <input 
                                type="text" 
                                name="regStudSearchName"
                                placeholder = "Enter the ProjectID"
                                onChange={(event)=>{
                                    setProjID(event.target.value);
                                }}
                            />
  
                        <button  onClick={searchRegStudent}>Search Student</button>
                        <br></br>
                        <BasicTable columns={regStudTable} data= {searchRegStudData}/>

                </div>
            </div>
        </div>
    );
};

export default SearchRegStud;