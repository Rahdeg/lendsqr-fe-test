import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import {fetchUser} from '../Api/fetchlocal'


const Protected = () => {
  
  const isAuth = fetchUser();
  return isAuth  ? <Outlet/>  : <Navigate to='/'/>
   
}

export default Protected