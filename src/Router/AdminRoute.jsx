import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = (children) => {
    const [isAdmin,isAdminLoading]=useAdmin()
    const {user,loading}=useAuth()
    const location = useLocation()
    
    if (loading||isAdminLoading) {

        return <div className=' flex justify-center items-center h-screen'>
            <progress className="progress w-80 "></progress>
        </div>
    }
    if (user&&isAdmin) {
        return children;
    }

    // if the login route disturbs then make it to home page route 
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default AdminRoute;