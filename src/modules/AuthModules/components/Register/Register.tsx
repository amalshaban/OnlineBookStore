import React from 'react'
import authimg from '../../../../assets/imgs/login-img.jfif'
import logo from '../../../../assets/imgs/Logo.png'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export default function Register() {
  let navigate = useNavigate();
  let{
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();

  let onSubmit =async(data:any) =>{
try {
 let response = await axios.post('https://upskilling-egypt.com:3007/api/auth/register', data); 
 toast.success(response.data.message);

  console.log(data);
  navigate('/dashboard');
} catch (error:any) {
  toast.error(error.response.data.message);
  
  
}
  }

  let goToRegister = ()=>{
    navigate('/Register');
  }
  let goToLogin = ()=>{
    navigate('/LogIn');
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
              <span className='text-muted'>Create new acccount</span>
              <h3>Register</h3>
            </div>

              <form onSubmit={handleSubmit(onSubmit)} className='m-5'>
                <div className="row">
                  <div className="col-md-6 my-2">
                  <label>firstName</label>
                <input type="text" className="form-control" placeholder='Enter Your First-name'
                 {...register("first_name", {
                  required: "FirstName is required",
                 })}/>
                  </div>
                  
                {errors.first_name && <p className='alert alert-danger p-2'>{errors?.first_name?.message}</p>}
                <div className="col-md-6 my-2">
                  <label>lastName</label>
                <input type="text" className="form-control" placeholder='Enter Your Last-name'
                 {...register("last_name", {
                  required: "lastName is required",
                 })}/>
                  </div>
                  
                {errors.last_name && <p className='alert alert-danger p-2'>{errors?.last_name?.message}</p>}
                
                </div>
              <div className="mb-3">
                <label>Email</label>
                <input type="email" className="form-control" placeholder='Enter Your Email'
                 {...register("email", {
                  required: "Email is required",
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
              
                <div className="mb-3">
                  <label className="form-label">Role</label>
                  <select id="disabledSelect" className="form-select"{...register("role", {
                  required: "role is required",
                 })}>
                  <option value="">choose</option>
                  <option value="Customer">Customer</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                {errors.role && <p className='alert alert-danger p-2'>{errors?.role?.message}</p>}
              
              <div className='text-center'>
              <button type='submit' onClick={goToRegister} className='btn d-block buttonColor w-100 my-3'>Register</button>

              <button type='submit' onClick={goToLogin} className='btn btn-outline-primary d-block w-100 my-3'>Log in</button>
              </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  
  )
}
 