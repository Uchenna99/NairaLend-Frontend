import { useState } from "react";
import axios from "axios";
import { AddBankAccount } from "../interfaces";
import { ClipLoader } from "react-spinners";
import BankAccStep1 from "./BankAccStep1";
import AddNewBankAcc from "./AddNewBankAcc";
import { toast } from "sonner";
import userAxios from "../../config/axios.config";


const BankAccounts = () => {
  const [step, setStep] = useState(1);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [submitData, setSubmitData] = useState<AddBankAccount|null>(null);
  const [inpError, setInpError] = useState(true);


  const handleProps = (data: AddBankAccount)=>{
    setSubmitData(data);
  };

  const handleInpError = (value: boolean)=>{
    setInpError(value);
  };

  const handleCreate = async ()=>{
    if(submitData!.accountNumber===''||submitData?.bankName==='Choose a bank'){
      toast.error('Please fill in all fields');
    }else if(inpError) {
      toast.error('Fill in account number correctly');
    }else if(submitData!.accountNumber.length < 10) {
      toast.error('Account number must be 10 digits long')
    }else{
      try {
        setButtonLoader(true);
        await userAxios.post(`/api/v1/user/new-bank-account`, submitData)
        .then((response)=>{
          setButtonLoader(false);
          setStep(1);
          toast.success(response.data.message);
        })
      } catch (error) {
        setButtonLoader(false);
        if(axios.isAxiosError(error)) {
          toast.error(error.response?.data.message || "Network error");
        }else{
          toast.error("An unexpected error occurred");
        }
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
          <AddNewBankAcc sendData={handleProps} inputError={handleInpError} />
        }

        {
          step === 2 &&
          <div className="dash-bottom-section" style={{position: 'relative'}}>
            <button id="dash-bottom-butn" onClick={()=>setStep(1)}>
                Back
            </button>
            <button id="dash-bottom-butn" onClick={handleCreate}>
                Add account
                {
                  buttonLoader &&
                  <div className="button-loader-div">
                  <ClipLoader 
                  color="#FFFF"  
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