import React from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'


const LoginSignup = () => {
  return (
    <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">

            {/* name */}
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Full Name' />
            </div>

            {/* email */}
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email ID' />
            </div>

            {/* password */}
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        <div className="forgot-password">
            Forgot Password <span> Click Here</span>
        </div>
        <div className="submit-container">
            <div className="submit">SignUp</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}

export default LoginSignup