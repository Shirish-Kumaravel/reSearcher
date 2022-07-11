const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection(
    {
        user: "root",
        host: "localhost",
        password: "password",
        database: "research",
         
    }
);

app.post('/addprofessor',(req,res)=>{
    const profID = req.body.profID;
    const name = req.body.name;
    const department = req.body.department;
    const field = req.body.field;
    const phone = req.body.phone;
    const chamber = req.body.chamber;
    const website = req.body.website;


    db.query("INSERT INTO professor (professor_id,name,department,field,phone,chamber,website) VALUES (?,?,?,?,?,?,?)",[profID,name,department,field,phone,chamber,website],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted");
        }
    });

});

app.post('/updateprofessor',(req,res)=>{
    const profID = req.body.profID;
    const name = req.body.name;
    const department = req.body.department;
    const field = req.body.field;
    const phone = req.body.phone;
    const chamber = req.body.chamber;
    const website = req.body.website;
    const sqlInsert = "UPDATE research.professor SET name = ?, department = ?,field = ?, phone = ?,chamber = ?,website = ?WHERE professor_id = ?;"

    db.query(sqlInsert,[name,department,field,phone,chamber,website,profID],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted");
        }
    });

});

app.post('/deleteprofessor',(req,res)=>{
    const profID = req.body.profID;
    const sqlInsert = "DELETE FROM research.professor WHERE professor_id=?;"

    db.query(sqlInsert,[profID],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted");
        }
    });

});

app.post('/regprofessor',(req,res)=>{
    const profID = req.body.profID;
    const projID = req.body.projID;
    const sqlInsert = "INSERT INTO under (proj_id,prof_id) VALUES (?,?);"

    db.query(sqlInsert,[projID,profID],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted");
        }
    });

});

app.post('/regstudent',(req,res)=>{
    const studID = req.body.studID;
    const projID = req.body.projID;
    const date = req.body.date;
    const sqlInsert = "INSERT INTO takes (proj_id,stud_id,joining_date) VALUES (?,?,?);"

    db.query(sqlInsert,[projID,studID,date],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted");
        }
    });

});

app.post('/addstudent',(req,res)=>{
    const studID = req.body.studID;
    const name = req.body.name;
    const dob = req.body.dob;
    const phone = req.body.phone;
    const course = req.body.course;
    const semester = req.body.semester;
    const cgpa = req.body.cgpa;


    db.query("INSERT INTO student (student_id,name,dob,phone,course,semester,cgpa) VALUES (?,?,?,?,?,?,?)",[studID,name,dob,phone,course,semester,cgpa],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted");
        }
    });

});

app.post('/updatestudent',(req,res)=>{
    const studID = req.body.studID;
    const name = req.body.name;
    const dob = req.body.dob;
    const phone = req.body.phone;
    const course = req.body.course;
    const semester = req.body.semester;
    const cgpa = req.body.cgpa;
    const sqlInsert = "UPDATE research.student SET name = ?, dob = ?,phone = ?, course= ?,semester = ?,cgpa = ? WHERE student_id = ?;"


    db.query(sqlInsert,[name,dob,phone,course,semester,cgpa,studID],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted");
        }
    });

});

app.post('/deletestudent',(req,res)=>{
    const studID = req.body.studID;
    const sqlInsert = "DELETE FROM research.student WHERE student_id=?;"


    db.query(sqlInsert,[studID],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted");
        }
    });

});

app.post('/addproject',(req,res)=>{
    const projID = req.body.projID;
    const name = req.body.name;
    const description = req.body.description;
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;
    const funding = req.body.funding;


    db.query("INSERT INTO project (project_id,name,description,start_date,end_date,funding) VALUES (?,?,?,?,?,?)",[projID,name,description,start_date,end_date,funding],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted");
        }
    });

});

app.post('/updateproject',(req,res)=>{
    const projID = req.body.projID;
    const name = req.body.name;
    const description = req.body.description;
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;
    const funding = req.body.funding;
    const sqlInsert = "UPDATE research.project SET name = ?, description = ?,start_date = ?, end_date = ?,funding = ? WHERE project_id = ?;"

    db.query(sqlInsert,[name,description,start_date,end_date,funding,projID],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted");
        }
    });

});

app.post('/deleteproject',(req,res)=>{
    const projID = req.body.projID;
    const sqlInsert = "DELETE FROM research.project WHERE project_id=?;"

    db.query(sqlInsert,[projID],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Values inserted");
        }
    });

});

app.get("/searchprofessor", (req, res) => {
    const name = req.query.name;
    const sym = "%";
    const checkName = sym.concat(name,sym);
    const sqlInsert = "SELECT * FROM professor where name like ?";
  
    db.query(
      sqlInsert,
      [checkName],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.get("/searchregprofessor", (req, res) => {
    const proj_id = req.query.proj_id;
    const sqlInsert = "SELECT professor_id,professor_name FROM profproj where project_id = ?";
  
    db.query(
      sqlInsert,
      [proj_id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.get("/checkstatus", (req, res) => {
    const proj_id = req.query.proj_id;
    const sqlInsert = "SELECT project_id,name,start_date,status FROM projstatus where project_id = ?";
  
    db.query(
      sqlInsert,
      [proj_id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });


  app.get("/searchstudent", (req, res) => {
    const name = req.query.name;
    const sym = "%";
    const checkName = sym.concat(name,sym);
    const sqlInsert = "SELECT * FROM student where name like ?";
  
    db.query(
      sqlInsert,
      [checkName],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.get("/searchregstudent", (req, res) => {
    const proj_id = req.query.proj_id;
    const sqlInsert = "SELECT student_id,student_name FROM studproj where project_id = ?";
  
    db.query(
      sqlInsert,
      [proj_id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

  app.get("/searchproject", (req, res) => {
    const name = req.query.name;
    const sym = "%";
    const checkName = sym.concat(name,sym);
    const sqlInsert = "SELECT * FROM project where name like ?";
  
    db.query(
      sqlInsert,
      [checkName],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  });

app.listen(3001, () => {
    console.log("The backend is live!");
});