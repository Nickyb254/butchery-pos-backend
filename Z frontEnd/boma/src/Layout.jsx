import { Outlet } from "react-router-dom";
import MyNavbar from "./components/Navbar";

import React from 'react'

const Layout = () => {
  return (
    <>
    <MyNavbar/>
    <Outlet/>
    </>
  )
}

export default Layout