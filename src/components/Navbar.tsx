import { Link } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";



const Navbar = () => {
  const [burger, setBurger] = useState(false);

  return (
    <>
        <div className="navbar-container">
          <div className="main-navbar">
            <div className="main-nav-left">
              <p>NairaLender</p>
            </div>

            <div className="main-nav-right">
              <Link id="nav-login" to={'/login'}>
                Login
              </Link>
              <Link id="nav-btn" to={'/signup'}>
                Get a Loan
              </Link>
            </div>
          </div>

          <div className="tablet-navbar">
            <div className="main-nav-left">
              <p>NairaLender</p>
            </div>

            <div className="tab-nav-right">
              {
                burger?
                <IoMdClose id="nav-burger2" onClick={()=>setBurger(false)} /> :
                <RiMenu5Fill id="nav-burger" onClick={()=>setBurger(true)} />
              }
            </div>
          </div>
        </div>

        {
          burger &&
          <div className="tab-navbar-slide-cover">
            <div className="tab-navbar-slide">
              <div className="tab-navbar-slide-option">
                <Link id="nav-option" to={'/signin'}>
                  Sign In
                </Link>
              </div>

              <div className="tab-navbar-slide-option">
                <Link id="nav-option" to={'/login'}>
                  Login
                </Link>
              </div>

              <div className="tab-navbar-slide-option">
                <Link id="nav-option" to={'/login'}>
                  Loan Calculator
                </Link>
              </div>

            </div>
          </div>
        }
    </>
  )
}

export default Navbar;