import React from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    const userInfo={
      username:data.username,
      email:data.email,
      password:data.password
    }
   await axios.post("http://localhost:8000/user/signup",userInfo)
    .then((res)=>{
      if(res.data){
        toast.success('Successfully created!');
      }
    localStorage.setItem("Users",JSON.stringify(res.data.user))
    })
    .catch((err)=>{
      toast.error("Signup Error"+err.message);
    
    })
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='flex h-screen  item-center justify-center  rounded-md'>
    <div className="card w-96  bg-base-100 shadow-xl mt-6 mb-6">
  <div className="card-body">
    <h2 className="card-title">Signup</h2>
    <div className='mt-3'>
    <p className='mt-6 font-semibold'>Username:</p>
    <input type="text" name="" id="" placeholder='Username'
     className='w-80 px-3 py-1 border rounded-md outline-none'
     {...register("username", { required: true })}
     /><br />
     {errors.username && <span className='text-red-500'>This field is required</span>}
  
       <p className='mt-6 font-semibold'>Email:</p>
     <input type="email" name="" id="email"
      placeholder='Enter your email'
    className='w-80 px-3 py-1 border rounded-md outline-none'
    {...register("email", { required: true })}
    /><br />
    {errors.email && <span className='text-red-500'>This field is required</span>}
     <p className='mt-6 font-semibold'>Password:</p>
      <input type="password" name="password" id="password"
       placeholder='Password' className='w-80 px-3 py-1 border rounded-md outline-none'
       {...register("password", { required: true })}
       />
       <br />
        {errors.password && <span className='text-red-500'>This field is required</span>}
      <button className='btn btn-primary mt-6' type='submit'>Signup</button>
    <p>Have account?<Link to={'/'} className='underline text-blue-500'>Back</Link></p>
   
    </div>
   
    </div>
  </div>
    </div>
    </form>
    </>
  )
}

export default Signup
