import { useEffect } from "react";

interface Props {
    setStep: ()=>void;
}

const BankAccStep1 = ({setStep}: Props) => {

    useEffect(()=>{
        const getAccounts = async ()=>{

        }
        getAccounts();
    },[]);

  return (
    <>
        <div className="bank-acc-box">
            <h4>Add a bank account</h4>
            <div className="add-bank-acc" onClick={()=>{setStep()}}>
              <p>+</p>
            </div>
        </div>
    </>
  )
}

export default BankAccStep1