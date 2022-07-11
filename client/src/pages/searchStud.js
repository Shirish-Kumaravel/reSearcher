import React from 'react';
import {useState} from "react";
import Axios from "axios";
import BasicTable from '../components/basictable.js';
import { studTable } from '../components/studTable.js';

import './SEA.css';

function SearchStud() {
    
    const [studID,setStudID]= useState(0);
    const [name,setName]= useState("");
    const [dob,setDOB]= useState("");
    const [phone,setPhone]= useState(0);
    const [course,setCourse]= useState("");
    const [semester,setSemester]= useState(0);
    const [cgpa,setCGPA]= useState(0);
    const [studSearchName,setStudSearchName]= useState("");
    const [studSearchNameList,setStudSearchNameList]= useState([]);

    const searchStudent = () => {
        Axios.get("http://localhost:3001/searchstudent",{
            params:
            {name: studSearchName}
        }).then((response)=>{
         setStudSearchNameList(response.data);
        });
    
      };
      const searchStudData = React.useMemo(()=>studSearchNameList);

    return(
        <div>
            <h1>Enter the details of the Student</h1> 
            <div className="App">
                <div className="Info">
                    <label>Name:</label>
                            <input 
                                type="text" 
                                name="studSearchName"
                                placeholder = "Enter the student's name"
                                onChange={(event)=>{
                                    setStudSearchName(event.target.value);
                                }}
                            />
  
                        <button  onClick={searchStudent}>Search Student</button>
                        <br></br>
                        <BasicTable columns={studTable} data= {searchStudData}/>

                </div>
            </div>
        </div>
    );
};

export default SearchStud;