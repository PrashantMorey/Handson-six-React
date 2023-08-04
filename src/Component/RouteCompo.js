import React, { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import StoreData from "./Store";
import AddNewStudent from "./AddNewStudent";
import EditStudent from "./EditStudent";


function RoutCompo(){
    const [studentData, setStudentData] = useState([
        {Name: "Jhon", Age:26, Course: "MERN", Batch: "Oct", Change: "Edit"},
        {Name: "Doe", Age:25, Course: "MERN", Batch: "Nov", Change: "Edit"},
        {Name: "Biden", Age:26, Course: "MERN", Batch: "Sept", Change: "Edit"},
        {Name: "Barar", Age:22, Course: "MERN", Batch: "Sept", Change: "Edit" },
        {Name: "Christ", Age:24, Course: "MERN", Batch: "Oct", Change: "Edit"},
        {Name: "Elent", Age:23, Course: "MERN", Batch: "Nov", Change: "Edit"},
        {Name: "Harshit", Age:22, Course: "MERN", Batch: "Oct", Change: "Edit"}
    ])
    return(
        <>
        <BrowserRouter>
        <div className="header">
        <NavLink className="header1" to='/'>Home</NavLink>
        <NavLink className="header1" to='/student'>Student</NavLink>
        <NavLink className="header1" to='/contact'>Contact</NavLink>
        

        </div>
        <Routes>
            <Route path="/" element={<Home/>} />

            <Route path="/student" element={
                <StoreData.Provider value={{stuname : studentData, updateStu : setStudentData}}>
                    <Student/>
                </StoreData.Provider>
            } />

            <Route path="/newstudent" element={
                <StoreData.Provider value={{stuname : studentData, updateStu : setStudentData}}>
                    <AddNewStudent/>
                </StoreData.Provider>
            } />
            
            <Route path="/editstudent" element={
                <StoreData.Provider value={{stuname : studentData, updateStu : setStudentData}}>
                    <EditStudent/>
                </StoreData.Provider>
            } />
            
            
            
            <Route path="/contact" element={<Contact/>} />
        </Routes>
        </BrowserRouter>
        </>
    )
}

export default RoutCompo;