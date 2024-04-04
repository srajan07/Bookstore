
import React from 'react'
import {useAuth} from '../../context/AuthProvider'
import toast from 'react-hot-toast'
function Logout() {
  const [authUser,setAuthuser]=useAuth()
  const handlelogout=()=>{
    try {
      setAuthuser({
        ...authUser,
        user:null,
      })
      localStorage.removeItem("Users")
      toast.success("logout successful")
      setTimeout(()=>{window.location.reload(0)},3000)
    } catch (error) {
      toast.error("Error"+error.message)
      setInterval(()=>{},3000)
    }
  }
  return (
    <div>
      <button className='btn bg-red-500 text-white px-3 py-2 rounded-md cursor-pointer' onClick={handlelogout} >Logout</button>
    </div>
  )
}

export default Logout
