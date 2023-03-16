import React, { useRef, useState } from 'react';
import RegisterStyle from  './Register.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register() {


  const [emailEror, setEmailEror] = useState(false);
  const [usernameEror, setUsernameEror] = useState(false);
  const [passwordEror, setPasswordEror] = useState(false);
  const [errorText, setErrorText] = useState('');

  const navigateUser = useNavigate();

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
        const respPerson = response.data.UserData.person;

        
        if(respPerson == 'student')
        {
          navigateUser('/userpage');
        }

        if(respPerson == 'teacher')
        {
          navigateUser('/');
        }


      }).catch(function (error) {
        console.log(error);

        const errorMessage = error.response.data[0].msg;
        console.log(errorMessage);

        if(errorMessage == 'Неправильний email')
        {
          setEmailEror(true);
          setErrorText('Некоректний email');
        }

        if(errorMessage == 'Пароль повинен мінімум 8 символів')
        {
          setPasswordEror(true);
          setErrorText('Пароль повинен мінімум 8 символів')
        }

        if(errorMessage == "Ім'я повинно містити мінімум 3 символи")
        {
          setUsernameEror(true);
          setErrorText("Ім'я повинно містити мінімум 3 символи");
        }


        
      });
  }

  function CheckUserValid(email, password, repeatPassword, username)
  {
      setEmailEror(false);
      setPasswordEror(false);
      setUsernameEror(false);
      setErrorText('');

      
    if(!email.includes('.', '@'))
    {
      console.log('Некоректний email');
      setEmailEror(true)
      setErrorText('Некоректний email')
      return 1;
    }

    if(password.length <8)
    {
      setPasswordEror(true);
      setErrorText('Пароль повинен мінімум 8 символів')
      console.log('Пароль повинен мінімум 8 символів');
      return 1;
    }

    if(!(password == repeatPassword))
    {
      console.log('Паролі не співпадають');
      setPasswordEror(true);
      setErrorText('Паролі не співпадають')
      return 1;
    }


    if(username.length < 3)
    {
      console.log("Ім'я повинно містити мінімум 3 символи");
      setUsernameEror(true)
      setErrorText("Ім'я повинно містити мінімум 3 символи");
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
        <input className={emailEror ? RegisterStyle.error_border : RegisterStyle.error_border_normal} required type='email' placeholder='Email' ref={emailInputRef}></input>
        <p className={emailEror ? RegisterStyle.error_block : RegisterStyle.error_block_hidden}>{errorText}</p>

        <input className={usernameEror ? RegisterStyle.error_border : RegisterStyle.error_border_normal} required type='username' placeholder='Name' ref={UsernameRef}></input>
        <p className={usernameEror ? RegisterStyle.error_block : RegisterStyle.error_block_hidden}>{errorText}</p>

        <input className={passwordEror ? RegisterStyle.error_border : RegisterStyle.error_border_normal} required type='password' placeholder='Password' ref={passwordRef}></input>
        <p className={passwordEror ? RegisterStyle.error_block : RegisterStyle.error_block_hidden}>{errorText}</p>

        <input className={passwordEror} required type='password' placeholder='Repeat password' ref={repeatPasswordRef}></input>
        <p className={passwordEror ? RegisterStyle.error_block : RegisterStyle.error_block_hidden}>{errorText}</p>

        <div className='div_submit_btn'>
          <button className='submit_btn' onClick={(e) => { onSubmit(e) }}>Зареєструватися</button>
          <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> 
        </div>

        
      </form>
    </div>
  )
}

export default Register
