"use client"

import { fetchUserData } from "@/redux/slice";
import { useDispatch, useSelector } from "react-redux"

export default function Page(){
    const dispatch = useDispatch();
    const data = useSelector((data)=> data.userData.userAPIdata);
    console.log(data);

    return(
        <>
        <h1>api User page</h1>
        <button onClick={()=>{dispatch(fetchUserData)}}>click</button>
        </>
    )
}