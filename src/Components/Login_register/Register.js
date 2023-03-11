import React from 'react'

function Register() {
  return (
    <div className='Login'>
      <div className="Login_as_pupil">
        <h3>Зареєструватися як учень</h3>
        <hr />
      </div>
      <form className='Form_Login'>
        <input required type='email' placeholder='Email'></input>
        <input required type='password' placeholder='Password'></input>
        <input required type='password' placeholder='Password'></input>
        <div className='div_submit_btn'>
        <button className='submit_btn'>Зареєструватися</button>
        </div>
      </form>
    </div>
  )
}

export default Register
