import React ,{useState,useEffect}from 'react';
import img from '../assets/images/company.png'
import { useHistory, Redirect} from 'react-router-dom'
function Home() {

  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const history=useHistory()
  useEffect(()=>{
    if(localStorage.getItem("token"))
    {
      setIsLoggedIn(true)
    }
  },[isLoggedIn])
  useEffect(()=>{

    if(localStorage.getItem("token"))
    {
      setIsLoggedIn(true)
    }
    else{
      history.push('/signup')
    }

  },[])

  const logoutHandle=()=>{

    localStorage.removeItem("token")
    setIsLoggedIn(false)
    history.push('/signup')
  }
  return (
    <div className="App" style={{marginTop:"40px"}}>
        <h2 className="text-center">LogIn Successfull !</h2>
        <h3 className="text-center">Welcome To our Home Page !!!</h3>
        <div style={{display:"flex",justifyContent:"center"}}>
        <img src ={img} alt="company"/>
        </div>
        <div className="text-center">
        <button className="btn btn-warning" onClick={logoutHandle}>Logout</button>
        </div>
    </div>
  );
}

export default Home;
