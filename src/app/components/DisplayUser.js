"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../redux/slice';

function DisplayUser() {
  const data = useSelector(data=>data.userData.users);
  const dispatch = useDispatch();


  console.log(data);
  return (
    <div className="display-user">
      <h1>User List</h1>
      {
        data && data.map((data)=>
      
          <div key={data.id} className="user-item">
            {data.name}
            <button onClick={()=>{dispatch(removeUser(data.id))}}>Remove</button>
          </div>
        )
      }
    </div>
  )
}

export default DisplayUser
