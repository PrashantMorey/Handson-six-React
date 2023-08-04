import React, { useContext } from 'react'
import StoreData from './Store'
import { useNavigate } from 'react-router-dom'

const AddNewStudent = () => {
    const ContextData = useContext(StoreData)
    const Navi = useNavigate()
    console.log(ContextData)
    const newStu = {
        Name: '',
        Age:'',
        Course:'',
        Batch: ''
    }

    const handleChange = (e) => {
        newStu[e.target.name] = e.target.value;
    }

    const handleClick = () => {
        ContextData.stuname.push(newStu)
        Navi('/student')
    }

  return (
    <div>


      <div className='AddNewStudent'> 
      <fieldset>
        <legend><lable htmlFor='name'>Name</lable></legend>
        <input className='input1' type='text' id='name' name='Name' placeholder='name' onChange={handleChange} />
      </fieldset>

      <fieldset>
        <legend><lable htmlFor='age'>Age</lable></legend>
        <input className='input1' type='text' id='age' name='Age' placeholder='age' onChange={handleChange} />
      </fieldset>

      <fieldset>
        <legend><lable htmlFor='course'>Course</lable></legend>
        <input className='input1' type='text' id='course' name='Course' placeholder='course' onChange={handleChange} />
      </fieldset>

      <fieldset>
        <legend><lable htmlFor='batch'>Batch</lable></legend>
        <input className='input1' type='text' id='batch' name='Batch' placeholder='batch' onChange={handleChange} />
      </fieldset>

      </div>

      <div className='button'>
      <button className='button1' type='button' onClick={() => Navi('/student')}>Cancle</button>
      <button className='button1' type='button' onClick={handleClick} >Submit</button>
      </div>

      
    </div>
  )
}

export default AddNewStudent
