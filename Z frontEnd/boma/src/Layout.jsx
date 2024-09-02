import { Outlet } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import AdminHeader from "./section/AdminHeader";

import React from 'react'

const Layout = () => {
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  let header1 = <MyNavbar/>
  let header2 = <AdminHeader/>

  let content = header1 || header2
  isLoggedIn ? 
  content = header2
            : content = header1 
  
  return (
    <>
    {content}
    <Outlet/>
    </>
  )
}

export default Layout