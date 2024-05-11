"use client"
import React from 'react'
import { useSelector } from 'react-redux'

function RemoveUser() {
    const data = useSelector(data=>data.users);
    console.log(data);
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default RemoveUser
