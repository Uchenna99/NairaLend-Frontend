import "../stylesheets/Signup.css"
import lady from "../assets/Images/hero_image.png"
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginResponse } from "../components/interfaces";

interface Login {
  email: string;
  password: string;
}



const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginData = {
    email: email,
    password: password
  }


  const handleLogin = async (data: Login)=>{
    try {
      await axios.post('http://localhost:3050/api/v1/auth/login', data)
      .then((response)=>{
        const saveResponse = response.data as LoginResponse
        localStorage.setItem('nairaLender', saveResponse.accessToken);
        navigate('/dashboard')
      })
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
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
            onChange={(e)=>setPassword(e.target.value)}/>
            {
              showPassword?
              <LuEyeClosed id="pass-eye" onClick={()=>setShowPassword(false)} /> :
              <LuEye id="pass-eye" onClick={()=>setShowPassword(true)} />
            }
          </div>

          <button className="signup-butn" onClick={()=>handleLogin(loginData)}>
            Login
          </button>

          <div className="redirect-div">
            <p>Don't have an account?</p>
            <Link id="redirect-link" to={'/signup'}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;