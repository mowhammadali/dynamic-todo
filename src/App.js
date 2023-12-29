import React, { useState } from 'react';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import { Routes , Route } from 'react-router-dom';

const App = () => {
    const [isAuthenticated , setIsAuthenticated] = useState(false);

    return (
        <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/' 
            element={
                <ProtectedRoutes auth={isAuthenticated}>
                    <Home />
                </ProtectedRoutes>
            }/>
        </Routes>
    )
}

export default App;