import React from "react";
import { NavLink } from 'react-router-dom';
import Login from "./Login";
import Register from './Register';
import './Login_and_register.css';
import { Route, Routes } from 'react-router-dom';


function Login_and_register() {
    return (
        <div className="Login_and_register">
            <div className="Forms">
                <div className="buttons_autorization">
                    <div className="Login_btn"><NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>Увійти</NavLink></div>
                    <div className="Register"><NavLink to='/register' style={{ textDecoration: 'none', color: 'black' }}>Зареєструватися</NavLink></div>
                </div>
                <hr />
                <Routes>
                    <Route element={<Login />} path='/' />
                    <Route element={<Register />} path='/register' />
                </Routes>
            </div>
        </div>
    )
}

export default Login_and_register;