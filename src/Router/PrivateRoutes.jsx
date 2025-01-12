import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
       
        return <progress className="progress progress-error w-56" ></progress>}
    if(user){
        return children;}

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;