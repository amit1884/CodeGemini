import React from 'react'
import logo from '../assets/images/facebook.png'
import FacebookLogin from 'react-facebook-login';

function FacebookSignIn() {
    const responseFacebook = (response) => {
        console.log(response);
      }
    const componentClicked=()=>{
        console.log("button clicked")
    }
    return (
        <div>
            {/* <span><img src={logo} alt="facebook login" className="logo"/></span>&nbsp;&nbsp; */}
            <FacebookLogin cssClass="social-login-btn"
                appId="756227315165339"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} 
                textButton="Sign up with Facebook"
            />
        </div>
    )
}

export default FacebookSignIn
