import React,{useState} from 'react';
import '../assets/css/style.css'
import GoogleSignIn from './GoogleSignIn';
import FacebookSignIn from './FacebookSignIn';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
function SignUp() {
    const [First,setFirst]=useState('')
    const [Last,setLast]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const history =useHistory()
    const SubmitHandler=(e)=>{

        e.preventDefault();
        console.log("Email",Email,"Password",Password)
        axios.post("https://reqres.in/api/register",{
            email:Email,
            password:Password
        })
        .then(result=>{
            console.log(result)
            if(result.data)
            {
                localStorage.setItem("token",result.data.token)
                history.push('/')
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
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-6 col-sm-12">
                                <GoogleSignIn/>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <FacebookSignIn/>
                            </div>
                        </div>
                        <p className="text-center">or</p>
                        <div className="row">
                            <div className="col-sm-12">
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
