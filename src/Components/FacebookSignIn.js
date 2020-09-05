import React from 'react'
import logo from '../assets/images/facebook.png'
import FacebookLogin from 'react-facebook-login';
import {useHistory} from 'react-router-dom'
function FacebookSignIn() {
    const history=useHistory()
    const responseFacebook = (response) => {
        console.log(response);
        localStorage.setItem("token",response.accessToken)
        localStorage.setItem("user",response.name)
        history.push('/')
      }
    const componentClicked=()=>{
        console.log("button clicked")
    }
    return (
        <>
            {/* <span><img src={logo} alt="facebook login" className="logo"/></span> */}
            <FacebookLogin cssClass="facebook-login-btn"
                appId="756227315165339"
                autoLoad={true}
                fields="name,email,picture"
                onClick={componentClicked}
                callback={responseFacebook} 
                textButton="   Sign up with Facebook"
                icon={<i className="fa fa-facebook"style={{color:"dodgerblue"}}></i>}
            />
        </>
    )
}

export default FacebookSignIn
