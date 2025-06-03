import { GiCash } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoCardOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { RiSettings3Line } from "react-icons/ri";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { logOut } from "../../components/Logout";
import DashboardNavbar from "../../components/DashboardNavbar";


const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState('');
  const [pageloading, setPageLoading] = useState(true);


  useEffect(()=>{    
    switch (true) {
      case location.pathname.includes('dashboard/loan'):
        setPage('loan');
        break;
      case location.pathname.includes('bank-accounts'):
        setPage('bank');
        break;
      case location.pathname.includes('payment-cards'):
        setPage('card');
        break;
      case location.pathname.includes('faq'):
        setPage('faq');
        break;
    
      default:
        break;
    }
  },[location]);

  useEffect(()=>{
      const checkUser = async()=>{
        const user = localStorage.getItem('nairaLender');
        if(!user){
          console.log('Error: Cannot find user');
        }else{
          setPageLoading(false);
        }
      }
      checkUser();
    },[])


  return (
    <>
        <DashboardNavbar />
        {
          pageloading?
          <div className="pageLoader">
            <ClipLoader 
              color="#1E3A8A"
              size={70}
            /> 
          </div>
          :
          <div className="dashboard-wrapper">
            <div className="dash-options-panel">

              <div className="dash-section-options">

                <div className="dash-logo-area">
                  <p style={{fontFamily:'head'}} onClick={()=>navigate('/')}>
                    NairaLender
                  </p>
                </div>

                <div className="dash-option" style={{backgroundColor: page==='loan'? '#0056B3':''}}
                  onClick={()=> navigate('loan')}>
                  <GiCash id="option-icon" />
                  <p>Take a loan</p>
                </div>

                <div className="dash-option" style={{backgroundColor: page==='bank'? '#0056B3':''}}
                  onClick={()=> navigate('bank-accounts')}>
                  <MdAccountBalanceWallet id="option-icon" />
                  <p>Bank Accounts</p>
                </div>

                <div className="dash-option" style={{backgroundColor: page==='card'? '#0056B3':''}}
                  onClick={()=> navigate('payment-cards')}>
                  <IoCardOutline id="option-icon" />
                  <p>Payment Cards</p>
                </div>

                <div className="dash-option" style={{backgroundColor: page==='faq'? '#0056B3':''}}
                  onClick={()=> navigate('faq')}>
                  <MdOutlineQuestionAnswer id="option-icon" />
                  <p>FAQ</p>
                </div>

                <div className="dash-option" style={{backgroundColor: page==='settings'? '#0056B3':''}} >
                  <RiSettings3Line id="option-icon" />
                  <p>Settings</p>
                </div>

              </div>


              <div className="dash-option" style={{marginTop:'100%'}} 
                onClick={()=>{
                  logOut();
                  navigate('/login');
                }}>
                <AiOutlineLogout id="option-icon" />
                <p>Logout</p>
              </div>

            </div>


            <div className="dash-display-area">

              <Outlet/>
              
            </div>

          </div>
        }
    </>
  )
}

export default Dashboard