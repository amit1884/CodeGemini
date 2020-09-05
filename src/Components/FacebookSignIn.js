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
                appId="1088597931155576"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} 
                textButton="Sign up with Facebook"
                icon="<i className='fa fa-user'></i>"
            />
        </div>
    )
}

export default FacebookSignIn
