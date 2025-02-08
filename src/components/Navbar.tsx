import { Link } from "react-router-dom";



const Navbar = () => {
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
            
          </div>
        </div>
    </>
  )
}

export default Navbar;