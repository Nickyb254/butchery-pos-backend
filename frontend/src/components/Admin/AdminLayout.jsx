import AdminFooter from './AdminFooter'
import { Outlet } from 'react-router-dom'


const AdminLayout = () => {
  return (
    <>       
     <Outlet/>
     <AdminFooter/> 
    </>
  )
}

export default AdminLayout