"use client"
import React, { useState } from 'react'
import { addUser } from '../../redux/slice';
import { useDispatch } from 'react-redux';

function AddUser() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const handleAdd = () =>{
    dispatch(addUser(name));
    setName('');
    console.log(name);
  }
  return (
    <div className="add-user">
    <h1>Add User</h1>
    <input 
    placeholder='Enter the User Name' 
    type='text' 
    value={name}
    onChange={(e)=>setName(e.target.value)}
    className='add-user-input'
    />
    <button className='add-user-button' onClick={handleAdd}>Add</button>
      
    </div>
  )
}

export default AddUser
