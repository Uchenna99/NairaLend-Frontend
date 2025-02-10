import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";

const LoanStep2 = () => {
    const [drop, setDrop] = useState(false);
    const [bank, setBank] = useState('Choose a bank');
    const [type, setType] = useState('current');


    const bankList = ['First Bank', 'United Bank for Africa', 'Access Bank', 'Wema Bank', 'Fidelity Bank', 'Union Bank', 'Zenith Bank', 'Eco Bank']

  return (
    <>
        <div className="loan-mid-section">
            <h4>Add your bank account</h4>

            <div className="laon-input-wrapper">
                <h4>Select a bank</h4>
                <div className="bank-select-div" onClick={()=>setDrop(!drop)}
                    style={{borderWidth: drop? '3px':''}}>
                    <p>{bank}</p>
                    {
                        drop? 
                        <HiOutlineChevronUp id="bank-chevron" /> :
                        <HiOutlineChevronDown id="bank-chevron" />
                    }
                    <div className="bank-select-dropdown" style={{display: drop? 'flex':'none'}}>
                        {
                            bankList.map((bank)=>(
                                <div className="bank-option" onClick={()=>setBank(bank)}>
                                    <p>{bank}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="laon-input-wrapper">
                <h4>Account number</h4>
                
                <input type="text" />
            </div>

            <div className="acc-type-wrapper">
                <h4>Account type</h4>

                <div className="account-options">
                    <div className="select-duration" onClick={()=>setType('savings')}>
                        <p>Savings</p>
                    </div>
                    <div className="select-duration" onClick={()=>setType('current')}>
                        <p>Current</p>
                    </div>
                    <div className="type-selector" style={{left: type==='savings'? 0: type==='current'? '120px':''}}></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoanStep2;