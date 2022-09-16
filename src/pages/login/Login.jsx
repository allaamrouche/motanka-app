import React from 'react';

import './Login.css';

export default function Login() {
    return(
        <div className="login">
            <form className='loginForm'>
                <span className='loginTitle'>Login</span>
                <label>enter your email</label>
                <input className="loginInput" type="email" placeholder="alla@gmail.com" /> 

                <label>enter your password</label>
                <input className="loginInput" type="password" /> 

                <button className='loginButton'>Login</button>
                <button className='loginRegisterButton'>Register</button>
            </form>
            
            forgot my password
        </div>
    )
}