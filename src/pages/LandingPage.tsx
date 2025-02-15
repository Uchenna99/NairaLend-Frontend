import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { BsShieldFillCheck } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { JWT } from "../components/interfaces";
import { useInView } from "react-intersection-observer";



const LandingPage = () => {
  const [user, setUser] = useState(false);
  const [userName, setUserName] = useState('');
  const {ref: ref1, inView: inView1} = useInView({threshold: 0.6});
  const {ref: ref2, inView: inView2} = useInView({threshold: 0.6});
  const {ref: ref3, inView: inView3} = useInView({threshold: 0.6});
  const {ref: ref4, inView: inView4} = useInView({threshold: 0.6});
  const {ref: ref5, inView: inView5} = useInView({threshold: 0.6});
  const {ref: ref6, inView: inView6} = useInView({threshold: 0.6});

  useEffect(()=>{
      const checkUser = async()=>{
        const user = await localStorage.getItem('nairaLender');
        if(!user){
          console.log('Error: Cannot find user');
        }else{
          const getUser: JWT = jwtDecode(user);
          setUserName(getUser.name);
          setUser(true);
        }
      }
      checkUser();
  },[])
  

  return (
    <>
      <Navbar user={user} userName={userName} />

      <div className="landing-wrapper">

        <div className="hero-section">
          <div className="hero-container">
            <div className="hero-left">
              <div className="hero-left-main">
                <h2>Fast & Easy Loans To Suit Your Needs</h2>
              </div>
              <div className="hero-left-sub">
                <p>Flexible payment options, low-interest rates and instant approval - All in one place.</p>
              </div>
              <div className="hero-left-buttons">
                <Link id="hero-butn" to={''}>
                  Loan Calculator
                </Link>
                <Link id="hero-butn" to={'/signup'} style={{animationName:'shake'}}>
                  Get a Loan
                </Link>
              </div>
            </div>

            <div className="hero-right">
              <img id="hero-lady" src="https://res.cloudinary.com/df6xz7bqp/image/upload/v1739652267/hero_image_bjelll.png" alt="Happy Lady" />
            </div>
          </div>
        </div>


        <div className="why-us-section">
          <h2>WHY US?</h2>
          <p>At NairaLender, we make borrowing simple, fast, and secure. With our hassle-free online application, 
            you can get approved in minutes, no paperwork or long wait times. We offer flexible loan options with competitive 
            interest rates, ensuring you find a plan that suits your needs. Transparency is our priority, with no hidden fees 
            or surprises.
          </p>
          <p>
            Our secure platform safeguards your data while providing a seamless experience. Whether you need funds 
            for an emergency, business, or personal goal, we've got you covered. Join thousands of satisfied customers who trust 
            us to help them achieve financial freedom with ease.
          </p>

          <div className="features-wrap">
            <div className="feature-card-holder">
              <div className="feature-card" ref={ref1}
                style={{animationName: inView1? 'appear':'disappear'}}>
                <BsShieldFillCheck id="card-icon"/>
                <h2>Security</h2>
                <p>Secure and encrypted transactions with no hidden fees.</p>
              </div>

              <div className="feature-card" ref={ref2}
                style={{animationName: inView2? 'appear':'disappear'}}>
                <FaPeopleGroup id="card-icon"/>
                <h2>50k+ Clients</h2>
                <p>Join a growing community of satisfied customers.</p>
              </div>

              <div className="feature-card" ref={ref3}
                style={{animationName: inView3? 'appear':'disappear'}}>
                <FaMoneyBillWave id="card-icon"/>
                <h2>1B+ Approved</h2>
                <p>Over 1 billion naira successfully loaned.</p>
              </div>

              <div className="feature-card" ref={ref4}
                style={{animationName: inView4? 'appear':'disappear'}}>
                <FaMoneyBillWave id="card-icon"/>
                <h2>24/7</h2>
                <p>We are always available to meet your loan needs.</p>
              </div>

              <div className="feature-card" ref={ref5}
                style={{animationName: inView5? 'appear':'disappear'}}>
                <FaMoneyBillWave id="card-icon"/>
                <h2>1B+ Approved</h2>
                <p>Secure and encrypted transactions with no hidden fees</p>
              </div>

              <div className="feature-card" ref={ref6}
                style={{animationName: inView6? 'appear':'disappear'}}>
                <FaMoneyBillWave id="card-icon"/>
                <h2>1B+ Approved</h2>
                <p>Secure and encrypted transactions with no hidden fees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage;