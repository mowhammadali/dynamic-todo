import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Login from './Pages/Login/Login';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />}/>
        </Routes>
    )
}

export default App;