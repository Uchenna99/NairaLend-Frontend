import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import lady from "../assets/Images/hero_image.png"
import { BsShieldFillCheck } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";



const LandingPage = () => {
  return (
    <>
      <Navbar/>

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
                <Link id="hero-butn" to={''}>
                  Get a Loan
                </Link>
              </div>
            </div>

            <div className="hero-right">
              <img id="hero-lady" src={lady} alt="" />
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
              <div className="feature-card">
                <BsShieldFillCheck id="card-icon"/>
                <h2>Security</h2>
                <p>Secure and encrypted transactions with no hidden fees</p>
              </div>

              <div className="feature-card">
                <FaPeopleGroup id="card-icon"/>
                <h2>50k+ Clients</h2>
                <p>Join a growing community of satisfied customers.</p>
              </div>

              <div className="feature-card">
                <FaMoneyBillWave id="card-icon"/>
                <h2>1B+ Approved</h2>
                <p>Over 1 billion naira successfully loaned.</p>
              </div>

              <div className="feature-card">
                <FaMoneyBillWave id="card-icon"/>
                <h2>1B+ Approved</h2>
                <p>Secure and encrypted transactions with no hidden fees</p>
              </div>

              <div className="feature-card">
                <FaMoneyBillWave id="card-icon"/>
                <h2>1B+ Approved</h2>
                <p>Secure and encrypted transactions with no hidden fees</p>
              </div>

              <div className="feature-card">
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