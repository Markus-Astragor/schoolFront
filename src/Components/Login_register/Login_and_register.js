import React, { useEffect, useRef } from "react";
import { useState } from "react"
import { NavLink } from 'react-router-dom';
import Login from "./Login";
import Register from './Register';
import './Login_and_register.css';
import { Route, Routes } from 'react-router-dom';




function Login_and_register(props) {
    const [greenBtn, setGreenBtn] = useState(true);
    const [greenRegisterBtn, setGreenRegisterBtn] = useState(false);
    const [register,setRegister] = useState(false);

    const greenLoginBtnChange = () => {
        setGreenRegisterBtn(false)
        setGreenBtn(true);
        setRegister(false);
    }

    const greenRegisterBtnChange = () => {
        setGreenBtn(false);
        setGreenRegisterBtn(true);
        setRegister(true);
    }

    const LoginRef = useRef();

    

    return (
        <div ref = {LoginRef} className="Login_and_register">
            <div className="Forms">
                <div className="buttons_autorization">
                    <div className={greenBtn ? 'Login_btn' : 'Login_btn_no_color'}><NavLink to='/authoriztion' style={{ textDecoration: 'none', color: 'black', width: '100%', display: 'block' }} onClick={greenLoginBtnChange}>Увійти</NavLink></div>
                    <div className={greenRegisterBtn ? 'Register' : 'Register_btn_no_color'}><NavLink to='/authoriztion' style={{ textDecoration: 'none', color: 'black', width: '100%', display: 'block' }} onClick={greenRegisterBtnChange}>Зареєструватися</NavLink></div>
                </div>
                <hr />


               {
                register ? <Register/> : <Login/>
               }


            </div>
        </div>
    )
}

export default Login_and_register;