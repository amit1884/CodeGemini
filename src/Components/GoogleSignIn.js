import React from 'react'
import logo from '../assets/images/google.png'
import '../assets/css/style.css'
import GoogleLogin from 'react-google-login';
import {useHistory} from 'react-router-dom'
 function GoogleSignIn() {
     const history=useHistory()
    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj.name)
        localStorage.setItem("token",response.tokenId)
        localStorage.setItem("user",response.profileObj.name)
        history.push('/')
      }
    return (
        <div>
            {/* <button className="social-login-btn">
                <span><img src={logo} alt="google"/></span>&nbsp;&nbsp;
                <span>Sign up with Google</span>
            </button> */}
            <GoogleLogin
                clientId="91775337818-s054nauico708jd7gbltsdm0t8eivsi2.apps.googleusercontent.com"
                buttonText="Sign up with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                className="social-login-btn"
            />
        </div>
    )
}

export default GoogleSignIn
