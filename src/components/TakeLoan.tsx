import { useState } from "react";
import LoanStep1 from "./LoanStep1";
import ListOfBankAcc from "./ListOfBankAcc";


const TakeLoan = () => {
    const [step, setStep] = useState(1);

    
  return (
    <>
        <div className="get-loan-section">
            <div className="form-progress-section">
                <div className="form-progress" style={{color: step===1? '#1E3A8A':'', fontWeight: step===1? 'bold':''}}>
                    <div className="progress-number"><p>1</p></div>
                    <p>Choose loan option</p>
                </div>

                <div className="form-progress" style={{color: step===2? '#1E3A8A':'', fontWeight: step===2? 'bold':''}}>
                    <div className="progress-number"><p>2</p></div>
                    <p>Select bank account</p>
                </div>

                <div className="form-progress">
                    <div className="progress-number"><p>3</p></div>
                    <p>Select payment card</p>
                </div>

                <div className="form-progress">
                    <div className="progress-number"><p>4</p></div>
                    <p>Confirmation</p>
                </div>
            </div>

            { step === 1 && <LoanStep1 /> }

            { step === 2 && <ListOfBankAcc /> }
            

            
            {
                step === 1 &&
                <div className="dash-bottom-section" style={{position:'absolute'}}>
                    <button id="dash-bottom-butn" onClick={()=>setStep(2)}>
                        Next Step
                    </button>
                </div>
            }
            {
                step === 2 &&
                <div className="dash-bottom-section">
                    <button id="dash-bottom-butn" onClick={()=>setStep(1)}>
                        Back
                    </button>
                    <button id="dash-bottom-butn" onClick={()=>setStep(3)}>
                        Next Step
                    </button>
                </div>
            }
            {
                step === 3 &&
                <div className="dash-bottom-section">
                    <button id="dash-bottom-butn" onClick={()=>setStep(2)}>
                        Back
                    </button>
                    <button id="dash-bottom-butn" onClick={()=>setStep(4)}>
                        Next Step
                    </button>
                </div>
            }
            
        </div>
    </>
  )
}

export default TakeLoan;