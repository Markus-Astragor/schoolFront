import React from 'react'
import './Login.css';
import { useState, useRef } from 'react';

import axios from 'axios';



function Login() {


  
  const SubmitLogin = (e) =>{
      e.preventDefault();

      const email = emailRef.current.value;
      const password = passwordRef.current.value;


      axios.post('http://localhost:8080/login', {
        email: email,
        password: password
      }).then((response) =>{
        console.log(response);
      }).catch(err =>{
        console.log(err);
      })
  }


  const emailRef = useRef();
  const passwordRef = useRef();
  return (

    <div className='Login'>
      <div className="Login_as_pupil">
        <h3>Увійти як учень</h3>
        <hr />
      </div>
      <form className='Form_Login'>
        <input ref={emailRef} required type='email' placeholder='Email'></input>
        <input ref={passwordRef} required type='password' placeholder='Password'></input>
        <div className='div_submit_btn'>
          <button onClick={(e)=>{SubmitLogin(e)}} className='submit_btn'>Увійти</button>
        </div>
      </form>
    </div>
  )
}

export default Login
