import { useState } from "react";
import LoanStep2 from "./LoanStep2";

const BankAccounts = () => {
  const [step, setStep] = useState(1);

  const handleCreate = async ()=>{};

  
  return (
    <>
      <div className="bank-acc-wrapper">
        {
          step === 1 && 
          <div className="empty-bank-acc">
            <h4>Add a bank account</h4>
            <div className="add-bank-acc" onClick={()=>setStep(2)}>
              <p>+</p>
            </div>
          </div>
        }

        {
          step === 2 &&
          <LoanStep2 />
        }

        <div className="dash-bottom-section">
          <button id="dash-bottom-butn" onClick={()=>setStep(1)}>
              Back
          </button>
          <button id="dash-bottom-butn" onClick={handleCreate}>
              Add account
          </button>
        </div>
        
      </div>
    </>
  )
}

export default BankAccounts;