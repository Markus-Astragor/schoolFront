import React, { useRef, useState } from 'react';
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

  

  function onSubmit(e){

    e.preventDefault();
    
    const emailText = emailInputRef.current.value;
    const passwordText = passwordRef.current.value;
    

    
    setSignUpData({
      email: emailText,
      password: passwordText,
      person: 'student',
      username: 'Ostap'

    })


    


    axios.post('http://localhost:8080/register', signUpData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

 

  return (
    <div className='Login'>
      <div className="Login_as_pupil">
        <h3>Зареєструватися як учень</h3>
        <hr />
      </div>
      <form className='Form_Login'>
        <input required type='email' placeholder='Email' ref={emailInputRef}></input>
        <input required type='password' placeholder='Password' ref={passwordRef}></input>
        <input required type='password' placeholder='Repeat password' ref={repeatPasswordRef}></input>
        <div className='div_submit_btn'>
        <button className='submit_btn' onClick={(e)=>{onSubmit(e)}}>Зареєструватися</button>
        </div>
      </form>
    </div>
  )
}

export default Register
