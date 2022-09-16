import React from 'react';

import './Register.css';

export default function Register() {
    return(
        <div className="register">
            <form className='registerForm'>
                <span className='registerTitle'>Register</span>

                <label>enter your name</label>
                <input className="registerInput" type="text" /> 

                <label>enter your last name</label>
                <input className="registerInput" type="text" /> 

                <label>enter your user name</label>
                <input className="registerInput" type="text" /> 

                <label>enter city</label>
                <input className="registerInput" type="text" /> 

                <label>enter code postal</label>
                <input className="registerInput" type="text" /> 

                <label>enter your email</label>
                <input className="registerInput" type="email" placeholder="alla@gmail.com" /> 

                <label>enter your password</label>
                <input className="registerInput" type="password" /> 

                <button className='registerButton'>register</button>
                <button className='loginButton'>login</button>
            </form>
        </div>
    )
}