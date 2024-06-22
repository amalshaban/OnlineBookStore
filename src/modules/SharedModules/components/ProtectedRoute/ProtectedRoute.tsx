import React from 'react'
import { Navigate } from 'react-router-dom';
import LogIn from '../../../AuthModules/components/LogIn/LogIn';

export default function ProtectedRoute({ loginData, children}) {
    if(localStorage.getItem('userToken') || loginData) return children;
    else return <Navigate to='/LogIn'/>
  return (
    <div>ProtectedRoute</div>
  )
}
