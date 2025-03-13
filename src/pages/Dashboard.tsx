import { GiCash } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoCardOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { RiSettings3Line } from "react-icons/ri";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TakeLoan from "../components/TakeLoan/TakeLoan";
import BankAccounts from "../components/BankAccounts/BankAccounts";
import PaymentCards from "../components/PaymentCards/PaymentCards";
import { ClipLoader } from "react-spinners";
import { logOut } from "../components/Logout";
import DashboardNavbar from "../components/DashboardNavbar";
import Faq from "../components/Faq";


const Dashboard = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState('loan');
  const [pageloading, setPageLoading] = useState(true);


  useEffect(()=>{
      const checkUser = async()=>{
        const user = await localStorage.getItem('nairaLender');
        if(!user){
          console.log('Error: Cannot find user');
        }else{
          setPageLoading(false);
        }
      }
      checkUser();
    },[])

    const handleNavbar = (pageName: string)=>{
      setPage(pageName);
      console.log(pageName);
    }

  return (
    <>
        <DashboardNavbar pageName={handleNavbar} />
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
                  onClick={()=>setPage('loan')}>
                  <GiCash id="option-icon" />
                  <p>Take a loan</p>
                </div>

                <div className="dash-option" style={{backgroundColor: page==='bank'? '#0056B3':''}}
                  onClick={()=>setPage('bank')}>
                  <MdAccountBalanceWallet id="option-icon" />
                  <p>Bank Accounts</p>
                </div>

                <div className="dash-option" style={{backgroundColor: page==='card'? '#0056B3':''}}
                  onClick={()=>setPage('card')}>
                  <IoCardOutline id="option-icon" />
                  <p>Payment Cards</p>
                </div>

                <div className="dash-option" style={{backgroundColor: page==='faq'? '#0056B3':''}}
                  onClick={()=>setPage('faq')}>
                  <MdOutlineQuestionAnswer id="option-icon" />
                  <p>FAQ</p>
                </div>

                <div className="dash-option" style={{backgroundColor: page==='settings'? '#0056B3':''}}
                  onClick={()=>setPage('settings')}>
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

              { page === 'loan' && <TakeLoan /> }

              { page === 'bank' && <BankAccounts /> }

              { page === 'card' && <PaymentCards /> }

              { page === 'faq' && <Faq /> }
              
            </div>
          </div>
        }
    </>
  )
}

export default Dashboard