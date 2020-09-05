import React,{useState} from 'react';
import '../assets/css/style.css'
import GoogleSignIn from './GoogleSignIn';
import FacebookSignIn from './FacebookSignIn';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
function SignUp() {

    //Variable to store the form data.
    const [First,setFirst]=useState('')
    const [Last,setLast]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')

    const history =useHistory()
    //Function to handle form submit action.

    const SubmitHandler=(e)=>{

        e.preventDefault(); //preventing the browser to reload

        // console.log("Email",Email,"Password",Password)
        // Executing a post request to the api by passing the email and password using axios
        axios.post("https://reqres.in/api/register",{
            email:Email,
            password:Password
        })
        .then(result=>{
            console.log(result)
            if(result.data)
            {
                localStorage.setItem("token",result.data.token) //storing the token in local storage
                const name=First+' '+Last;
                localStorage.setItem("user",name)   //storing the name in local storage
                history.push('/')    //After successfull signup redirecting to home page.
            }
            else{
                console.log("error ocurred")
            }
        })

    }
  return (
    <div className="container">
       <div className="row">
           <div className="col-md-3 col-sm-12"></div>
           <div className="col-md-6 col-sm-12">
               <div className="card mycard" style={{boxShadow:"1px 1px 10px lightgray"}}>
                    <p className="text-center">Sign Up</p>
                    <h3 className="text-center">Create your account</h3>
                    <p className="text-center">Lorem Ipsum dofor sit amet,</p>
                    <div className="container-fluid">
                        <div className="row ">
                            <div className="col-md-6 col-sm-12">
                                <GoogleSignIn/>  {/*google login button */}
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <FacebookSignIn/>    {/*facebook login button */}
                            </div>
                        </div>
                        <p className="text-center">or</p>
                        <div className="row">
                            <div className="col-sm-12"> 
                            {/* Form for registering the user */}
                                <form onSubmit={SubmitHandler}>
                                <div className="form-group">
                                <input onChange={(e)=>setFirst(e.target.value)} value={First}type="text" name="first" placeholder="First Name" className="form-control"/>
                                </div>
                                <div className="form-group">
                                <input onChange={(e)=>setLast(e.target.value)} value={Last}type="text" name="last" placeholder="Last Name" className="form-control"/>
                                </div>
                                <div className="form-group">
                                <input onChange={(e)=>setEmail(e.target.value)} value={Email}type="text" name="email" placeholder="Email Address" className="form-control"/>
                                </div>
                                <div className="form-group">
                                <input onChange={(e)=>setPassword(e.target.value)} value={Password}type="password" name="password" placeholder="Password" className="form-control"/>
                                </div>
                                <div className="text">
                                    <p style={{fontSize:"15px"}}>by clicking sign up, you agree to our <span  style={{color:"dodgerblue",cursor:"pointer"}}>Terms of Use</span> and our <span style={{color:"dodgerblue",cursor:"pointer"}}>Privacy Policy</span></p>
                                </div>
                                <div className="form-group">
                                <button type="submit"  name ="submit" className="form-control btn btn-primary text-center">
                                    SIGN UP
                                </button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
       </div>
    </div>
  );
}

export default SignUp;
