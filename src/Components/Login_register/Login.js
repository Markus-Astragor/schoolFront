import React from 'react'
import './Login.css';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';



function Login(props) {


  const [emailEror, setEmailEror] = useState(false);
  const [passwordEror, setPasswordEror] = useState(false);
  const [errorText, setErrorText] = useState('');

  const [waitingResp, setWaitingResp] = useState(false);


  const navigateUser = useNavigate();

  
  const SubmitLogin = (e) =>{
    

      e.preventDefault();

      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      const LoginValidation = CheckLoginValidation(email, password);

      if(LoginValidation == 1)
      {
        return;
      }

      setWaitingResp(true);


      axios.post('http://localhost:8080/login', {
        email: email,
        password: password
      }).then((response) =>{

        console.log(response);

        const respPerson = response.data.userDate.person;
        const token = response.data.token;
        
        localStorage.setItem('token', JSON.stringify(token));

        
        if(respPerson == 'student')
        {
          navigateUser('/userpage');
        }

        if(respPerson == 'teacher')
        {
          navigateUser('/teacherpage');
        }

      }).catch(err =>{

        setWaitingResp(false);

        
        const errorMessage = err.response.data[0].msg;
        const erorResponse = err.response.data;
        console.log(errorMessage);

        if(errorMessage == 'Неправильний email')
        {
          setEmailEror(true);
          setErrorText('Некоректний email');
        }

        if(errorMessage == 'Пароль повинен мінімум 8 символів')
        {
          setPasswordEror(true);
          setErrorText('Пароль повинен мінімум 8 символів');
        }

        if(erorResponse == 'Невірно вказаний email або пароль')
        {
          console.log('Невірно вказаний email або пароль');
          props.setInvalidUser(true);
          console.log('InvalidUserstate is set');
        }

        console.log(err);
      })
  }

  const CheckLoginValidation = (email, password) =>{

    setEmailEror(false);
    setPasswordEror(false);


    if(!email.includes('.', '@'))
    {
      console.log('Некоректний email');
      setEmailEror(true);
      setErrorText('Некоректний email')
      return 1;
    }

    if(password.length < 8)
    {
      console.log('Пароль повинен містити мінімім 8 символів');
      setPasswordEror(true);
      setErrorText('Пароль повинен містити мінімім 8 символів');
      return 1;
    }

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
        <input className={emailEror ? 'border_red' : 'border_normal'} ref={emailRef} required type='email' placeholder='Email'></input>
        <p className={emailEror ? 'auth_error_msg' : 'auth_error_msg_hidden'}>{errorText}</p>
        <input className={passwordEror ? 'border_red' : 'border_normal'} ref={passwordRef} required type='password' placeholder='Password'></input>
        <p className={passwordEror ? 'auth_error_msg' : 'auth_error_msg_hidden'}>{errorText}</p>
        <div className='div_submit_btn'>
          <button className={waitingResp? 'submit_btn_hidden' : 'submit_btn'} onClick={(e)=>{SubmitLogin(e)}} >Увійти</button>
          <div class={ waitingResp ? 'lds_ellipsis' : 'lds_ellipsis_hidden'}><div></div><div></div><div></div><div></div></div> 
        </div>
      </form>
    </div>
  )
}

export default Login
