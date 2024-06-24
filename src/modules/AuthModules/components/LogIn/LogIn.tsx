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

export default function LogIn(saveLoginData:any) {
  
  let navigate = useNavigate();
  let{
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();

  let onSubmit =async(data:any) =>{
try {
  let response = await axios.post('https://upskilling-egypt.com:3007/api/auth/login', data);
  navigate('/dashboard/home');
  console.log(response);
  toast.success(`Welcome Back ${response.data.data.profile.first_name}`);
  localStorage.setItem('userToken', response.data.data.accessToken);
  saveLoginData();
  } 
  catch (error:any) {
  toast.error(error.response.data.message);
  console.log(error);
  navigate('/register');
}
  }

  let goToRegister = ()=>{
    navigate('/Register');
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
              <span className='text-muted'>Welcome back!</span>
              <h3>Login To Your Account</h3>
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
              <label>Password</label>
                <input type="Password" className="form-control" placeholder='Enter Your Password'
                 aria-describedby="emailHelp"
                 {...register("password", {
                  required: "Password is required",
                 })}/>
                </div>
                {errors.password && <p className='alert alert-danger p-2'>{errors?.password?.message}</p>}
             
             <Link to={'/ForgetPass'}>Forget Password ?</Link>
              <div className='text-center'>
              <button className='btn buttonColor d-block w-100 my-3'>Log in</button>
              <button onClick={goToRegister} className='btn btn-outline-primary d-block w-100 my-3'>Register</button>

              </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  
  )
}
