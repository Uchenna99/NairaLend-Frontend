import "../stylesheets/Signup.css"
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { hostURL } from "../components/interfaces";
import { toast } from "sonner";


const Signup = () => {
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(true);
  const [signingUp, setSigningUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
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

  const signupData = {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    email: email,
    password: password

  }

  const handleSignup = async ()=>{
    try {
      if(firstName===''||lastName===''||phone===''||email===''||password==='') {
        toast.error('Please fill in all fields');
      }else if(password.length < 8) {
        toast.error('Password must be at least 8 characters long');
      }else{
        setSigningUp(true);
        await axios.post(`${hostURL}/api/v1/user/signup`, signupData)
        .then((response)=>{
          navigate('/login');
          toast.success(response.data);
        })
      } 
      
    } catch (error) {
      setSigningUp(false);
      if(axios.isAxiosError(error)) {
        toast.error(error.response?.data.error || 'Network error');
      }else{
        toast.error('An unexpected error occurred');
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
          <img id="signup-lady" src="https://res.cloudinary.com/df6xz7bqp/image/upload/v1739652267/hero_image_bjelll.png" alt="Happy Lady" />
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

          <input className="form-input" type="text" placeholder="Name"
          onChange={(e)=>{setFirstName(e.target.value)}} />

          <input className="form-input" type="text" placeholder="Surname"
          onChange={(e)=>{setLastName(e.target.value)}} />

          <input className="form-input" type="text" placeholder="Phone Number (eg: 08012345678)"
          onChange={(e)=>{setPhone(e.target.value)}} />

          <input className="form-input" type="text" placeholder="Email"
          onChange={(e)=>{setEmail(e.target.value)}} />

          <div className="input-wrapper">
            <input className="form-input" type={showPassword? 'text':'password'} placeholder="Password"
            onChange={(e)=>{setPassword(e.target.value)}} />
            {
              showPassword?
              <LuEyeClosed id="pass-eye" onClick={()=>setShowPassword(false)} /> :
              <LuEye id="pass-eye" onClick={()=>setShowPassword(true)} />
            }
          </div>

          <button className="signup-butn" onClick={handleSignup}>
            Create Account
            {
              signingUp &&
              <div className="button-loader-div">
                <ClipLoader 
                color="#1E3A8A"  
                size={15}
                />
              </div>
            }
          </button>

          <div className="redirect-div">
            <p>Already have an account?</p>
            <Link id="redirect-link" to={'/login'}>
              Login
            </Link>
          </div>
        </div>
      </div>
    }
    </>
  )
}

export default Signup;