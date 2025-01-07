import React, {  useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {users, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className='flex h-screen justify-center'><Loading></Loading></div>
            
        

    }
    if(users){
        return children
    }

    return (
        <div>
            <Navigate state={location.pathname } to={'/login'}></Navigate>
           
        </div>
    );
};

export default PrivateRoute;