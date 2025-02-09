import "../stylesheets/Signup.css"
import lady from "../assets/Images/hero_image.png"
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

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
              Create your account and get one step closer to your first loan from us.
            </p>
          </div>

          <input className="form-input" type="text" placeholder="Name" />

          <input className="form-input" type="text" placeholder="Surname" />

          <input className="form-input" type="text" placeholder="Phone Number (eg: 08012345678)" />

          <input className="form-input" type="text" placeholder="Email" />

          <div className="input-wrapper">
            <input className="form-input" type={showPassword? 'text':'password'} placeholder="Password" />
            {
              showPassword?
              <LuEyeClosed id="pass-eye" onClick={()=>setShowPassword(false)} /> :
              <LuEye id="pass-eye" onClick={()=>setShowPassword(true)} />
            }
          </div>

          <button className="signup-butn">
            Create Account
          </button>

          <div className="redirect-div">
            <p>Already have an account?</p>
            <Link id="redirect-link" to={'/login'}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;