"use client"
import { removeUser } from '@/redux/slice';
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Page() {
    const data = useSelector(data=>data.userData.users);
    const dispatch = useDispatch();
    const handleRemove = (data) =>{
      dispatch(removeUser(data));
    }
    console.log(data);
  return (
    <div>
      <h1>hello</h1>
      {
        data.map((data)=>
      
          <div key={data.id} className="user-item">
            {data.name}
            <button onClick={()=>{handleRemove(data.id)}}>Remove</button>
          </div>
        )
      }
      <Link href='/'>Home</Link>
    </div>
  )
}

export default Page
