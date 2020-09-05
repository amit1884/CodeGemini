import React from 'react'
import logo from '../assets/images/google.png'
import '../assets/css/style.css'
function GoogleSignIn() {
    return (
        <div>
            <button className="social-login-btn">
                <span><img src={logo} alt="google"/></span>&nbsp;&nbsp;
                <span>Sign up with Google</span>
            </button>
        </div>
    )
}

export default GoogleSignIn
