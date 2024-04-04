import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Card from '../comp/Card'
import {Link} from 'react-router-dom'
function Course(){
    const [book,setBook]=useState([])
    useEffect(()=>{
        const getBook =async()=>{
try {
    const res=await axios.get("http://localhost:8000/book")
         setBook(res.data)
    }
catch (error) {
    console.log(error)
}
}
getBook();
 }, [])
    return(
        <>
<div className='max-w-screen-2x1 container mx-auto md:px-20 px-4 '>
    <div className='mt-28 text-center item-center justify-center'>
        <h1 className='font-semibold text-2x1'>We're delighted to have you here!<span className='text-blue-500'>:)</span></h1>
 <p className='mt-12 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repellat eos possimus! Obcaecati ipsam itaque odio nisi, optio ducimus quod debitis reiciendis doloribus quibusdam quaerat error aliquid dolorem temporibus. Cupiditate.
 Molestiae excepturi, laborum neque mollitia dolorum non, eos numquam nesciunt quaerat laboriosam omnis eaque quidem molestias ipsa consequatur error maxime assumenda. Neque velit distinctio molestiae sed similique aperiam amet laboriosam!
  Vero, doloribus?</p>

<Link to='/'><button className='btn btn-primary mt-6'>Back</button></Link>

 </div>
 <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
{
book.map((item)=>(
    <Card key={item.id} item={item}/>
))
}
 </div>

 </div>

        </>
    )
}
export default Course;