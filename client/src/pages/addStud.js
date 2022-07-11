import React from 'react';
import {useState} from "react";
import Axios from "axios";
import './SEA.css';


function AddStud() {
    const [studID,setStudID]= useState(0);
    const [name,setName]= useState("");
    const [dob,setDOB]= useState("");
    const [phone,setPhone]= useState(0);
    const [course,setCourse]= useState("");
    const [semester,setSemester]= useState(0);
    const [cgpa,setCGPA]= useState(0);
    



    const addStudent = () => {
        Axios.post("http://localhost:3001/addstudent",{studID: studID, name: name, dob: dob,phone: phone,course: course,semester: semester,cgpa: cgpa}).then(()=>{
         console.log("Added Student Successfully");
         alert("Added Student");
        })
    
      };

    return(
        <div>
            <h1>Enter the details of the Student</h1> 
            <div className="App">
    <div className="Info">
  <label>ID:</label>
  <input type="number" onChange={(event)=>{
    setStudID(event.target.value);
  }}/>
  <label>Name:</label>
  <input type="text" onChange={(event)=>{
    setName(event.target.value);
  }}/>
  <label>DOB:</label>
  <input type="date" onChange={(event)=>{
    setDOB(event.target.value);
  }}/>
  <label>Phone:</label>
  <input type="text" onChange={(event)=>{
    setPhone(event.target.value);
  }}/>
  <label>Course:</label>
  <input type="text" onChange={(event)=>{
    setCourse(event.target.value);
  }}/>
  <label>Semester:</label>
  <input type="number" onChange={(event)=>{
    setSemester(event.target.value);
  }}/>
  <label>CGPA:</label>
  <input type="number" onChange={(event)=>{
    setCGPA(event.target.value);
  }}/>
  <button  onClick={addStudent}>Add Student</button>
  </div>
  </div>
        </div>
    );
};

export default AddStud;