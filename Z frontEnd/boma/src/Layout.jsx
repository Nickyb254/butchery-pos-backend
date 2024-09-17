import { Outlet, useLocation } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import AdminHeader from "./section/AdminHeader";

const ROUTES = {
  ADMIN_REGEX: /\/login\/welcome/,
  EMPLOYEE_REGEX: /\/employees\/profile/
}

const Layout = () => {
  const location = useLocation() //get current location from react-router-dom
  const path = location.pathname //get current path

  let currentNavBar
  
  switch(true){
    case ROUTES.ADMIN_REGEX.test(path):
    case ROUTES.EMPLOYEE_REGEX.test(path):

      currentNavBar = <AdminHeader/>
      break;

    default: 
      currentNavBar = <MyNavbar/>
      break;
  }
    
  return (
    <>
      {currentNavBar}
      <Outlet/>
    </>
  )
}

export default Layout