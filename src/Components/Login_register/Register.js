import React, { useRef, useState } from 'react';
import RegisterStyle from  './Register.module.css';
import axios from 'axios';

function Register() {


  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    person: "student",
    username: "Ostap"
  })


  const emailInputRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);



  function onSubmit(e) {

    e.preventDefault();

    const emailText = emailInputRef.current.value;
    const passwordText = passwordRef.current.value;
    const personText = 'student';   //Замінити на значення person
    const usernametext = 'Ostap'; // витягнути від юзера



    axios.post('http://localhost:8080/register', {
      password: passwordText,
      username: usernametext,
      email: emailText,
      person: personText
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  return (
    <div className='Login'>
      <div className={RegisterStyle.RegisterWrapper}>
        <h3 style={{margin: '10px 0px 15px 0px'}}>Зареєструватися як:</h3>
        <div className={RegisterStyle.select}>
        <i></i>
        <select option='dropdown'>
       
          <option value='01'>Вчитель</option>
          <option value='01'>Учень</option>
        </select>
        </div>
        <hr />
      </div>
      <form className='Form_Login'>
        <input required type='email' placeholder='Email' ref={emailInputRef}></input>
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
