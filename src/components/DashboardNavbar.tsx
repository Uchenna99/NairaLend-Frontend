import { useNavigate } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { logOut } from "./Logout";
import { GiCash } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoCardOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";

interface Props {
    pageName: (page: string)=>void;
}


const DashboardNavbar = ({pageName}: Props) => {
  const navigate = useNavigate();
  const [burger, setBurger] = useState(false);
  const [page, setPage] = useState('loan');


  useEffect(()=>{
    pageName(page);
  },[page]);


  return (
    <>
        <div className="nav-dash-wrap">

            <div className="tablet-navbar" style={{ backgroundColor:'#1E3A8A', padding:'0 20px'}}>
                <div className="main-nav-left">
                    <p onClick={()=>{navigate('/')}}>
                        NairaLender
                    </p>
                </div>

                <div className="tab-nav-right">
                {
                    burger?
                    <IoMdClose id="nav-burger2" onClick={()=>setBurger(false)} /> :
                    <RiMenu5Fill id="nav-burger" onClick={()=>setBurger(true)} />
                }
                </div>
            </div>

            {

                burger &&
                <div className="tab-navbar-slide-cover">
                    <div className="tab-navbar-slide">

                        <div className="dash-section-options">

                            <div className="dash-option" 
                                onClick={()=>{setPage('loan'); setBurger(false);}}>
                                <GiCash id="option-icon" />
                                <p>Take a loan</p>
                            </div>
            
                            <div className="dash-option" 
                                onClick={()=>{setPage('bank'); setBurger(false);}}>
                                <MdAccountBalanceWallet id="option-icon" />
                                <p>Bank Accounts</p>
                            </div>
            
                            <div className="dash-option" 
                                onClick={()=>{setPage('card'); setBurger(false);}}>
                                <IoCardOutline id="option-icon" />
                                <p>Payment Cards</p>
                            </div>

                            <div className="dash-option" 
                                onClick={()=>{setPage('settings'); setBurger(false);}}>
                                <IoCardOutline id="option-icon" />
                                <p>Settings</p>
                            </div>

                            <div className="dash-option" 
                                onClick={()=>{
                                    logOut();
                                    navigate('/login');
                                }}>
                                <AiOutlineLogout id="option-icon" />
                                <p>Logout</p>
                            </div>
            
                        </div>

                    </div>
                </div>
            }
        </div>
    </>
  )
}

export default DashboardNavbar;