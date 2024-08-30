import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const isLoggedIn = window.localStorage.getItem("loggedIn")
  return isLoggedIn === "true" ? <Outlet/> : <Navigate to="/" />
}

export default ProtectedRoute