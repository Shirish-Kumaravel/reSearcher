import './App.css';
import React, { useEffect, useState } from "react";
import Home from './pages/home';
import NavBar from './components/navbar';
import Add from './pages/add';
import Search from './pages/search';
import SearchProf  from './pages/searchProf';
import SearchStud from './pages/searchStud';
import SearchProj from './pages/searchProj';
import SearchRegProf from './pages/searchRegProf';
import SearchRegStud from './pages/searchRegStud';
import CheckStatus from './pages/checkstatus';
import Update from './pages/update';
import UpdateProf from './pages/updateProf';
import UpdateProj from './pages/updateProj';
import UpdateStud from './pages/updateStud';
import Delete from './pages/delete';
import DeleteProf from './pages/deleteProf';
import DeleteProj from './pages/deleteProj';
import DeleteStud from './pages/deleteStud';
import Register from './pages/register';
import RegProf from './pages/regProf';
import RegStud from './pages/regStud';
import AddProf from './pages/addProf';
import AddProj from './pages/addProj';
import AddStud from './pages/addStud';
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route element = {<Home />} path = "/"/>
      <Route element = {<Add />} path = "/add"/>
      <Route element = {<Search />} path = "/search"/>
      <Route element = {<Update />} path = "/update"/>
      <Route element = {<Delete />} path = "/delete"/>
      <Route element = {<DeleteProf />} path = "/delete/professor"/>
      <Route element = {<DeleteProj />} path = "/delete/project"/>
      <Route element = {<DeleteStud />} path = "/delete/student"/>
      <Route element = {<Register />} path = "/register"/>
      <Route element = {<RegProf />} path = "/register/professor"/>
      <Route element = {<RegStud />} path = "/register/student"/>
      <Route element = {<AddProf />} path = "/add/professor" />
      <Route element = {<AddStud />} path = "/add/student" />
      <Route element = {<AddProj />} path = "/add/project" />
      <Route element = {<SearchProf />} path = "/search/professor" />
      <Route element = {<SearchStud />} path = "/search/student" />
      <Route element = {<SearchProj />} path = "/search/project" />
      <Route element = {<SearchRegProf />} path = "/search/registeredprofessors" />
      <Route element = {<SearchRegStud />} path = "/search/registeredstudents" />
      <Route element = {<CheckStatus />} path = "/search/status" />
      <Route element = {<UpdateProf />} path = "/update/professor" />
      <Route element = {<UpdateProj />} path = "/update/project" />
      <Route element = {<UpdateStud />} path = "/update/student" />
      </Routes>
    </div>
  );
}

export default App;

