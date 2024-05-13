"use client"
import { addTodos } from '@/redux/todoSlice';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Page() {
    const dispatch = useDispatch();
    const [toDo, setTodo] = useState('');
    const data = useSelector(data => data.todosData.todos);
    console.log(data);
    const handleAddToDo = () => {
        dispatch(addTodos(toDo));
        setTodo('');
    }

  return (
    <>
    <input type="text" onChange ={(e)=>{setTodo(e.target.value)}} value={toDo}/>
    <button onClick={handleAddToDo}>Add</button>
      <h1>TO do component</h1>
      {data.map((item)=>(
            <h1 key={item.id}>{item.name}</h1>     
      ))}
    </>
  )
}

export default Page
