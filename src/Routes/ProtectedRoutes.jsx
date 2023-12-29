import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({auth , children}) => {
    console.log(auth);
    if (!auth) {
        return <Navigate to={'/login'} replace/>
    }
    return children;
} 

export default ProtectedRoutes;