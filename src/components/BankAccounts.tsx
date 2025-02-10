import { useEffect, useState } from "react";
import LoanStep2 from "./LoanStep2";
import axios from "axios";
import { AddBankAccount, DB_BankAccount } from "./interfaces";


const BankAccounts = () => {
  const [step, setStep] = useState(1);
  const [submitData, setSubmitData] = useState<AddBankAccount>();
  const [bankAccounts, setBankAccounts] = useState<DB_BankAccount[]|null>(null);

  useEffect(()=>{
    const getAccounts = async ()=>{

    }
    getAccounts();
  },[])


  const handleProps = (data: AddBankAccount)=>{
    setSubmitData(data);
  }

  const handleCreate = async ()=>{
    try {
      axios.post('http://localhost:3050/api/v1/user/new-bank-account', submitData)
      .then((response)=>{
        alert(response.data.message);
        setStep(1);
      })
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <div className="bank-acc-wrapper">
        {
          step === 1 && 
          <div className="bank-acc-box">
            <h4>Add a bank account</h4>
            <div className="add-bank-acc" onClick={()=>setStep(2)}>
              <p>+</p>
            </div>
          </div>
        }

        {
          step === 2 &&
          <LoanStep2 sendData={handleProps} />
        }

        {
          step === 2 &&
          <div className="dash-bottom-section">
            <button id="dash-bottom-butn" onClick={()=>setStep(1)}>
                Back
            </button>
            <button id="dash-bottom-butn" onClick={handleCreate}>
                Add account
            </button>
          </div>
        }
        
      </div>
    </>
  )
}

export default BankAccounts;