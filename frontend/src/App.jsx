import React from 'react'
import Home from'./Home/Home'
import {Route,Routes,Navigate} from "react-router-dom"
import Courses from './Course/Courses'
import Signup from './comp/Signup'
import { Toaster } from 'react-hot-toast';
import {useAuth} from '../context/AuthProvider'

const App=()=>{
  const [authUser,setAuthuser]=useAuth()
  return(
   <>
   <div className='dark:bg-slate-900 dark:text-white'>
 <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/Course' element={authUser?<Courses/>:<Navigate to='/signup'/>}></Route>
<Route path='/Signup' element={<Signup/>}></Route>

 </Routes>
 <Toaster />
 </div>
    </>
    
  )
}
export default App