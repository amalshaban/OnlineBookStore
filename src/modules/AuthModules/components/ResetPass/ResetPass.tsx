
import React from 'react'
import authimg from '../../../../assets/imgs/login-img.jfif'
import logo from '../../../../assets/imgs/Logo.png'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import ForgetPass from '../ForgetPass/ForgetPass'

export default function ResetPass() {
  
  let navigate = useNavigate();
  let{
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();

  let onSubmit =async(data:any) =>{
try {
  let response = await axios.post('https://upskilling-egypt.com:3007/api/auth/reset-password', data);
  navigate('/Login');
  console.log(response);
  toast.success(response.data.message);
  } 
  catch (error:any) {
  toast.error(error.response.data.message);
  console.log(error);
}
  }


  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6'>
          <img className='w-100' src={authimg} alt='auth-img' />
        </div>
        <div className='col-lg-6'>
          <div className='p-5'>
            <div className='text-center'>
              <img src={logo} alt='logo'/>
            </div>
            <div className='title m-5'>
              <span className='text-muted'>Welcome back !!</span>
              <h3>Reset Your Password Now</h3>
            </div>

              <form onSubmit={handleSubmit(onSubmit)} className='m-5'>
              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder='Enter Your Email'
                 {...register("email", {
                  required: "Email is required",
                  pattern:{
                    value: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,
                    message:'Email address is not valid !'
                  }
                 })}/>
                </div>

                {errors.email && <p className='alert alert-danger p-2'>{errors?.email?.message}</p>}
            

              <div className="mb-3">
              <label>OTP</label>
                <input type="number" className="form-control" placeholder='Enter Your OTP Number'
                 aria-describedby=""
                 {...register("otp", {
                  required: "OTP is required",
                 })}/>
                </div>
                {errors.otp && <p className='alert alert-danger p-2'>{errors?.otp?.message}</p>}
             
            
            
            
              <div className="mb-3">
              <label>Password</label>
                <input type="Password" className="form-control" placeholder='Enter Your Password'
                 aria-describedby="emailHelp"
                 {...register("password", {
                  required: "Password is required",
                 })}/>
                </div>
                {errors.password && <p className='alert alert-danger p-2'>{errors?.password?.message}</p>}
             
             
              <div className='text-center'>
              <button className='btn buttonColor d-block w-100 my-3'>Send</button>
              <button className='btn btn-outline-primary d-block w-100 my-3'>Log in</button>

              </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  
  )
}
