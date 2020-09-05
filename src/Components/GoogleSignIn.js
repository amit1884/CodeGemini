import React from 'react'
import logo from '../assets/images/google.png'
import '../assets/css/style.css'
import GoogleLogin from 'react-google-login';
import {useHistory} from 'react-router-dom'
 function GoogleSignIn() {
     const history=useHistory()

     // Function to Perform Gmail login
     
    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj.name)
        localStorage.setItem("token",response.tokenId) //Storing th unique token in local storage 
        localStorage.setItem("user",response.profileObj.name) //Storing the user name 
        history.push('/')      //after getting response/successfull login redirecting the user to home page 
      }
    return (
        <div>
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
