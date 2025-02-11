import { useEffect, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";
import { AddBankAccount, JWT } from "./interfaces";
import { jwtDecode } from "jwt-decode";

interface Props {
    sendData: (data: AddBankAccount)=>void;
}

const LoanStep2 = ({sendData}: Props) => {
    const [drop, setDrop] = useState(false);
    const [bank, setBank] = useState('Choose a bank');
    const [type, setType] = useState('Current');
    const [acc, setAcc] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(()=>{
        const checkUser = async()=>{
          const user = await localStorage.getItem('nairaLender');
          if(!user){
            console.log('Error: Cannot find user');
          }else{
            const userInfo: JWT = jwtDecode(user);
            setUserId(userInfo.id);
          }
        }
        checkUser();
      },[])
  
    useEffect(()=>{
        sendData(submit);
    },[bank, acc, type])

    const submit = {
        bankName: bank,
        accountNumber: acc,
        accountType: type,
        userId: userId
    }


    const bankList = ['First Bank', 'United Bank for Africa', 'Access Bank', 'Wema Bank', 'Fidelity Bank', 'Union Bank', 'Zenith Bank', 'Eco Bank']

  return (
    <>
        <div className="loan-mid-section">
            <h4>Add your bank account</h4>

            <div className="loan-input-wrapper">
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
                                <div className="bank-option" key={bank} onClick={()=>{
                                    setBank(bank); 
                                    }}>
                                    <p>{bank}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="loan-input-wrapper">
                <h4>Account number</h4>
                
                <input type="text" value={acc} placeholder="0123456789"
                    onChange={(e)=>{
                    setAcc(e.target.value);
                }}/>
            </div>

            <div className="acc-type-wrapper">
                <h4>Account type</h4>

                <div className="account-options">
                    <div className="select-duration" onClick={()=>{
                        setType('Savings');
                        }}>
                        <p>Savings</p>
                    </div>
                    <div className="select-duration" onClick={()=>{
                        setType('Current');
                        }}>
                        <p>Current</p>
                    </div>
                    <div className="type-selector" style={{left: type==='Savings'? 0: type==='Current'? '120px':''}}></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoanStep2;