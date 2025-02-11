import { Link, useNavigate } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { logOut } from "./Logout";

interface Prop {
  user: boolean;
  userName: string;
}

const Navbar = ({user, userName}: Prop) => {
  const navigate = useNavigate();
  const [burger, setBurger] = useState(false);

  return (
    <>
        <div className="navbar-container">
          <div className="main-navbar">
            <div className="main-nav-left">
              <p>NairaLender</p>
            </div>

            {
              user?
              <div className="main-nav-right">
                <p>Hi, {userName}</p>
              </div>
              :
              <div className="main-nav-right">
                <Link id="nav-login" to={'/login'}>
                  Login
                </Link>
                <Link id="nav-btn" to={'/signup'}>
                  Get a Loan
                </Link>
              </div>
            }
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
              {
                user &&
                <div className="tab-navbar-slide-option">
                  <Link id="nav-option" to={'/signup'}>
                    Dashboard
                  </Link>
                </div>
              }

              {
                !user &&
                <div className="tab-navbar-slide-option">
                  <Link id="nav-option" to={'/signup'}>
                    Sign Up
                  </Link>
                </div>
              }

              {
                !user &&
                <div className="tab-navbar-slide-option">
                  <Link id="nav-option" onClick={()=>logOut} to={'/login'}>
                    Login
                  </Link>
                </div>
              }

              <div className="tab-navbar-slide-option">
                <Link id="nav-option" to={''}>
                  Loan Calculator
                </Link>
              </div>

              {
                user &&
                <div className="tab-navbar-slide-option">
                  <p onClick={()=>{
                    logOut();
                    navigate('/login');
                    }}>
                    Logout
                  </p>
                </div>
              }

            </div>
          </div>
        }
    </>
  )
}

export default Navbar;