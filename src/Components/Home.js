import React ,{useState,useEffect}from 'react';
import img from '../assets/images/company.png'
import { useHistory, Redirect} from 'react-router-dom'
function Home() {

  const [isLoggedIn,setIsLoggedIn]=useState(false)   //Variable to Check if any user is logged in or not
  const [user,setUser]=useState('')   //variable to store the user data
  const history=useHistory()

  //this useeffect runs when login status changes

  useEffect(()=>{
    if(localStorage.getItem("token"))   //Checking wheather any token is present in local storage or not
    {
      setIsLoggedIn(true)  // if true setting login status true
      setUser(localStorage.getItem("user"))  //storing the user data
    }
  },[isLoggedIn])

  //Checking the login status if true stay on home page else redirect to signup page
  //this useeffect will run only once when component first mount
  useEffect(()=>{

    if(localStorage.getItem("token"))
    {
      setIsLoggedIn(true)
    }
    else{
      history.push('/signup')
    }

  },[])

  //Perform logout functionality

  const logoutHandle=()=>{

    localStorage.removeItem("token")  //removing the token and user from local storage
    localStorage.removeItem("user")
    setIsLoggedIn(false)  // setting the login status false
    history.push('/signup')
  }
  return (
    <div className="App" style={{marginTop:"40px"}}>
        <h2 className="text-center">LogIn Successfull !</h2>
        <h3 className="text-center">Welcome <span style={{color:"dodgerblue"}}>{user}</span> ,to our Home Page !!!</h3>
        <div style={{display:"flex",justifyContent:"center"}}>
        <img src ={img} alt="company"/>
        </div>
        {/* logout button */}
        <div className="text-center">
        <button className="btn btn-warning" onClick={logoutHandle}>Logout</button>
        </div>
    </div>
  );
}

export default Home;
