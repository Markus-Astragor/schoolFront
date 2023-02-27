import React from 'react'
import './Login.css';

function Login() {
  return (
    <div className='Login'>
      <div className="Login_as_pupil">
        <h3>Увійти як учень</h3>
        <hr />
      </div>
      <form className='Form_Login'>
        <input type='email' placeholder='Email'></input>
        <input type='password' placeholder='Password'></input>
        <div className='div_submit_btn'>
        <button className='submit_btn'>Увійти</button>
        </div>
      </form>
    </div>
  )
}

export default Login
