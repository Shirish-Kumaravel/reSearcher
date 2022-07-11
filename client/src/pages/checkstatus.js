import React from 'react';
import {useState} from "react";
import Axios from "axios";
import BasicTable from '../components/basictable.js';
import { statusTable } from '../components/statusTable.js';

import './SEA.css';


function CheckStatus() {
    
    const [projID,setProjID]= useState(0);
    const [statusNameList,setstatusNameList]= useState([]);

    const checkStatus = () => {
        Axios.get("http://localhost:3001/checkstatus",{
            params:
            {proj_id: projID}
        }).then((response)=>{
            setstatusNameList(response.data);
        });
    
      };
      const statusData = React.useMemo(()=>statusNameList);

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
  
                        <button  onClick={checkStatus}>Check Status</button>
                        <br></br>
                        <BasicTable columns={statusTable} data= {statusData}/>

                </div>
            </div>
        </div>
    );
};

export default CheckStatus;