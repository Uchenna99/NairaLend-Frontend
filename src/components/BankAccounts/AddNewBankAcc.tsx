import { useEffect, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";
import { AddBankAccount, Bank, hostURL, JWT } from "../interfaces";
import { jwtDecode } from "jwt-decode";
import { ClipLoader } from "react-spinners";
import axios from "axios";

interface Props {
    sendData: (data: AddBankAccount)=>void;
    inputError: (value: boolean)=>void;
}

const AddNewBankAcc = ({sendData, inputError}: Props) => {
    const [drop, setDrop] = useState(false);
    const [bank, setBank] = useState('Choose a bank');
    const [type, setType] = useState('Current');
    const [acc, setAcc] = useState('');
    const [userId, setUserId] = useState('');
    const [bankLogo, setBankLogo] = useState('');
    const [inpError, setInpError] = useState(false);

    const [banksArray, setBanksArray] = useState<Bank[] | null>(null);

    useEffect(()=>{
        const checkUser = async()=>{
          const user = localStorage.getItem('nairaLender');
          if(!user){
            console.log('Error: Cannot find user');
          }else{
            const userInfo: JWT = jwtDecode(user);
            setUserId(userInfo.id);
            await axios.get(`${hostURL}/api/v1/user/get-banks-list`)
            .then((response)=>{
                const banksList = response.data as Bank[];
                setBanksArray(banksList);
            })
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
        userId: userId,
        image: bankLogo
    };

    useEffect(()=>{
        const nums = ['0','1','2','3','4','5','6','7','8','9'];
        let count = 0
        for(const char of acc) {
            if(!nums.includes(char)) {
                count++
            }
        };
        if(count === 0) {
            setInpError(false);
            inputError(false);
        }else{
            setInpError(true);
            inputError(true);
        };
    },[acc]);


  return (
    <>
            <div className="add-acc-box">
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
                                banksArray?
                                banksArray.map((bank)=>(
                                    <div className="bank-option" key={bank.id} onClick={()=>{
                                        setBank(bank.name); 
                                        setBankLogo(bank.image);
                                        }}>
                                        <p>{bank.name}</p>
                                    </div>
                                ))
                                :
                                <div className="full-pageLoader">
                                    <ClipLoader 
                                    color="#1E3A8A"
                                    size={40}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>

                <div className="loan-input-wrapper">
                    <h4>Account number</h4>
                    
                    <input type="text" value={acc} placeholder="0123456789"
                        maxLength={10}
                        style={{outlineColor: inpError? 'red':''}}
                        onChange={(e)=>{
                        setAcc(e.target.value);
                    }}/>
                    <p id="input-error-message" style={{display: inpError? 'flex':'none'}}>
                        Numbers only
                    </p>
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

export default AddNewBankAcc;