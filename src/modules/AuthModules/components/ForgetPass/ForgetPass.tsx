
import authimg from '../../../../assets/imgs/login-img.jfif'
import logo from '../../../../assets/imgs/Logo.png'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgetPass() {
  
  let navigate = useNavigate();
  let{
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();

  let onSubmit =async(data:any) =>{
try {
  let response = await axios.post('https://upskilling-egypt.com:3007/api/auth/forgot-password', data);
  navigate('/ResetPass');
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
              <h3>Forget Password</h3>
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
             <div className='text-center'>
             
              <button className='btn btn-outline-primary d-block w-100 my-3'>Send</button>

              </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  
  )
}

