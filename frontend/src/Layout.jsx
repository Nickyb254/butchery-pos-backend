import { Outlet, useLocation } from "react-router-dom";
import HomeNavbar from "./components/Navbar";
import EmployeeHeader from "./components/Employee/EmployeeHeader";

const ROUTES = {
  ADMIN_REGEX: /\/admin\/dashboard/,
  EMPLOYEE_REGEX: /\/employees\/profile/
}

const Layout = () => {
  const location = useLocation() //get current location from react-router-dom
  const path = location.pathname //get current path

  let currentNavBar
  
  switch(true){
    case ROUTES.ADMIN_REGEX.test(path):
      currentNavBar = null
      break;

    case ROUTES.EMPLOYEE_REGEX.test(path):

      currentNavBar = null
      break;

    default: 
      currentNavBar = <HomeNavbar/>
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