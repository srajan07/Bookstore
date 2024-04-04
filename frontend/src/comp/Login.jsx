import React from 'react'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) =>{
    const userInfo={
      email:data.email,
      password:data.password
    }
   await axios.post("http://localhost:8000/user/login",userInfo)
    .then((res)=>{
      if(res.data){
        toast.success('Successfully login!');
        setTimeout(()=>{
          document.getElementById("my_modal_3").close();
          window.location.reload();
          localStorage.setItem("Users",JSON.stringify(res.data.user))
        },3000)
       
      }

    })
    .catch((err)=>{
      toast.error("Signup Error"+err);
      setTimeout(()=>{},3000)
    })
  }

  return (
    <div>
  
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
  
   
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"  >✕</button>
      </form>
      <form onSubmit={handleSubmit(onSubmit)}>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-6'>
      <p className='mt-6 font-semibold'>Email:</p>
      <input type="email" name="" id="email" placeholder='Enter your email'
       className='w-80 px-3 py-1 border rounded-md outline-none'
       {...register("email", { required: true })}
      
       />
       <br />
        {errors.email && <span className='text-red-500'>This field is required</span>}
     <p className='mt-6 font-semibold'>Password:</p>
      <input type="password" name="password" id="password"
       placeholder='Password'
        className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("password", { required: true })}/>
        <br />
    {errors.password && <span className='text-red-500'>This field is required</span>}
    </div>
    
    <button className='btn btn-primary px-5 ml-12 mt-3' type='submit'>Login</button>
    <span className='ml-12 mt-6'> Not registered?<Link to={'/Signup'} className='underline text-blue-500' >Signup</Link></span>
  
    </form>
  </div>
</dialog> 
    </div>
  )
}

export default Login
