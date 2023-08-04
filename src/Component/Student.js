import React, { useContext } from "react";
import StoreData from "./Store";
import './Design.css';
import { Link, useNavigate } from "react-router-dom";

function Student() {
   const ContextData = useContext(StoreData)
   const Navi = useNavigate()
   console.log(ContextData)
    return(
        <>
        <div className="studentHead">
        <h1 className="students">Students Details</h1>
        <button className="studentButton" onClick={() => Navi('/newstudent')}>Add new student</button>
        </div>
        <table className="studentTable">
            <tr className="studentTr">
                <td>Name</td>
                <td>Age</td>
                <td>Course</td>
                <td>Batch</td>
                <td>Change</td>
            </tr><hr/>
            {ContextData.stuname.map((item,index)=>{
                
                return(
                    <>
                <tr  className="studentTr" key={index}>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>{item.Course}</td>
                    <td>{item.Batch}</td>
                    <td><Link state={{data : index}}  to='/editstudent' >Edit</Link></td>
                </tr><hr/>
                </>)
            })}
        </table>
        </>
    )
}

export default Student;