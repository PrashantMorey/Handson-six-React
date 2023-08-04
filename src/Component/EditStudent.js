import React, { useContext } from 'react'
import StoreData from './Store'
import { useLocation, useNavigate } from 'react-router-dom';


function EditStudent() {
    const ContextData = useContext(StoreData);
    const Navi = useNavigate();
    const IndexValue = useLocation().state.data;

    console.log(IndexValue)
    const updateObj = {
        Name : ContextData.stuname[IndexValue].Name,
        Age : ContextData.stuname[IndexValue].Age,
        Course : ContextData.stuname[IndexValue].Course,
        Batch : ContextData.stuname[IndexValue].Batch
    }

    const handleChange = (event) => {
        updateObj[event.target.name] = event.target.value;
    }

    const handleClick = () => {
        ContextData.stuname[IndexValue] = updateObj;
        Navi('/student')
    }
  return (
    <div>
      <div className='AddNewStudent'> 
      <fieldset>
        <legend><lable htmlFor='name'>Name</lable></legend>
        <input className='input1' type='text' id='name' name='Name' placeholder={ContextData.stuname[IndexValue].Name} onChange={handleChange} />
      </fieldset>

      <fieldset>
        <legend><lable htmlFor='age'>Age</lable></legend>
        <input className='input1' type='text' id='age' name='Age' placeholder={ContextData.stuname[IndexValue].Age} onChange={handleChange} />
      </fieldset>

      <fieldset>
        <legend><lable htmlFor='course'>Course</lable></legend>
        <input className='input1' type='text' id='course' name='Course' placeholder={ContextData.stuname[IndexValue].Course} onChange={handleChange} />
      </fieldset>

      <fieldset>
        <legend><lable htmlFor='batch'>Batch</lable></legend>
        <input className='input1' type='text' id='batch' name='Batch' placeholder={ContextData.stuname[IndexValue].Batch} onChange={handleChange} />
      </fieldset>

      </div>

      <div className='button'>
      <button className='button1' type='button' onClick={() => Navi('/student')}>Cancle</button>
      <button className='button1' type='button' onClick={handleClick} >Submit</button>
      </div>
    </div>
  )
}

export default EditStudent
