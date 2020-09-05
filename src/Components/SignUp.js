import React from 'react';
import '../assets/css/style.css'
import GoogleSignIn from './GoogleSignIn';
import FacebookSignIn from './FacebookSignIn';
function SignUp() {
  return (
    <div className="container">
       <div className="row">
           <div className="col-md-3 col-sm-12"></div>
           <div className="col-md-6 col-sm-12">
               <div className="card mycard">
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
                                <div className="form-group">
                                <input type="text" name="first" placeholder="First Name" className="form-control"/>
                                </div>
                                <div className="form-group">
                                <input type="text" name="last" placeholder="Last Name" className="form-control"/>
                                </div>
                                <div className="form-group">
                                <input type="text" name="email" placeholder="Email Address" className="form-control"/>
                                </div>
                                <div className="form-group">
                                <input type="password" name="password" placeholder="Password" className="form-control"/>
                                </div>
                                <div className="">
                                    <p>by clicking sign up, you agree to our <span  style={{color:"dodgerblue",cursor:"pointer"}}>Terms of Use</span> and our <span style={{color:"dodgerblue",cursor:"pointer"}}>Privacy Policy</span></p>
                                </div>
                                <div className="form-group">
                                <button type="submit"  name ="submit" className="form-control btn btn-primary text-center">
                                    SIGN UP
                                </button>
                                </div>
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
