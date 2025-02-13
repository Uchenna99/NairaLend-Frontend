import "../stylesheets/Signup.css"
import lady from "../assets/Images/hero_image.png"
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { hostURL, LoginResponse } from "../components/interfaces";
import { CircleLoader, ClipLoader } from "react-spinners";

interface Login {
  email: string;
  password: string;
}



const Signup = () => {
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(true);
  const [loggingIn, setLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(()=>{
    const checkUser = async()=>{
      const user = await localStorage.getItem('nairaLender');
      if(user){
        navigate('/dashboard');
      }else{
        setPageLoading(false);
        console.log('Cannot find user');
      }
    }
    checkUser();
  },[])
  

  const loginData = {
    email: email,
    password: password
  }

  const handleLogin = async (data: Login)=>{
    if(email===''||password===''){
      alert('Please fill in all fields');
    }else if (password.length < 8){
      alert('Password must be at least 8 characters long');
    }else{
      setLoggingIn(true);
      try {
        await axios.post(`${hostURL}/api/v1/auth/login`, data)
        .then((response)=>{
          const saveResponse = response.data as LoginResponse
          localStorage.setItem('nairaLender', saveResponse.accessToken);
        })
        .then(()=>navigate('/dashboard'))
        
      } catch (error) {
        setLoggingIn(false);
        console.log(error);
        alert(error);
      }
    }
  }

  return (
    <>
    {
      pageLoading?
      <div className="pageLoader">
        <ClipLoader 
          color="#1E3A8A"
          size={70}
        /> 
      </div>
      :
      <div className="signup-wrapper">
        <div className="signup-image">
          <img id="signup-lady" src={lady} alt="" />
        </div>

        <div className="signup-form">
          <div className="form-welcome">
            <p onClick={()=> navigate('/')}>
              <span id="logo-name">NairaLender</span>
            </p>
            <p style={{fontSize:'16px'}}>
              Welcome back! Login to your account.
            </p>
          </div>


          <input className="form-input" type="text" placeholder="Email" value={email}
          onChange={(e)=>setEmail(e.target.value)}/>

          <div className="input-wrapper">
            <input className="form-input" type={showPassword? 'text':'password'} placeholder="Password" value={password}
            onChange={(e)=>setPassword(e.target.value)} />
            {
              showPassword?
              <LuEyeClosed id="pass-eye" onClick={()=>setShowPassword(false)} /> :
              <LuEye id="pass-eye" onClick={()=>setShowPassword(true)} />
            }
          </div>

          <button className="signup-butn" onClick={()=>handleLogin(loginData)}>
            Login
            {
              loggingIn &&
              <div className="button-loader-div">
                <CircleLoader 
                color="#1E3A8A"  
                size={15}
                />
              </div>
            }
          </button>

          <div className="redirect-div">
            <p>Don't have an account?</p>
            <Link id="redirect-link" to={'/signup'}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default Signup;