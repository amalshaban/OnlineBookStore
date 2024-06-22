
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import logo from '../../../../assets/imgs/Logo.png'
import authimg from '../../../../assets/imgs/login-img.jfif'

export default function ChangePass(handleClose) {
  
  // let navigate = useNavigate();
  let{
    register,
    handleSubmit,
    formState:{errors},
  } = useForm();

  let onSubmit =async(data:any) =>{
try {
  let response = await axios.post('https://upskilling-egypt.com:3007/api/auth/change-password', data,
    {headers:{ Authorization: `Bearer ${localStorage.getItem("userToken")}`}}
  );
  // navigate('/Login');
  handleClose();
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
      <div className='row p-3'>
        <div className='col-lg-5'>
          <img className='img-fluid' src={authimg} alt='auth-img' />
        </div>
        <div className='col-lg-7'>
          <div className='p-5'>
            <div className='text-center'>
              <img src={logo} alt='logo'/>
            </div>
            <div className='title m-5'>
              <span className='text-muted'>Welcome back !!</span>
              <h3>Change Your Password Easily</h3>
            </div>

              <form onSubmit={handleSubmit(onSubmit)} className='m-5'>
              

              <div className="mb-3">
              <label>Old Password</label>
                <input type="password" className="form-control" placeholder='Enter Your old password'
                 aria-describedby=""
                 {...register("password", {
                  required: "password is required",
                 })}/>
                </div>
                {errors.password && <p className='alert alert-danger p-2'>{errors?.password?.message}</p>}
             
            
            
            
              <div className="mb-3">
              <label>New Password</label>
                <input type="Password" className="form-control" placeholder='Enter Your new Password'
                 aria-describedby="emailHelp"
                 {...register("password_new", {
                  required: "new password is required",
                 })}/>
                </div>
                {errors.password_new && <p className='alert alert-danger p-2'>{errors?.password_new?.message}</p>}
             
             
              <div className='text-center'>
              <button className='btn buttonColor d-block w-100 my-3'>Submit</button>
  

              </div>
              </form>
            </div>
          </div>
      </div>
    </div>
  
  )
}
