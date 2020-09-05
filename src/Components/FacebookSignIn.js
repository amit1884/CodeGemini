import React from 'react'
import logo from '../assets/images/facebook.png'
import FacebookLogin from 'react-facebook-login';
import {useHistory} from 'react-router-dom'
function FacebookSignIn() {
    const history=useHistory()

// Function to Perform Facebook login

    const responseFacebook = (response) => {
        
        console.log(response);
        localStorage.setItem("token",response.accessToken) //Storing th unique token in local storage 
        localStorage.setItem("user",response.name)   //Storing the user name 
        history.push('/')  //after getting response/successfull login redirecting the user to home page 
      }

    const componentClicked=()=>{
        console.log("button clicked")
    }
    return (
        <>
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
