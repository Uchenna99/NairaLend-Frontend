import { useEffect, useState } from "react";
import LoanStep2 from "./LoanStep2";
import axios from "axios";
import { AddBankAccount, hostURL } from "./interfaces";
import { CircleLoader } from "react-spinners";
import BankAccStep1 from "./BankAccStep1";


const BankAccounts = () => {
  const [step, setStep] = useState(1);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [submitData, setSubmitData] = useState<AddBankAccount|null>(null);
  // const [bankAccounts, setBankAccounts] = useState<DB_BankAccount[]|null>(null);

  useEffect(()=>{
    const getAccounts = async ()=>{

    }
    getAccounts();
  },[])


  const handleProps = (data: AddBankAccount)=>{
    setSubmitData(data);
  }

  const handleCreate = async ()=>{
    if(submitData!.accountNumber===''||submitData?.bankName==='Choose a bank'){
      alert('Fill in all fields');
    }else{
      try {
        setButtonLoader(true);
        axios.post(`${hostURL}/api/v1/user/new-bank-account`, submitData)
        .then((response)=>{
          alert(response.data.message);
          setButtonLoader(false);
          setStep(1);
        })
      } catch (error) {
        setButtonLoader(false);
        console.log(error);
        alert(error);
      }
    }
  };


  return (
    <>
      <div className="bank-acc-wrapper">
        {
          step === 1 && 
          <BankAccStep1 setStep={()=>setStep(2)} />
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
                {
                  buttonLoader &&
                  <div className="button-loader-div">
                  <CircleLoader 
                  color="#1E3A8A"  
                  size={15}
                  />
                </div>
                }
            </button>
          </div>
        }
        
      </div>
    </>
  )
}

export default BankAccounts;