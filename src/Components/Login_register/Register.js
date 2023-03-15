import React, { useRef, useState } from 'react';
import RegisterStyle from  './Register.module.css';
import axios from 'axios';

function Register() {


  const emailInputRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);
  const PerosnRef = useRef();
  const UsernameRef = useRef();



  function onSubmit(e) {

    e.preventDefault();

    const emailText = emailInputRef.current.value;
    const passwordText = passwordRef.current.value;
    const personText = PerosnRef.current.value;
    const usernametext = UsernameRef.current.value;
    const repeatPasswordText = repeatPasswordRef.current.value;

    const RegisterValidation  = CheckUserValid(emailText, passwordText, repeatPasswordText, personText, usernametext);

    if(RegisterValidation == 1)
    {
      return;
    }



    axios.post('http://localhost:8080/register', {

      password: passwordText,
      username: usernametext,
      email: emailText,
      person: personText

    }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
  }

  function CheckUserValid(email, password, repeatPassword, person, username)
  {
    if(!(password == repeatPassword))
    {
      console.log('password is different ');
      return 1;
    }

    if(username.length < 3)
    {
      console.log('username should consisit of 3 letter minimum');
      return 1;
    }

  }





  return (
    <div className='Login'>
      <div className={RegisterStyle.RegisterWrapper}>
        <h3 style={{margin: '10px 0px 15px 0px'}}>Зареєструватися як:</h3>
        <div className={RegisterStyle.select}>
        <i></i>
        <select ref={PerosnRef} option='dropdown'>
          <option value='teacher'>Вчитель</option>
          <option value='student'>Учень</option>
        </select>
        </div>
        <hr />
      </div>
      <form className='Form_Login'>
        <input required type='email' placeholder='Email' ref={emailInputRef}></input>
        <input required type='username' placeholder='Name' ref={UsernameRef}></input>
        <input required type='password' placeholder='Password' ref={passwordRef}></input>
        <input required type='password' placeholder='Repeat password' ref={repeatPasswordRef}></input>
        <div className='div_submit_btn'>
          <button className='submit_btn' onClick={(e) => { onSubmit(e) }}>Зареєструватися</button>
        </div>
      </form>
    </div>
  )
}

export default Register
