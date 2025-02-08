import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import lady from "../assets/Images/hero_image.png"



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


        <div className="why-us-section"></div>
      </div>
    </>
  )
}

export default LandingPage;