import { GiCash } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoCardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TakeLoan from "../components/TakeLoan";
import BankAccounts from "../components/BankAccounts";
import PaymentCards from "../components/PaymentCards";


const Dashboard = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState('loan');
  const [loading, setLoading] = useState(true);


  useEffect(()=>{
      const checkUser = async()=>{
        const user = await localStorage.getItem('nairaLender');
        if(!user){
          console.log('Error: Cannot find user');
        }else{
          setLoading(false);
        }
      }
      checkUser();
    },[])

  return (
    <>
        <div className="dashboard-wrapper">
          <div className="dash-options-panel">
            <div className="dash-logo-area">
              <p style={{fontFamily:'head'}} onClick={()=>navigate('/')}>
                NairaLender
              </p>
            </div>

            <div className="dash-section-options">
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
            </div>
          </div>


          <div className="dash-display-area">

            { page === 'loan' && <TakeLoan /> }

            { page === 'bank' && <BankAccounts /> }

            { page === 'card' && <PaymentCards /> }
            
          </div>
        </div>
    </>
  )
}

export default Dashboard