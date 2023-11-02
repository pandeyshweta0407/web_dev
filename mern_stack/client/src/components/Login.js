import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
  
      <div className='signup' >
      <div className='signin-container'>
        <div className='title'>Signin</div>
        <div className='input'>
           <input type='email' name="email"  className='form-submit'    placeholder='Your email' />
           <input type='password'name="password"  className='form-submit'    placeholder='Your Password ' />
           <input type='submit' name="signup"  className='form-submit'    placeholder='Signup' value="Login" />
           <div>don't have account? <NavLink to="/signup">Create account</NavLink></div>
        </div>
      </div>
    


    </div>
  )
}

export default Login