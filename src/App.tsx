import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './modules/SharedModules/components/NotFound/NotFound'
import LogIn from './modules/AuthModules/components/LogIn/LogIn'
import AuthLayout from './modules/SharedModules/components/AuthLayout/AuthLayout'
import ForgetPass from './modules/AuthModules/components/ForgetPass/ForgetPass'
import Register from './modules/AuthModules/components/Register/Register'
import ChangePass from './modules/AuthModules/components/ChangePass/ChangePass'
import ResetPass from './modules/AuthModules/components/ResetPass/ResetPass'
import MasterLayout from './modules/SharedModules/components/MasterLayout/MasterLayout'
import Landingpage from './modules/MasterModules/components/LandingPage/Landingpage'
import BooksList from './modules/MasterModules/components/BooksList/BooksList'
import Cart from './modules/MasterModules/components/Cart/Cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { jwtDecode } from 'jwt-decode'
import ProtectedRoute from './modules/SharedModules/components/ProtectedRoute/ProtectedRoute'

function App() {
  let[ loginData, setLoginData ] =useState(null);

  const saveLoginData = ()=> {
   let encodedToken = localStorage.getItem('userToken');
   let decodedToken = jwtDecode(encodedToken);
   setLoginData(decodedToken);
   console.log(decodedToken);
  }
  const routes = createBrowserRouter([
    {
      path:'/',
      element: <AuthLayout/>,
      errorElement: <NotFound/>,
      children:[
        {index:true, element:<LogIn saveLoginData={saveLoginData}/>},
        {path:'Login', element:<LogIn saveLoginData={saveLoginData}/>},
        {path:'Register', element: <Register />},
        {path:'ForgetPass', element: <ForgetPass />},
        {path:'ChangePass', element: <ChangePass />},
        {path:'ResetPass', element: <ResetPass />},
      ]
    },
    {
      path:'dashboard',
      element:(
        <ProtectedRoute loginData={loginData}>
          <MasterLayout/>
        </ProtectedRoute>
      ),
      errorElement: <NotFound/>,
      children:[
        {index:true, element:<Landingpage/>},
        {path:'home', element:<Landingpage/>},
        {path:'BooksList', element: <BooksList />},
        {path:'Cart', element: <Cart />},
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={routes}/>
    <ToastContainer />
    </>
  )
}

export default App
